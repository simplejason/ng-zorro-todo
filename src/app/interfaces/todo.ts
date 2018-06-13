export interface ITodo {
  id: number;
  checked: boolean;
  value: string;
  created: Date;
  parentId?: string;
}
