/* tslint:disable */
import { Technology } from './technology';
export interface Skill {
  technology?: Technology;

  /**
   * Self rating on 5
   */
  selfRating?: number;
}
