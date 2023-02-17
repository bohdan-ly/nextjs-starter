import { AuthGuard } from 'entities/session';

import * as model from '../model';

export const Test = () => (
  <div>
    <AuthGuard />
  </div>
);
