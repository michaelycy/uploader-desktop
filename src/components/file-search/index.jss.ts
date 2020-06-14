// import { ICSSProperties } from '@/@types/jss';
import { JssStyle } from 'css-jss';

export const wrap: JssStyle = {
  color: 'red',
  lineHeight: 1,
  '&:after': {
    color: '#000',
  },
};

export const btn: JssStyle = {};
