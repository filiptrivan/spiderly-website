interface AnimationContainerProps {
  children: React.ReactNode;
  className?: string;
}

const AnimationContainer = ({ children, className = '' }: AnimationContainerProps) => {
  return <div className={`${className}`}>{children}</div>;
};

export default AnimationContainer;
