'use client';

import { RootProvider } from 'fumadocs-ui/provider/next';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <RootProvider
      theme={{
        enabled: false,
      }}
    >
      {children}
    </RootProvider>
  );
};

export default Providers;
