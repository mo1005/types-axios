import axios from '../../src/index'
import { AxiosTransformer } from '../../src/types/index'
import qs from 'qs'


axios.defaults.headers.common['test'] = 123


// axios({
//   url: '/config/post',
//   method: 'post',
//   headers: {
//     test: '123',
//     a: 132131
//   },
//   data: ({
//     a: 1
//   }),

// }).then(res => {
//   console.log(res.data)
// })


// axios({
//   transformRequest: [
//     (function (data) {
//       console.log(data)
//       return qs.stringify(data)
//     }),
//     ...(axios.defaults.transformRequest as AxiosTransformer[])
//   ],
//   transformResponse: [
//     ...(axios.defaults.transformResponse as AxiosTransformer[]),
//     function (data) {
//       if (typeof data === 'object') {
//         data.b = 2
//       }
//       return data;
//     }
//   ],
//   url: '/config/post',
//   method: 'post',
//   data: {
//     a: 1
//   }
// }).then(res => {
//   console.log(res.data)
// })


const instane = axios.create({
  transformRequest: [
    (function (data) {
      console.log(data)
      return qs.stringify(data)
    }),
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function (data) {
      if (typeof data === 'object') {
        data.b = 2
      }
      return data;
    }
  ],
})

instane({
  url: '/config/post',
  method: 'post',
  data: {
    a: 433
  }
}).then(res => {
  console.log(res.data)
})