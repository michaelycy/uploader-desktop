import * as React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Button } from 'antd';
import FileSearch from '@/components/file-search';
import LeftAside from '@/layout/aside';
import * as styles from './index.jss';

const useStyles = createUseStyles(styles, { name: 'layout' });

const Layout = () => {
  const theme = useTheme();
  const classes = useStyles({ ...theme });

  return (
    <main className={classes.wrap}>
      <aside className={classes.aside}>
        <LeftAside files={[]} />
      </aside>
      <section>
        <FileSearch />
        <Button>确定</Button>
      </section>
    </main>
  );
};

export default Layout;
