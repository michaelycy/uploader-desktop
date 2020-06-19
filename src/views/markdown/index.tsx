import * as React from 'react';
import { createUseStyles } from 'react-jss';
import FilesTabs from '@/components/files-tabs';
import EditTools from '@/components/edit-tools';

import * as styles from './index.jss';

const useStyles = createUseStyles(styles, { name: 'md-page' });

interface IProps {
  name?: string;
}

const MarkdownPage = (props: IProps) => {
  const classes = useStyles();
  const { name } = props;
  console.log(name);

  return (
    <div className={classes.wrap}>
      <FilesTabs />
      <EditTools />
      <div className={classes.content}>markdown 内容区</div>
    </div>
  );
};

export default MarkdownPage;
