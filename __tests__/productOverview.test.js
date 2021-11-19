const { mock } = require('pactum')
const { singleProductData, productStylesData, relatedProductId } = require('./data/mockData.js')

describe('Single Product Information', () => {
  it('response back for single product', () => {
    mock.addInteraction({
      request: {
        method: 'GET',
        path: '/api/products/1'
      },
      response: {
        status: 200,
        body: singleProductData
      }
    })
  })
})

describe('Product Styles Information', () => {
  it('response back for product styles', () => {
    mock.addInteraction({
      request: {
        method: 'GET',
        path: '/api/products/1/styles'
      },
      response: {
        status: 200,
        body: productStylesData
      }
    })
  })
})

describe('Related Product ID', () => {
  it('respond back with related Product IDs for product', () => {
    mock.addInteraction({
      request: {
        method: 'GET',
        path: '/api/products/1/related'
      },
      response: {
        status: 200,
        body: relatedProductId
      }
    })
  })

  it('respond back with no related Product IDs for product if there is a 0', () => {
    mock.addInteraction({
      request: {
        method: 'GET',
        path: '/api/products/120/related'
      },
      response: {
        status: 200,
        body: []
      }
    })
  })
})

mock.start(3010);

// describe('Testing', () => {
//   it('should test', () => {
//     expect(3).toBe(3)
//   })
// })