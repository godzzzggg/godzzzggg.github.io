import { CSSProperties } from 'react';
import { useHistory } from 'react-router';
import Button from './index';
import Arrow from '@/icon/arrow';

type BackButtonProps = {
  variant?: string;
  style?: CSSProperties;
};

const BackButton = ({ variant, style }: BackButtonProps) => {
  const history = useHistory();
  return (
    <Button
      variant={variant}
      onClick={() => history.goBack()}
      style={{ ...style, width: '50px', height: '50px' }}
    >
      <Arrow style={{ width: '100%' }} />
    </Button>
  );
};

export default BackButton;
