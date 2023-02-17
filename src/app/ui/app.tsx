import React, { Suspense } from 'react';

import { Loading } from 'shared/loading';

import { Routes } from '../pages';

import { ConnectAPI } from './providers/with-api';

export const App: React.FC = () => {
  const isReady = true;
  return (
    <ConnectAPI>
      <Suspense fallback={<Loading />}>{(isReady && <Routes />) || <Loading />}</Suspense>
    </ConnectAPI>
  );
};
