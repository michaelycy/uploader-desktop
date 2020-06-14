import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { ConfigProvider, Button } from 'antd';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.less';
import FileSearch from '@/components/file-search';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <ThemeProvider theme={{}}>
        <FileSearch />
        <Button>确定</Button>
      </ThemeProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
