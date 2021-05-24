import { ReactNode, SyntheticEvent } from 'react';
export interface IQuote {
  children: ReactNode;
}
export interface IContainer {
  children: ReactNode;
  alignContent?: 'center' | 'left' | 'right';
}
export interface IHero {
  children: ReactNode;
}
export interface ICategory {
  name: string;
  href: string;
}
export interface IAuthor {
  name: string;
  href: string;
  imageUrl: string;
}
export interface IPost {
  title: string;
  href: string;
  category: ICategory;
  description: string;
  date: string;
  datetime: string;
  imageUrl: string;
  readingTime: string;
  author: IAuthor;
}
export interface IButtonGroup {
  className?: string;
  children: ReactNode;
}
export interface IButton {
  onClick?: (param?: SyntheticEvent | any) => void | Promise<void>;
  children?: ReactNode;
  route?: string;
  title: string;
  disabled?: boolean;
  className?: string;
  type?: string;
  icon?: ReactNode;
  size?: string;
}

export interface ILayout extends ISeoTags {
  children: ReactNode;
}
export interface ISeoTags {
  title?: string;
  desc?: string;
  url?: string;
  image?: string;
}
