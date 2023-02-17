import React from "react";

import { ErrorBoundary } from "shared/error-boundary";

import { ServerErrorPage } from "pages/server-error";

export const withFallback = (component: () => React.ReactNode) =>
  function WithFallback() {
    return (
      <ErrorBoundary fallback={<ServerErrorPage />}>
        {component()}
      </ErrorBoundary>
    );
  };
