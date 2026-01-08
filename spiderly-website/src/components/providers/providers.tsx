'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return <>{children}</>;
};

export default Providers;
