import ThemeType from "./type";
import Black from "./black";
import White from "./white";
import Orange from "./orange";
import MintChoco from "./mintchoco";

export type { ThemeType };

const Themes: { [index: string]: ThemeType } = {
  Default: Black,
  Black,
  White,
  Orange,
  MintChoco,
};

export default Themes;
