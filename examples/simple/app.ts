import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get#123231?name=123',
  params: {
    a: 1,
    b: 2,
    list: [1],
    cmd: {
      link: '123'
    },
    dto: '$@:, []',
    date: new Date(),
    d: null,
    f: undefined,
    c: ""
  }
})