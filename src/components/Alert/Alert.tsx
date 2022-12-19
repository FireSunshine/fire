import React, { useState } from 'react';
import classNames from 'classnames';

export type Type = 'success' | 'info' | 'warning' | 'error';
interface BaseAlertProps {
  /** 样式类名 */
  className?: string;
  /** 指定警告样式*/
  type?: Type;
  /** 是否显示关闭按钮 */
  closable?: boolean;
  /** 警告提示内容 */
  message?: React.ReactNode;
  /** 警告提示的辅助性文字介绍 */
  description?: React.ReactNode;
  /** 关闭alert时触发的事件 */
  onClose?: () => void;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const { className, type, closable, message, description, onClose, ...restProps } = props;

  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
  });

  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {visible && (
        <div className={classes} {...restProps}>
          <div className="alert-content">
            <div className="alert-message">{message}</div>
            <div className="alert-description">{description}</div>
          </div>
          {closable && (
            <span className="alert-colse" onClick={handleClick}>
              ᙮
            </span>
          )}
        </div>
      )}
    </>
  );
};

Alert.defaultProps = {
  closable: false,
  type: 'success',
};

export default Alert;
