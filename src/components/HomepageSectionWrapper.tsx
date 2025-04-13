import React, { ReactNode } from 'react';

interface HomepageSectionWrapperProps {
  color?: string;
  children: ReactNode;
}

export const HomepageSectionWrapper = ({
  color = 'transparent',
  children,
}: HomepageSectionWrapperProps) => {
  return (
    <div className={`flex justify-center items-center ${color}`}>
      <div className="px-5 py-8 md:py-20 w-[1100px] flex flex-col md:flex-row justify-between items-center gap-10">
        {children}
      </div>
    </div>
  );
};
