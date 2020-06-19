import * as React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import * as styles from './index.jss';
const useStyles = createUseStyles(styles, { name: 'md-editor' });

interface IProps {
  name: string;
}

const MarkdownEditor = (props: IProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name } = props;
  return <div className={classes.wrap}>{name}</div>;
};

export default MarkdownEditor;
