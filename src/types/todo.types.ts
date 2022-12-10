export interface ITodo {
  id: number;
  text: string;
}

export enum TodoDragTypes {
  checked = "checked",
  inProgress = "inProgress",
}
