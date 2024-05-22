import React, { useEffect, useRef } from "react";

const InfiniteScroll = ({ loadMore, hasMore }) => {
  const observerRef = useRef();

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMore, hasMore]);

  return <div ref={observerRef} style={{ height: "1px" }} />;
};

export default InfiniteScroll;
