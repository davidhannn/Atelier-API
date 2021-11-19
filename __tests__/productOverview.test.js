const { mock } = require('pactum')

describe('Testing Mock Server', () => {
  it('should send back response', () => {
    mock.addInteraction({
      request: {
        method: 'GET',
        path: '/api/products/1'
      },
      response: {
        status: 200,
        body: 'Test'
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