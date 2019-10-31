import { Department } from './departments';
import { Employee } from './employees';

export class Task {
    id: number;
    department_id: number;
    name: string;
    due_date: string;
    description: string;
    employees: number[];
}
