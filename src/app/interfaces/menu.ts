export interface IMenu {
  id: string;
  name: string;
  children?: IMenu[];

  [key: string]: any;
}
