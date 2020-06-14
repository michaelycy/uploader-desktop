import * as React from 'react';
import { createUseStyles } from 'react-jss';
import * as styles from './index.jss';
const useStyles = createUseStyles(styles, { name: 'file-search' });
 
interface IProps { 
  name?: string;
}
 
const FileSearch = (props: IProps) => {
  const classes = useStyles();
  const { name } = props;
  return <div className={classes.wrap}>{name || 'ssss'}</div>;
};

export default FileSearch;
