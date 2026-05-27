import { useNavigate } from "react-router-dom";
import TasksTable from "@/components/tasks/TasksTable";
import { useAuthStore } from "@/store/auth.store";
import { mockTasks } from "@/mocks/tasks";
import Arrow from "@/assets/images/arrow.svg";

function TasksPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const isAdmin = user?.role === "admin";
  const handleRowClick = (taskId: number) => {
    navigate(`/tasks/${taskId}`);
  };
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8">
      <div>
        <div className="flex gap-2 items-center justify-start">
          <div className="px-3 py-2 rounded-xl bg-gray-200  ">
            <img src={Arrow} alt="back" className="w-4 h-5" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">وظیفه‌ها</h2>
        </div>
        <span className="mr-12 text-gray-600 font-semibold text-[11px]">
          3,243,768 مورد
        </span>
      </div>

      <TasksTable
        data={mockTasks}
        totalAssigned={isAdmin ? 84 : undefined}
        readyToAssigned={isAdmin ? 99 : undefined}
        onRowClick={(task) => handleRowClick(task.id)}
      />
    </div>
  );
}
export default TasksPage;
