const http = require('k6/http');
const { check } = require('k6');

const url = 'http://localhost:3010'

export let options = {
  vus: 1000,
  duration: "10s"
};

export default function() {
  let res = http.get(`${url}/api/products`);
  check(res, {
    "success": (r) => r.status == 200
  });
};