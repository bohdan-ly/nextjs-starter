import 'shared/ui/theme/global';

import React from 'react';

import BrowserPageBootstrap, {
  BrowserPageBootstrapProps,
} from 'app/components/browser-page-bootstrap';
import ServerPageBootstrap, {
  ServerPageBootstrapProps,
} from 'app/components/server-page-bootstrap';
import { ConnectAPI } from 'app/providers/with-api';

import ErrorPage from 'pages/_error.page';

import { isBrowser } from 'shared/lib';
import { isEmpty } from 'shared/lib/assertion';
import { MultiversalAppBootstrapProps } from 'shared/types/multiversal-app-bootstrap-props';
import { SSGPageProps } from 'shared/types/ssg-page-props';
import { SSRPageProps } from 'shared/types/ssr-page-props';
import { DefaultErrorLayout } from 'shared/ui/components/error-handling';

export type Props =
  | MultiversalAppBootstrapProps<SSGPageProps>
  | MultiversalAppBootstrapProps<SSRPageProps>;

export const App = (props: Props): JSX.Element => {
  const { pageProps, router, err } = props;

  const [isSSGFallbackInitialBuild] = React.useState<boolean>(
    isEmpty(pageProps) && router?.isFallback === true,
  );

  // Display a loader (we could use a skeleton too) when this happens, so that the user doesn't face a white page until the page is generated and displayed
  // When router.isFallback becomes "false", then it'll mean the page has been generated and rendered and we can display it, instead of the loader
  if (isSSGFallbackInitialBuild && router?.isFallback) {
    return (
      // <Loader />
      <div>...Loading</div>
    );
  }

  if (err) {
    const error =
      new Error(`Fatal error - A top-level error was thrown by the application, which caused the Page.props to be lost. \n
  The page cannot be shown to the end-user, an error page will be displayed.`);

    return (
      <ErrorPage err={err} statusCode={500} isReadyToRender>
        <DefaultErrorLayout error={err} context={pageProps} />
      </ErrorPage>
    );
  }
  const multiversalPageBootstrapProps: ServerPageBootstrapProps & BrowserPageBootstrapProps = {
    ...props,
    router,
    pageProps: {
      ...pageProps,
      isSSGFallbackInitialBuild,
    },
  };

  return (
    <ConnectAPI>
      {isBrowser() ? (
        <BrowserPageBootstrap {...multiversalPageBootstrapProps} />
      ) : (
        <ServerPageBootstrap {...multiversalPageBootstrapProps} />
      )}
    </ConnectAPI>
  );
};
