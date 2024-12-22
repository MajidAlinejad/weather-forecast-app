import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="text-center text-sm font-medium text-slate-800">
      <h2 className="text-xl font-semibold">{time}</h2>
    </div>
  );
};

export default Clock;
