const assert = require('chai').assert
const isCheck = require('../luhn-algorithm')

describe('luhn-algorithm', () => {
  it('should pass the test if the number is valid', () => {
    assert.equal(isCheck.check(49927398716),'valid')
  })

  it('should not pass the test if the number is not valid', () => {
    assert.equal(isCheck.check(49927398715),'not valid')
  })
})
