import _ from 'lodash';

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
      output = _.uniqBy( products, 'itemId' );
    }
    else{ output = state}
    return output;
  }
  return state;
}
