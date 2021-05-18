import ThemeType from './type';
import Black from './black';
import White from './white';
import Orange from './orange';
import MintChoco from './mintchoco';
import Warm from './warm';

export type { ThemeType };

const Themes: { [index: string]: ThemeType } = {
  Default: Black,
  Black,
  White,
  Orange,
  MintChoco,
  Warm,
};

export default Themes;
