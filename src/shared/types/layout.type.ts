export type LayoutType = {
  Main: 'Main';
  Auth: 'Auth';
  Realtor: 'Realtor';
};

export type HeaderType = LayoutType[keyof LayoutType];
export type FooterType = Exclude<HeaderType, 'Realtor'>;

export type LayoutToFooterMap = {
  [K in keyof LayoutType]: K extends 'Realtor' ? 'Main' : LayoutType[K];
};
