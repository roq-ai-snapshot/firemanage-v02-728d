import { UserInterface } from 'interfaces/user';
import { TrainingProgramInterface } from 'interfaces/training-program';
import { GetQueryInterface } from 'interfaces';

export interface UserTrainingProgramInterface {
  id?: string;
  user_id: string;
  training_program_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  user?: UserInterface;
  training_program?: TrainingProgramInterface;
  _count?: {};
}

export interface UserTrainingProgramGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  training_program_id?: string;
}
