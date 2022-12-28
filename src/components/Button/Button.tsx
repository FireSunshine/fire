import classNames from 'classnames';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import loadingImg from 'assets/images/loading.svg';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  loading?: boolean;
}

// 获取原生属性
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href, loading, ...restProps } = props;

  const classes = classNames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: btnType === 'link' && disabled,
    'btn-loading': btnType !== 'link' && loading, // link 不添加loading
  });

  if (btnType === 'link') {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {loading && !disabled && <img src={loadingImg} alt="" />}
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
