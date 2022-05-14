import React, { useRef, useCallback, useState } from 'react';
import useGetData from './util/useGetData';
import './App.css';
import SingleIssue from './Components/SingleIssue';
import Loader from './Components/Loader';
function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const { issues, loading, hasMore, error } = useGetData(pageNumber);

  const observer = useRef();
  const lastIssueElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (error) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, error]
  );

  return (
    <div className="App">
      <div className="issues-container">
        <div className="single-item header">
          <div className="issue-title issue-details">
            <p>Github Facebook React Issues</p>
            <p>Deepak Kumar (deepak300811@gmail.com)</p>
          </div>
        </div>
        {issues.map((element, index) => {
          if (issues.length === index + 1) {
            return (
              <div ref={lastIssueElementRef} key={element.id}>
                <SingleIssue issue={element} />
              </div>
            );
          } else {
            return (
              <div key={element.id}>
                {' '}
                <SingleIssue issue={element} />
              </div>
            );
          }
        })}
        <div>{loading && <Loader />}</div>
      </div>
      <div>{error && 'Error'}</div>
    </div>
  );
}

export default App;
