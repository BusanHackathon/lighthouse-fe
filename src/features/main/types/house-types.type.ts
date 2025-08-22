import type { FORM_FIELDS, HOUSE_TYPE_OPTIONS } from '../constants';

export type HouseType = (typeof HOUSE_TYPE_OPTIONS)[number]['value'];

export type FormField = (typeof FORM_FIELDS)[keyof typeof FORM_FIELDS];
