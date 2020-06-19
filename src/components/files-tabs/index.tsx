import * as React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Tabs } from 'antd';
import * as styles from './index.jss';

const useStyles = createUseStyles(styles, { name: 'files-tabs' });
const { TabPane } = Tabs;

interface IProps {
  name?: string;
}

const FilesTabs = (props: IProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name } = props;

  return (
    <div className={classes.wrap}>
      <Tabs defaultActiveKey="1" type="editable-card" size="small" hideAdd={true}>
        <TabPane tab="Card Tab 1" key="1" />
        <TabPane tab="Card Tab 2" key="2" />
        <TabPane tab="Card Tab 3" key="3" />
        <TabPane tab="Card Tab 3" key="4" />
        <TabPane tab="Card Tab 3" key="5" />
        <TabPane tab="Card Tab 3" key="6" />
        <TabPane tab="Card Tab 3" key="7" />
        <TabPane tab="Card Tab 3" key="8" />
      </Tabs>
      {name}
    </div>
  );
};

export default FilesTabs;
