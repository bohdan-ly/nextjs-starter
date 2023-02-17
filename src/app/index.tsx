import React from 'react';

import { withProviders } from './providers';

export const Layouts: React.FC<{ children: React.ReactNode; withLayout: boolean }> = ({
  children,
}): any => withProviders(children);
