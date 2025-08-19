export type LayoutType = {
  Main: 'Main';
  Auth: 'Auth';
  Realtor: 'Realtor';
};

export type HeaderType = LayoutType[keyof LayoutType];
