/* tslint:disable */
import { Technology } from './technology';

/**
 * Project description and technologies used
 */
export interface Project {
  name?: string;

  /**
   * Description of the project (why and what)
   */
  description?: string;

  /**
   * Number of members in the team and in which roles
   */
  team?: string;
  methodology?: Technology;
  technologies?: Technology;
}
