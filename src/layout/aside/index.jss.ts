import { JssStyle } from 'css-jss';

export const wrap = (): JssStyle => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  height: '100%',

  '& > header': {
    lineHeight: 1.5,
    flex: '0 0 24px',
    cursor: 'pointer',
    userSelect: 'none',
    padding: '20px 18px 0 18px',
  },

  '& > section': {
    flex: 1,
    height: 0,
    padding: '5px 10px 10px 12px',
    overflow: 'auto',
  },

  '& > footer': {
    lineHeight: 1.5,
    flex: '0 0 24px',

    '& > .anticon': {
      cursor: 'pointer',
      marginLeft: 5,
    },
  },
});

export const dirTree: JssStyle = {
  background: 'none',
  '& .ant-tree-switcher': { width: 18 },
  '& .ant-tree-node-content-wrapper': { padding: 0 },
};
