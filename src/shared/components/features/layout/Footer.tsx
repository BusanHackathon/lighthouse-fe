import type { FooterType } from '../../../types';
import { AuthFooter } from '../footer';

type Props = {
  type: FooterType;
};

type FooterComponentMap = {
  Main: null;
  Auth: typeof AuthFooter;
};

const FOOTER_COMPONENTS: FooterComponentMap = {
  Main: null,
  Auth: AuthFooter,
} as const;

export const Footer = ({ type }: Props) => {
  const Component = FOOTER_COMPONENTS[type];

  return Component === null ? null : <Component />;
};
