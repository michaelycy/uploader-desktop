import { observable } from 'mobx';
import themeJson from '@/theme/default.json';

class ThemeStore {
  @observable public theme: App.ITheme = themeJson as any;
}

export default new ThemeStore();
