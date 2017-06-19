export function saveItems(state) {
  try{
    const serializedState = JSON.stringify(state.products);
    localStorage.setItem('productList', serializedState);
  }catch(err){
    console.log(err);
  }
}

export function getItems(){
  try{
    const serialState = localStorage.getItem('productList') ;
    if(serialState === null) return undefined;
    return JSON.parse(serialState);
  }catch(err){
    console.log(err);
  }
}