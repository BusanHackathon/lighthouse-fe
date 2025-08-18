import type { HeaderType } from '../../../types';
import { AuthHeader, MainHeader, RealtorHeader } from '../header';

type Props = {
  type: HeaderType;
};

const HEADER_COMPONENTS = {
  Main: MainHeader,
  Auth: AuthHeader,
  Realtor: RealtorHeader,
};

export const Header = ({ type }: Props) => {
  const HeaderComponent = HEADER_COMPONENTS[type];

  return <HeaderComponent />;
};
