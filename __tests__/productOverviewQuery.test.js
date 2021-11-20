const { app } = require('../server.js')
const request = require('supertest')

const { productData, singleProductData, productStylesData, relatedProductId } = require('./data/mockData.js')

describe("Get products", () => {
  it('should send first 5 products', async() => {
    const res = await request(app).get('/api/products')
                .send(productData)
                expect(res.status).toBe(200)
  })
})

describe("Get single Product", () => {
  it('should send a single product', async() => {
    const res = await request(app).get('/api/products/40348')
                .send(singleProductData)
                expect(res.status).toBe(200)
  })
})

describe("Get product styles", () => {
  it('should send product styles in correct format', async() => {
    const res = await request(app).get('/api/products/40348/styles')
                .send(productStylesData)
                expect(res.status).toBe(200)
                jest.setTimeout(30000);
  })
})

describe("Get related product IDs", () => {
  it('should send related product IDs', async() => {
    const res = await request(app).get('/api/products/40348/related')
                .send(relatedProductId)
                expect(res.status).toBe(200)
                jest.setTimeout(30000);
  })
})