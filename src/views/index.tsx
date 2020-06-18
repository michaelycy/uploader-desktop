import React from 'react';
import { configure } from 'mobx';
import { useObserver } from 'mobx-react';
import { ThemeProvider } from 'react-jss';
import { ConfigProvider } from 'antd';
import Layout from '@/layout';
import themeStore from '@/store/theme';

import 'antd/dist/antd.less';

configure({
  isolateGlobalState: true,
  enforceActions: 'observed',
});

const App = () => {
  return useObserver(() => {
    const { theme } = themeStore;
    return (
      <ThemeProvider theme={theme}>
        <ConfigProvider>
          <Layout />
        </ConfigProvider>
      </ThemeProvider>
    );
  });
};

export default App;
