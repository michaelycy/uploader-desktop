import * as React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
} from '@ant-design/icons';
import * as styles from './index.jss';
const useStyles = createUseStyles(styles, { name: 'edit-bar' });

interface IProps {
  name?: string;
}

const EditBar = (props: IProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name } = props;
  return (
    <div className={classes.wrap}>
      <BoldOutlined />
      <ItalicOutlined />
      <UnderlineOutlined />
      <StrikethroughOutlined />
      {name}
    </div>
  );
};

export default EditBar;
