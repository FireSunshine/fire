import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
type TransitionProps = CSSTransitionProps & {
  children: React.ReactNode;
  classNames?: string;
  animation?: AnimationName;
  timeout: number;
};
const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, timeout, ...restProps } = props;
  const nodeRef = useRef(null);

  return (
    <CSSTransition classNames={classNames ?? animation} timeout={300} nodeRef={nodeRef} {...restProps}>
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true, // 组件退出后卸载
  appear: true,
};

export default Transition;
