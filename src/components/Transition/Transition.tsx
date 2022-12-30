import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
type TransitionProps = CSSTransitionProps & {
  children: React.ReactNode;
  classNames?: string;
  animation?: AnimationName;
  wrapper?: boolean;
  timeout: number;
};
const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, wrapper, timeout, ...restProps } = props;
  return (
    <CSSTransition classNames={classNames ?? animation} timeout={timeout} {...restProps}>
      {children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true, // 组件退出后卸载
  appear: true,
};

export default Transition;
