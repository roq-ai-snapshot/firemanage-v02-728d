import { FireDepartmentInterface } from 'interfaces/fire-department';
import { GetQueryInterface } from 'interfaces';

export interface ResourceInterface {
  id?: string;
  name: string;
  type: string;
  status: string;
  fire_department_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  fire_department?: FireDepartmentInterface;
  _count?: {};
}

export interface ResourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  status?: string;
  fire_department_id?: string;
}
