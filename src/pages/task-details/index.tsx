import { useParams } from "react-router-dom";

import { useAuthStore } from "@/store/auth.store";

import TaskHeader from "@/components/task-details/task-header";
import InsuranceInfoCard from "@/components/task-details/insurance-info-card";
import ActionsCard from "@/components/task-details/actions-card";
import ImagesGallery from "@/components/task-details/images-gallery";

import { mockTasks } from "@/mocks/tasks";
import { mockTaskDetails } from "@/mocks/mockTaskDetails";

function TaskDetailsPage() {
  const { id } = useParams();

  const user = useAuthStore((state) => state.user);
  const isAdmin = user?.role === "admin";

  const task = mockTasks.find((item) => item.id === Number(id));

  if (!task) {
    return <div className="p-8">تسک پیدا نشد</div>;
  }

  const taskDetail = mockTaskDetails[task.id];

  if (!taskDetail) {
    return <div className="p-8">جزئیات تسک موجود نیست</div>;
  }

  return (
    <div className="space-y-6 py-8 px-3">
      <TaskHeader task={task} />

      <div className="lg:grid lg:grid-cols-12 gap-4 flex flex-col-reverse">
        <div className="col-span-8">
          <InsuranceInfoCard data={taskDetail.insuranceInfo} />

          {isAdmin && (
            <div className="mt-4">
              <ImagesGallery data={taskDetail.images} />
            </div>
          )}
        </div>

        <div className="col-span-4">
          <ActionsCard />
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPage;
