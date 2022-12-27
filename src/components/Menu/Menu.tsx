import React, { createContext, CSSProperties, FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  /* 默认 active 的菜单索引值 */
  defaultIndex?: string;
  /* 菜单类型 横向或者纵向 */
  mode?: MenuMode;
  /* 点击菜单触发的回调函数 */
  onSelect?: SelectCallback;
  /* 设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[];
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, mode, onSelect, defaultOpenSubMenus, children, className, style, ...restProps } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const classes = classNames('fire-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });
  const handleClick = (index: string) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    });
  };

  return (
    <ul className={classes} style={style} {...restProps}>
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};

export default Menu;
