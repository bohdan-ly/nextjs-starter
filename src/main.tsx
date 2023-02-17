import * as Sentry from '@sentry/browser';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'app';

import { sentryConfig } from 'shared/config';

Sentry.init(sentryConfig);

const container = document.getElementById('root');
container && createRoot(container).render(<App />);
