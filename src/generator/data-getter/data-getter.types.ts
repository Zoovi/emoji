export interface DataGetter {
  getData(): Promise<unknown>;
}
