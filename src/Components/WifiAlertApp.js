import React, { useEffect, useState } from "react";

const WifiAlertApp = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
      alert("Internet is turned off or disconnected!");
    };

    const handleOnline = () => {
      setIsOnline(true);
      alert("Internet is back online!");
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Internet Alert Application</h1>
      <p>
        {isOnline ? (
          <span style={{ color: "green" }}>You are Online</span>
        ) : (
          <span style={{ color: "red" }}>You are Offline</span>
        )}
      </p>
    </div>
  );
};

export default WifiAlertApp;
