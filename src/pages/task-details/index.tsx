import { useParams } from "react-router-dom";
import Arrow from "@/assets/images/arrow.svg";
import { mockTasks } from "@/mocks/tasks";
import { TASK_STATUS_STYLES } from "@/constants/task-status";

function TaskDetailsPage() {
  const { id } = useParams();
  const taskDetails = mockTasks.find((task) => task.id === Number(id));
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8">
      <div>
        <div className="flex gap-2 items-center justify-start">
          <div className="p-3 rounded-xl bg-gray-200  ">
            <img src={Arrow} alt="back" className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            {" "}
            {taskDetails?.id || id} #
          </h2>
          {taskDetails?.status && (
            <span
              className={`
      inline-flex rounded-2xl px-2 py-1 text-xs font-medium
      ${TASK_STATUS_STYLES[taskDetails.status]}
    `}
            >
              {taskDetails.status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPage;
