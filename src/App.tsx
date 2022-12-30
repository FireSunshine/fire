/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Alert from './components/Alert/Alert';
import Button from './components/Button/Button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import Tabs from './components/Tabs/Tabs';
import loadingImg from 'assets/images/loading.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAltSquare, faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import Icon from 'components/Icon/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import Transition from 'components/Transition/Transition';
library.add(fas);

function App() {
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      {/* button */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Button onClick={() => setLoading(true)} data-testid="34567" lhy-testid="4567" lhy-woid="4567">
          默认
        </Button>
        <Button btnType="primary" className="name" loading={loading}>
          primary
        </Button>
        <Button btnType="danger" disabled>
          danger
        </Button>
        <Button size="lg" onClick={() => setLoading(false)}>
          大按钮
        </Button>
        <Button size="sm" loading>
          小按钮
        </Button>
        <Button btnType="link" target="_blank" href="www.baidu.com">
          Link
        </Button>
        <Button disabled onClick={() => console.log(123456)}>
          禁用
        </Button>
        <Button btnType="link" disabled onClick={() => alert(89)}>
          Link
        </Button>
        <Button btnType="danger" loading size="lg">
          danger
        </Button>
      </div> */}
      {/* alert */}
      {/* <div style={{ width: '80%' }}>
        <Alert message="this is success" type="success" description="this is description" />
        <br />
        <Alert message="this is info" type="info" description="this is description" />
        <br />
        <Alert message="this is warning" type="warning" description="this is description" />
        <br />
        <Alert message="this is error" type="error" description="this is description" />
        <br />
        <Alert message="this is defalut" description="this is description" closable />
        <br />
        <Alert message />
        <br />
        <Alert message="7878" closable />
        <br />
        <Alert description="7878" closable className="999999" />
      </div> */}
      {/* <div>
        <Menu onSelect={(index) => alert(index)} mode="vertical" defaultOpenSubMenus={['3']}>
          <MenuItem>menu 1</MenuItem>
          <MenuItem disabled>menu 2</MenuItem>
          <MenuItem>menu 3</MenuItem>
          <SubMenu title="menu 4-4">
            <MenuItem>menu 1</MenuItem>
            <MenuItem disabled>menu 2</MenuItem>
            <MenuItem>menu 3</MenuItem>
          </SubMenu>
        </Menu>>
      </div> */}
      {/* <div>
        <Tabs
          type="card"
          items={[
            {
              label: 'Tab 1',
              disabled: true,
              key: '1',
              children: 'Tab 1',
            },
            {
              label: 'Tab 2',
              key: '2',
              children: 'Tab 2',
            },
            {
              label: 'Tab 3',
              key: '3',
              children: 'Tab 3',
            },
          ]}
        />
        <Tabs
          onChange={(key) => console.log(key)}
          items={[
            {
              label: 'Tab 1',
              key: '1',
              children: 'Tab 1 children',
            },
            {
              label: <div onClick={() => alert(999)}>Tab 2</div>,
              key: '2',
              disabled: true,
              children: 'Tab 2 children',
            },
            {
              label: (
                <>
                  <img src={loadingImg} alt="" />
                  Tab 2
                </>
              ),
              key: '3',
              children: 'Tab 3 children',
            },
          ]}
        />
      </div> */}
      <FontAwesomeIcon icon={faShareAltSquare} />
      <FontAwesomeIcon icon={faCoffee} size="10x" color="red" />
      <Icon icon="face-kiss" size="6x" theme="primary" />
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size="lg">
          Show Message
        </Button>
      )}
      <Transition in={showMessage} timeout={300} animation="zoom-in-top">
        <div>
          <div>Animated alert message</div>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <Button btnType="primary" onClick={() => setShowMessage(false)}>
            Close
          </Button>
        </div>
      </Transition>
    </>
  );
}

export default App;
