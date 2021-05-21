import { Theme } from '@emotion/react';
import Black from './black';
import White from './white';
import Orange from './orange';
import MintChoco from './mintchoco';
import Warm from './warm';

const Themes: { [index: string]: Theme } = {
  Default: Black,
  Black,
  White,
  Orange,
  MintChoco,
  Warm,
};

export default Themes;
