import * as React from 'react';
import { Tree } from 'antd';
import { DataNode } from 'rc-tree/es/interface';
// FileMarkdownTwoTone,
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { createUseStyles, useTheme } from 'react-jss';

import * as styles from './index.jss';
const useStyles = createUseStyles(styles, { name: 'left-aside' });

const { DirectoryTree } = Tree;

interface IFileNode extends Omit<DataNode, 'icon'> {
  title: React.ReactNode;
  /** 文件后缀 */
  extname?: string;
  children?: IFileNode[];
}

// type IFileNode = Omit<DataNode, 'icon'>;

interface IProps {
  files: IFileNode[];
}

const LeftAside = (props: IProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { files } = props;

  const onSelect = (keys: Array<string | number>, event: any) => {
    console.log('Trigger Select', keys, event);
  };

  const onExpand = () => {
    console.log('Trigger Expand', files);
  };

  return (
    <div className={classes.wrap}>
      <header>文件列表</header>
      <section>
        <DirectoryTree
          className={classes.dirTree}
          blockNode={true}
          treeData={files.map(file => {
            // const { extname, children } = file;

            // if (Array.isArray(children) === false && extname === '.md') {
            //   (file as DataNode).icon = <FileMarkdownTwoTone />;
            // }

            return file;
          })}
          onSelect={onSelect}
          onExpand={onExpand}
        />
      </section>
      <footer>
        <PlusOutlined />
        <SearchOutlined />
      </footer>
    </div>
  );
};

export default LeftAside;

// function transformFileNodes(fileNodes: IFileNode[]) {

// }
