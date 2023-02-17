import React from 'react';
// import { Footer, Header } from '..';

const Layouts: React.FC<{ children: React.ReactNode; withLayout: boolean }> = ({
  children,
  withLayout,
}) => {
  if (withLayout) {
    return (
      <>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <React.Fragment>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layouts;
