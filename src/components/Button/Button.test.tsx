import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass',
};

const linkProps: ButtonProps = {
  btnType: 'link',
  href: 'www.404.com',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test Button component', () => {
  it('should render the correct default button', () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = screen.getByText('Nice') as HTMLButtonElement; // 当前组件的文本
    expect(element).toBeInTheDocument(); // 是否在文档中
    expect(element.tagName).toEqual('BUTTON'); // 标签名
    expect(element).toHaveClass('btn btn-default'); // 是否包含类名
    expect(element.disabled).toBeFalsy(); // false
    fireEvent.click(element); // 点击事件
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  test('should render the correct component based on different props', () => {
    render(<Button {...testProps}>Nice</Button>);
    const element = screen.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  });
  it('should render a link when btnType equals link and href is provided', () => {
    render(<Button {...linkProps}>Nice</Button>);
    const element = screen.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('should render disabled button when disabled set to true', () => {
    render(<Button {...disabledProps}>Nice</Button>);
    const element = screen.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
