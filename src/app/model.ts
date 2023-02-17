import { sample } from 'effector';
import { createGate } from 'effector-react';

import { organizationModel } from 'entities/organization';
import { sessionModel } from 'entities/session';

import { loginModel } from 'features/session/login';

export const Gate = createGate();
export const $isReady = sessionModel.$isReady;

sample({
  source: { isAuth: sessionModel.$isAuth, isInvite: sessionModel.$isInvite, gateOpen: Gate.status },
  filter: ({ isAuth, isInvite, gateOpen }) => gateOpen && !isAuth && !isInvite,
  target: loginModel.loginRequested,
});

sample({
  source: { user: sessionModel.$currentUser, isInvite: sessionModel.$isInvite },
  filter: ({ user, isInvite }) => !!user.organizationIds.length && !isInvite,
  fn: ({ user }) => user.organizationIds,
  target: organizationModel.userOrganizationIdsUpdated,
});
