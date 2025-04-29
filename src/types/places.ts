export enum StateCategory {
  RELIGIOUS = "RELIGIOUS",
  HISTORICAL = "HISTORICAL",
  CULTURAL = "CULTURAL",
  NATURAL = "NATURAL",
}
export type State = {
  id: string;
  title: string;
  subTitle: string;
  capitalName: string;
  image: string;
  category: StateCategory[];
};
