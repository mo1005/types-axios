import axios from '../../src/index'


// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })



// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })


// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, []'
//   }
// })


// axios({
//   method: 'get',
//   url: '/base/get#123',
//   params: {
//     foo: 'bar'
//   }
// })


// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: undefined
//   }
// })


// axios({
//   method: 'get',
//   url: '/base/get#123?name=a',
//   params: {
//     foo: 'bar'
//   }
// })


// const arr = new Int32Array([21, 31])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })


axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

// axios({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json',
//     'Accept': 'application/json, text/plain, */*'
//   },
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// const prramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(prramsString)

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })


axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})