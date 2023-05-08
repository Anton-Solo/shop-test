import React from "react";
import { NavigationMenu } from "./components/menu/NavigationMenu";
import { TopMenu } from "./components/top-menu/TopMenu";
import ErrorBoundary from "./ErrorBoundries";

export const App = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <TopMenu />
        <NavigationMenu />
      </div>
    </ErrorBoundary>
  );
};
