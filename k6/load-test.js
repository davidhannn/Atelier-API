const http = require('k6/http');
const { check } = require('k6');

// const url = 'http://localhost:3010'
const url = 'http://18.189.16.11'

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

// Randomized Get Product
export default function() {
  let randomId = Math.floor(Math.random() * 1000000)
  let res = http.get(`${url}/api/products/${randomId}`);
  check(res, {
    "success": (r) => r.status == 200
  });
};

// Randomized Product Styles
// export default function() {
//   let randomId = Math.floor(Math.random() * 1000000)
//   let res = http.get(`${url}/api/products/${randomId}/styles`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

// Randomized Related Products
// export default function() {
//   let randomId = Math.floor(Math.random() * 4000000)
//   let res = http.get(`${url}/api/products/${randomId}/related`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

// Get Single Product
// export default function() {
//   let res = http.get(`${url}/api/products/1`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

// Product Styles
// export default function() {
//   let res = http.get(`${url}/api/products/1/styles`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

// Related Products
// export default function() {
//   let res = http.get(`${url}/api/products/1/related`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

// Get Products
// export default function() {
//   let res = http.get(`${url}/api/products`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

// app.get('/api/products', async(req, res) => {
//   var data = await axios.get('http://localhost:3010/products')
//   console.log(data)
// })