import type { FORM_FIELDS, HOUSE_TYPES } from '../constants';

export type HouseType = (typeof HOUSE_TYPES)[number];
export type FormField = (typeof FORM_FIELDS)[keyof typeof FORM_FIELDS];
