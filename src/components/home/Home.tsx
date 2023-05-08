import { ReactElement } from "react";

export const Home = (): ReactElement => {
  return (
    <div className="container">
      <div
        className="home"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <img src="https://i.gifer.com/7plz.gif" alt="home logo" />
      </div>
    </div>
  );
};
