import useSWR from 'swr';
import fetcher from '../utils/fetcher';

export default () => {
  const { data, error, mutate } = useSWR('/api/user/check', fetcher);
  // const {data, error} = useSWR('/api/user/check', url => {
  //   return fetch(url).then(res => res.json())
  // })
  return { data, error, mutate };
};
