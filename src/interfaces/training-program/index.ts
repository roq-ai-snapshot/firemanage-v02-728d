import { UserTrainingProgramInterface } from 'interfaces/user-training-program';
import { FireDepartmentInterface } from 'interfaces/fire-department';
import { GetQueryInterface } from 'interfaces';

export interface TrainingProgramInterface {
  id?: string;
  name: string;
  description?: string;
  start_date: Date | string;
  end_date: Date | string;
  fire_department_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  user_training_program?: UserTrainingProgramInterface[];
  fire_department?: FireDepartmentInterface;
  _count?: {
    user_training_program?: number;
  };
}

export interface TrainingProgramGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  fire_department_id?: string;
}
