import type { PropsWithChildren } from 'react';
import React, { memo } from 'react';

const Layout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <>{children}</>;
};

export default memo(Layout);
