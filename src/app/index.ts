import { withProviders } from './providers';
import { App as RawApp } from './ui';

export const App = withProviders(RawApp);
