/* tslint:disable */
import { Project } from './project';
import { Role } from './role';

/**
 * Working experience
 */
export interface Experience {
  from?: string;
  to?: string;

  /**
   * Company name
   */
  company?: string;
  project?: Project;
  role?: Role;
}
