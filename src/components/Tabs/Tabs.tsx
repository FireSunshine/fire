import React, { useState } from 'react';
import classNames from 'classnames';

export interface TabsItemType {
  /* 唯一值 key */
  key: string;
  /* tab 标题 */
  label: React.ReactNode;
  /* tab 内容 */
  children: React.ReactNode;
  /* tab 禁用 */
  disabled?: boolean;
}

export type TabsType = 'line' | 'card';

export interface TabsProps {
  className?: string;
  /* tab 默认选中 key  */
  defaultActiveKey?: string;
  /* tab 类型 'line' | 'card' */
  type?: TabsType;
  /* tab 改变的事件 */
  onChange?: (key: string) => void;
  /* tab item */
  items: TabsItemType[];
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { className, defaultActiveKey, type, onChange, items } = props;
  // defaultActiveKey 默认第一项
  const [activeKey, setActiveKey] = useState<string | undefined>(defaultActiveKey ?? items[0].key);
  const classes = classNames('fire-tabs', className, {
    'tabs-card': type === 'card',
  });
  const classesItem = (item: TabsItemType) =>
    classNames('tabs-item', {
      'is-active': activeKey === item.key && !item.disabled,
      'is-disabled': item.disabled,
    });
  const handleClick = (item: TabsItemType) => {
    setActiveKey(item.key);
    onChange && onChange(item.key);
  };

  return (
    <div className={classes}>
      <ul>
        {items.map((item) => (
          <li className={classesItem(item)} key={item.key} onClick={() => handleClick(item)}>
            {item.label}
          </li>
        ))}
      </ul>
      {items.find((item) => !item.disabled && item.key === activeKey)?.children}
    </div>
  );
};

export default Tabs;
