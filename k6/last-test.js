const http = require('k6/http');
const { check } = require('k6');

const url = 'http://localhost:3010'

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      rate: 100, // how many requests
      timeUnit: '1s', // per time unit
      duration: '20s', // total duration of scenario
      preAllocatedVUs: 1000,
      maxVUs: 100,
    },
  },
};

// export default function() {
//   let res = http.get(`${url}/api/products`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
// };

export default function() {
  let randomInt = 900000 + Math.floor(Math.random() * 100000)
  let res = http.get(`${url}/api/products/${randomInt}`);
  check(res, {
    "success": (r) => r.status == 200
  });
};
