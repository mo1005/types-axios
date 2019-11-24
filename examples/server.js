const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')
const webpack = require('webpack')
const cookieParser = require('cookie-parser')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const atob = require('atob')

// require('./server2')
const app = express()
const compiler = webpack(WebpackConfig);
// app.use(cookieParser())
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname, {
  setHeaders(res) {
    res.cookie('XSRF-TOKEN-D', '1234abc')
  }
}))

// app.use(multipart({
//   uploadDir: path.resolve(__dirname, 'upload')
// }))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

RegisterSimpleRouter()
RegisterBaseRouter()
RegisterErrorRouter()
RegisterExtendRouter()
RegisterInterceptorRouter()
RegisterConfigRouter()
RegisterCancelRouter()
RegisterMoreRouter()

app.use(router)


const port = process.env.PORT || 8080

module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})

function RegisterSimpleRouter() {
  router.get('/simple/get', function (req, res) {
    res.json({
      msg: 'hello world'
    })
  })
}

function RegisterBaseRouter() {
  router.get('/base/get', function (req, res) {
    res.json(req.query)
  })

  router.post('/base/post', function (req, res) {
    res.json(req.body)
  })

  router.post('/base/buffer', function (req, res) {
    let msg = []
    req.on('data', (chunk) => {
      if (chunk) {
        msg.push(chunk)
      }
    })

    req.on('end', () => {
      let buff = Buffer.concat(msg)
      res.json(buff.toJSON())
    })
  })
}


function RegisterErrorRouter() {
  router.get('/error/get', function (req, res) {
    if (Math.random() > 0.5) {
      res.json({
        msg: 'hello world'
      })
    } else {
      res.status(500)
      res.end()
    }
  })


  router.get('/error/timeout', function (req, res) {
    setTimeout(() => {
      res.json({
        msg: `hello world`
      })
    }, 3000);
  })

}


function RegisterExtendRouter() {
  router.get('/extend/get', function (req, res) {
    res.json({
      msg: 'hello world'
    })
  })

  router.options('/extend/options', function (req, res) {
    res.end()
  })

  router.delete('/extend/delete', function (req, res) {
    res.end()
  })
  router.head('/extend/head', function (req, res) {
    res.end()
  })

  router.post('/extend/post', function (req, res) {
    res.json(req.body)
  })

  router.put('/extend/put', function (req, res) {
    res.json(req.body)
  })

  router.patch('/extend/patch', function (req, res) {
    res.json(req.body)
  })


  router.get('/extend/user', function (req, res) {
    res.json({
      code: 0,
      message: 'ok',
      result: {
        name: 'jack',
        age: 16
      }
    })
  })
}


function RegisterInterceptorRouter() {
  router.get('/interceptor/get', function (req, res) {
    res.end('hello')
  })
}


function RegisterConfigRouter() {
  router.post('/config/post', function (req, res) {
    res.end('hello')
  })
}

function RegisterCancelRouter() {
  router.get('/cancel/get', function (req, res) {
    setTimeout(() => {
      res.json('hello')
    }, 1000);
  })

  router.post('/cancel/post', function (req, res) {
    setTimeout(() => {
      res.json(req.body)
    }, 1000);
  })
}


function RegisterMoreRouter() {
  router.get('/more/get', function (req, res) {
    // res.json(req.cookies)
    res.json({
      msg:'1'
    })
  })


  router.post('/more/upload', function (req, res) {
    if (req.body.file) {
      res.status(500)
      res.json({
        code:'500',
        msg:'upload fail!'
      })
    }
    res.end('upload success!')
  })

  router.post('/more/post', function (req, res) {
    const auth = req.headers.authorization
    const [type,credentials] = auth.split(' ')
    
    const [username,password] = atob(credentials).split(':')
    if(type ==='Basic'&&username==='Yee'&&password ==='123456'){
      res.json(req.body)
    }else {
      res.status(401);
      res.end('UnAuthorization')
    }
  })

  router.get('/more/304',function(req,res){
    res.status(304)
    res.end()
  })

  router.get('/more/a',function(req,res){
    res.json({
      msg:'1'
    })
  })

  router.get('/more/b',function(req,res){
    res.json({
      msg:'1'
    })
  })
}