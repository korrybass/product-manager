import _ from 'lodash';

//Utility function for hanlding dupes and joining the results
export const joinAndRemoveDupes = function (arr){
  let valuesMap = {}
  arr.forEach( (x) => {
    let value;
    (valuesMap.hasOwnProperty(x.itemId)) ? value = valuesMap[x.itemId] : value = [];
    valuesMap[x.itemId] = value.concat(x)
  });
  for(let key in valuesMap){ valuesMap[key] = _.assign(valuesMap[key][0], valuesMap[key][1]); }
  arr.forEach( x => { if(valuesMap[x.itemId]){ x = valuesMap[x.itemId]; } });
  arr = _.uniqBy( arr, 'itemId' );
  return arr;
}

//Refactored
export const  sortArrayJoinDupes = function(arr){
  let newArr = [];
  arr.forEach( function(x) {
    if(!this[x.itemId]){ this[x.itemId] = x; newArr.push(this[x.itemId]) };
    this[x.itemId] = _.assign(this[x.itemId], x);
  }, {});
  return newArr;
}

export default function(state = [], action){

  if(action.type === 'REMOVE_ITEM'){
    return state.filter( x => x.itemId !== action.payload );
  }

  if(action.type === 'UPDATE_BRAND_NAME'){
    let output = [...state];
    let item = state.filter(x => x.itemId === action.payload.id );
    var index = _.findIndex(output, {itemId: action.payload.id});
    item[0]['brandName'] = action.payload.name;
    output.splice(index, 1, item[0]);
    return output;
  }

  if(action.type === 'QUERY_TABLE'){
    let output;
    if(action.payload.items){
      let products = [...state, ...action.payload.items];
      // output = joinAndRemoveDupes(products);
      output = sortArrayJoinDupes(products);
    }
    else{ output = state}

    // if(action.payload)

    return output;
  }
  return state;
}
