import queryString from 'query-string';
import jsonp from 'jsonp';

const apiKey = '7f59reqgr4fmue2rcbry3b77';
const url = 'http://api.walmartlabs.com/v1/search';

export function queryProducts(search) {
  search['apiKey'] = apiKey;
  let query = queryString.stringify(search);
  query = decodeURIComponent(query);
  return function(dispatch){
    jsonp(url+"?"+query,  function(err, data){
      if(err){ console.log('error ', err) }
      else{ dispatch({ type: 'QUERY_TABLE', payload: data }) }
    });
  }
}