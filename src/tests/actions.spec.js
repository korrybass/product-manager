var expect = require('chai').expect;
var reducer = require('../redux/reducers/products.js');

describe("Table Actions", () => {
  it("should remove item from array", () => {
    let arr = [ { itemId: 1111, name: "test1" }, { itemId: 2222, name: 'test2' } ];
    let output = reducer(arr, { type: 'REMOVE_ITEM', payload: 1111})
    expect(output).to.deep.equal( [ { itemId: 2222, name: 'test2' }] )
  })
})