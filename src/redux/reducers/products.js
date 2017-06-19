export default function(state = [], action){
  if(action.type === 'QUERY_TABLE'){
    let output;
    if(action.payload.items){
      output = [...state, ...action.payload.items]
    }
    else{ output = []}
    return output;
  }
  return state;
}