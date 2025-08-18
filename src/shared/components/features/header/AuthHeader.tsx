import { HEADER_TOKENS } from '../../../styles';
import { cn } from '../../../utils';
import { LogoSection } from '../../common';

export const AuthHeader = () => {
  return (
    <header className={cn(HEADER_TOKENS.base, HEADER_TOKENS.variants.auth)}>
      <LogoSection />
    </header>
  );
};
