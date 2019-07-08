/* tslint:disable */
export interface Technology {
  name?: string;
  parentTechnology?: Technology;
  version?: string;

  /**
   * Type of technology (language, server, database, tool, ...)
   */
  tags?: Array<string>;
}
