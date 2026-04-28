import { MenuItem } from "./menus";

export enum Theme {
  light,
  dark,
}

export type LoginCredentials = {
  email: string;
  password: string;
};

export type SignUpCredentials = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type Role = {
  name: string;
};

export type I18n = {
  id: string;
  locale: number;
  system: number;
};

export type Account = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  theme: string;
  locale: string;
  menu_items: MenuItem[];
};

export type AccountDataEntry = {
  id: string;
  date: string;
  entry: number;
  category: string;
  system: number;
  system_unit: number;
};

export type AccountDataSeries = {
  label: string;
  entries: AccountDataEntry[];
};
