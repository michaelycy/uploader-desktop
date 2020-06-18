import * as React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import * as styles from './index.jss';
const useStyles = createUseStyles(styles, { name: 'left-aside' });

interface IProps {
  files: string[];
}

const LeftAside = (props: IProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { files } = props;

  return (
    <div className={classes.wrap}>
      <div>文件列表</div>
      {files.map(i => i)}
    </div>
  );
};

export default LeftAside;
