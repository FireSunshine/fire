import React, { useState } from 'react';
import Alert from './components/Alert/Alert';
import Button from './components/Button/Button';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Button onClick={() => setLoading(true)}>默认</Button>
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
      </div>
      <div style={{ width: '80%' }}>
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
      </div>
    </>
  );
}

export default App;
