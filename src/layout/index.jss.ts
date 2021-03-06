import { JssStyle } from 'css-jss';

export const wrap = (theme: App.ITheme): JssStyle => ({
  background: `${theme.bodyBackground}`,
  height: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
});

export const aside = (theme: App.ITheme): JssStyle => ({
  flex: '0 0 200px',
  borderRight: `solid 1px ${theme.borderColorBase}`,
  background: '#f5f5f5',
});

export const content: JssStyle = {
  flex: 1,
  width: 0,
};
