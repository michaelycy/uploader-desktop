import * as React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
// import { Button } from 'antd';
// import FileSearch from '@/components/file-search';
import LeftAside from '@/layout/aside';
import MarkDownPage from '@/views/markdown';

import * as styles from './index.jss';

const useStyles = createUseStyles(styles, { name: 'layout' });

const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0.md', extname: '.md', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1.md', extname: '.md', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0.md', extname: '.md', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1.md', extname: '.md', key: '0-1-1', isLeaf: true },
    ],
  },
  {
    title: 'parent 2',
    key: '0-2',
    children: [
      { title: 'leaf 2-0.md', extname: '.md', key: '0-2-0', isLeaf: true },
      { title: 'leaf 2-1.md', extname: '.md', key: '0-2-1', isLeaf: true },
    ],
  },
];

const Layout = () => {
  const theme = useTheme();
  const classes = useStyles({ ...theme });

  return (
    <main className={classes.wrap}>
      <aside className={classes.aside}>
        <LeftAside files={treeData} />
      </aside>
      <section className={classes.content}>
        <MarkDownPage />
      </section>
    </main>
  );
};

export default Layout;
