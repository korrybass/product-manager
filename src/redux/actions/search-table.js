import axios from 'axios';

const apiKey = '7f59reqgr4fmue2rcbry3b77';
const url = 'http://api.walmartlabs.com/v1/items/';

export function queryProducts(search) {
  return {
    type: 'QUERY_TABLE',
    payload: search
  };
}