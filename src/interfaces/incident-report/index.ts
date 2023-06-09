import { FireDepartmentInterface } from 'interfaces/fire-department';
import { GetQueryInterface } from 'interfaces';

export interface IncidentReportInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  fire_department_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  fire_department?: FireDepartmentInterface;
  _count?: {};
}

export interface IncidentReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  fire_department_id?: string;
}
