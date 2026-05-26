// components/task-details/task-header/index.tsx

import Arrow from "@/assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";

import type { Task } from "@/types/task.types";

import { TASK_STATUS_STYLES } from "@/constants/task-status";

interface TaskHeaderProps {
  task: Task;
}

function TaskHeader({ task }: TaskHeaderProps) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex gap-2 items-center justify-start">
        <button
          className="p-3 rounded-xl bg-gray-200"
          onClick={() => navigate(-1)}
        >
          <img src={Arrow} alt="back" className="w-4 h-5" />
        </button>
        <h2 className=" text-xs font-semibold text-gray-800"> {task?.id} #</h2>
        {task?.status && (
          <span
            className={`
      inline-flex rounded-2xl px-3 py-1 text-xs font-semibold
      ${TASK_STATUS_STYLES[task.status]}
    `}
          >
            {task.status}
          </span>
        )}
      </div>
    </div>
  );
}

export default TaskHeader;
