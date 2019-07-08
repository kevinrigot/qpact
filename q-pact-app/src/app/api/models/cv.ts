/* tslint:disable */
import { Experience } from './experience';
import { Skill } from './skill';

/**
 * test
 */
export interface Cv {
  description?: string;
  id?: string;
  birthdate?: string;
  phoneNumber?: string;
  email?: string;
  name?: string;
  experiences?: Array<Experience>;
  skills?: Array<Skill>;
  languageSkills?: Array<Skill>;

  /**
   * Name of the training + duration
   */
  trainings?: Array<string>;

  /**
   * Name of the certification
   */
  certifications?: Array<string>;
}
