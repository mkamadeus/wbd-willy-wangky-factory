import React, { useMemo } from "react";

const LazyText = () => {
  const width = useMemo(() => {
    return Math.random();
  }, []);

  return (
    <div
      className="animate-pulse bg-gray-500 rounded-full p-1"
      style={{ width: `${50 + width * 50}%` }}
    />
  );
};

export default LazyText;
