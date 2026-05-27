
export type TaskStatus = "باز" | "بسته" | "لغو شده";


export type SortDirection = "asc" | "desc" | null;


export type Task = {
  id: number;
  assignedTo: {
    id: number;
    name: string;  
    avatar?: string;
  };
  status: TaskStatus;
  subStatus: string;
  createdAt: string;
  assignedAt: string;
};


export interface TasksTableProps {
  data: Task[];
  totalAssigned?: number;
  readyToAssigned?: number;
  title?: string;
  onRowClick?: (task: Task) => void;
}