import { useEffect, useState } from 'react';
import axios from 'axios';
const useGetData = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [issues, setIssues] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  let cancel;
  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: 'https://api.github.com/repos/facebook/react/issues',
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setIssues((prev) => [...prev, ...res.data]);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setLoading(false);
        setError(true);
        console.log(error);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, issues, hasMore };
};

export default useGetData;
