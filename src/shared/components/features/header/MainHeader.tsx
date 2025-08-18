import { HEADER_TOKENS } from '../../../styles';
import { cn } from '../../../utils';

export const MainHeader = () => {
  return (
    <header className={cn(HEADER_TOKENS.base, HEADER_TOKENS.variants.main)}>MainHeader</header>
  );
};
