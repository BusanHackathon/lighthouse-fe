import type { FORM_FIELDS, HOUSE_TYPES, RENT_TYPES } from '../constants';

export type RentType = (typeof RENT_TYPES)[keyof typeof RENT_TYPES];
export type HouseType = (typeof HOUSE_TYPES)[number];
export type FormField = (typeof FORM_FIELDS)[keyof typeof FORM_FIELDS];
