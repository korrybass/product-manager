import { expect } from 'chai';
import reducer, { joinAndRemoveDupes } from '../redux/reducers/products.js';
import _ from 'lodash';

describe("Table Actions and Utilities", () => {
  it('should remove dupe and join new values', () => {
    var arr1 =  [ { itemId: 1111, name: "test1" }, 
    { itemId: 2222, prop: 'from old obj', name: 'test2' } , 
    { itemId: 2222, name: 'test2new' } ];
    let output = joinAndRemoveDupes(arr1);
    expect(output).to.deep.equal([ { itemId: 1111, name: "test1" }, { itemId: 2222, prop: 'from old obj', name: 'test2new' } ]);
  })
  it("should remove item from array", () => {
    let arr = [ { itemId: 1111, name: "test1" }, { itemId: 2222, name: 'test2' } ];
    let output = reducer(arr, { type: 'REMOVE_ITEM', payload: 1111})
    expect(output).to.deep.equal( [ { itemId: 2222, name: 'test2' }] )
  });

  it('should updated brand name', () => {
    let arr = [ {itemId: 1111, name: 'test1'} ];
    let output = reducer(arr, { type: 'UPDATE_BRAND_NAME', payload: { id: 1111, name: 'Brand Name Item' } });
    expect(output).to.deep.equal([ { itemId: 1111, name: 'test1', brandName: 'Brand Name Item' } ]);
  });
  
  it('should add list of products to state', () => {
    let arr = [ 
      { itemId: 1000, name: "test0" }, { itemId: 5555, name: 'test5' }, 
    ];
    let input = [
      { itemId: 1111, name: "test1" }, { itemId: 2222, name: 'test2' }, 
      { itemId: 3333, name: "test3" }, { itemId: 4444, name: 'test4' } 
    ]
    let output = reducer(arr, { type: 'QUERY_TABLE', payload: { items: input } });
    expect(output).to.deep.equal([
      { itemId: 1000, name: "test0" }, { itemId: 5555, name: 'test5' }, 
      { itemId: 1111, name: "test1" }, { itemId: 2222, name: 'test2' }, 
      { itemId: 3333, name: "test3" }, { itemId: 4444, name: 'test4' } 
    ])
  })
})