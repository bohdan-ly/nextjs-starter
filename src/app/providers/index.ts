import compose from 'compose-function';

import { isBrowser } from 'shared/lib';

import { withFallback } from './with-fallback';
import { withNotifications } from './with-notifications';
import { withRouter } from './with-router';
import { withStore } from './with-store';

export const withProviders = compose<React.FC>(
  // withNotifications,
  // withFallback,
  withStore,
);
