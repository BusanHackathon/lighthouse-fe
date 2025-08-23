// 규모(ScaleBand) 상수
export const SCALE_BANDS = [
  '전체',
  '60m이하',
  '60m초과85m이하',
  '85m초과102m이하',
  '102m초과',
] as const;

export const SCALE_BAND_OPTIONS = [
  { value: 'ALL', label: '전체' },
  { value: 'LT_60', label: '60m이하' },
  { value: 'BT_60_85', label: '60m초과85m이하' },
  { value: 'BT_85_102', label: '85m초과102m이하' },
  { value: 'GT_102', label: '102m초과' },
] as const;

export type ScaleBandType = (typeof SCALE_BAND_OPTIONS)[number]['value'];
