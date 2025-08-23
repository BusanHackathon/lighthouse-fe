export type Property = {
  id: number;
  type: string;
  buildingName: string;
  address: string;
};

export type AlternativeProperty = {
  placeId: number;
  address: string;
  addressDetail: string | null;
  houseType: string;
  riskScore: number;
  riskGrade: string;
};
