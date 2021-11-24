const http = require('k6/http');
const { check } = require('k6');

const url = 'http://localhost:3010'

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      rate: 1000, // how many requests
      timeUnit: '1s', // per time unit
      duration: '20s', // total duration of scenario
      preAllocatedVUs: 1000,
      maxVUs: 1000,
    },
  },
};


// export default function () {
//   let randi = Math.floor(Math.random() * 100000 + 900000);
//   // let randi = Math.floor(Math.random() * 1000011);
//   const url = `http://localhost:3001/reviews/meta/?product_id=${randi}`;
//   // console.log(url);
//   const res = http.get(url);
//   // console.log(res.body);
//   // sleep(1);
// }

// export default function() {
//   let res = http.get(`${url}/api/products`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

export default function() {
  let randomId = Math.floor(Math.random() * 1000000)
  let res = http.get(`${url}/api/products/${randomId}/styles`);
  check(res, {
    "success": (r) => r.status == 200
  });
};


// export default function() {
//   let res = http.get(`${url}/api/products/1/styles`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

// export default function() {
//   let randomId = Math.floor(Math.random() * 4000000)
//   let res = http.get(`${url}/api/products/${randomId}/related`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

// app.get('/api/products', async(req, res) => {
//   var data = await axios.get('http://localhost:3010/products')
//   console.log(data)
// })