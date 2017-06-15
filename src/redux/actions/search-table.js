export function selectBook(search) {
  return {
    type: 'QUERY_TABLE',
    payload: search
  };
}