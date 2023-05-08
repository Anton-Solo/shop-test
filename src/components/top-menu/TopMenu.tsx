import "./topMenu.scss";
import React, { ReactElement, useEffect, useState } from "react";
import io from "socket.io-client";

export const TopMenu = (): ReactElement => {
  const [date, setDate] = useState(new Date());
  const [activeSessions, setActiveSessions] = useState(0);

  const fullUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname;
  const socket = io(fullUrl);

  useEffect(() => {
    socket.on("activeSessions", (count) => {
      setActiveSessions(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate((prevDate) => new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-logo">Inventory</div>
          <div className="header-info">
            <div className="header-info__date">{date.toLocaleTimeString()}</div>
            <div className="header-info__seassion">
              Active sessions: {activeSessions}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
