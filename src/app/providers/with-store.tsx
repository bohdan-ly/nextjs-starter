import React from "react";

import { Provider } from "react-redux";
import { store } from "../model";

export const withStore = (component: () => React.ReactNode) =>
  function WithStore() {
    return <Provider store={store}>{component()}</Provider>;
  };
