const env = process.env;

// const mode: 'prod' | 'dev' = env.REACT_APP_AUTH0_DOMAIN.includes('dev') ? 'dev' : 'prod';

// console.debug('Build mode:', mode);

export const sentryConfig = {
  dsn: `${env.REACT_APP_SENTRY_DSN}`,
  release: `${env.REACT_APP_SENTRY_RELEASE}`,
  environment: `${env.REACT_APP_SENTRY_ENV}`,
  sampleRate: 0.0,
  autoSessionTracking: false,
};
