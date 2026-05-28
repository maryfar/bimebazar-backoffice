import { useMemo } from "react";

import { useSearchParams } from "react-router-dom";

import GrayIndicator from "@/assets/images/indicator.svg";
import YellowIndicator from "@/assets/images/yellow.svg";

import type { SortDirection, TasksTableProps } from "@/types/task.types";
import { TASK_STATUS_STYLES } from "@/constants/task-status";
import SortIcon from "../icons/sort-icon";
import { formatSmartDate } from "@/utils/formatRelativeDate";
import Avatar from "@/assets/images/Avatar.svg";
import { formatNumber } from "@/utils/formatNumber";

function TasksTable({
  data,
  totalAssigned,
  myTasksCount,
  readyToAssigned,
  onRowClick,
}: TasksTableProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortDirection = (searchParams.get("sort") as SortDirection) || null;

  const sortedData = useMemo(() => {
    if (!sortDirection) return data;

    return [...data].sort((a, b) => {
      return sortDirection === "asc" ? a.id - b.id : b.id - a.id;
    });
  }, [data, sortDirection]);

  const handleSort = (direction: SortDirection) => {
    if (sortDirection === direction) {
      searchParams.delete("sort");

      setSearchParams(searchParams);

      return;
    }

    searchParams.set("sort", direction!);

    setSearchParams(searchParams);
  };

  return (
    <div className="mx-auto w-full max-w-6xl rounded-tl-2xl rounded-tr-2xl border border-gray-300 bg-white ">
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex gap-3 text-sm">
          {readyToAssigned !== undefined && (
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold">آماده ارجاع</span>

              <span className="rounded-2xl bg-gray-200 px-3 py-1 text-[11px] font-semibold">
                {formatNumber(readyToAssigned)}
              </span>
            </div>
          )}

          {totalAssigned !== undefined && (
            <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-2 py-1">
              <span className="text-[13px] font-semibold">ارجاع داده شده</span>

              <span className="rounded-2xl bg-gray-200 px-3 py-1 text-[11px] font-semibold">
                {totalAssigned}
              </span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold">وظیفه‌های من</span>

            <span className="rounded-2xl bg-gray-200 px-3 py-1 text-[11px] font-semibold">
              {myTasksCount}
            </span>
          </div>
        </div>
      </div>

      {/* table */}

      <div className="overflow-hidden border-t border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-32 px-6 py-4 text-right text-xs font-bold tracking-wider text-gray-600">
                  <div className="flex items-center  gap-2">
                    <span>شماره</span>

                    <div className="flex flex-col gap-0.5">
                      <button onClick={() => handleSort("asc")}>
                        <SortIcon
                          direction="asc"
                          active={sortDirection === "asc"}
                        />
                      </button>

                      <button onClick={() => handleSort("desc")}>
                        <SortIcon
                          direction="desc"
                          active={sortDirection === "desc"}
                        />
                      </button>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-600">
                  وضعیت
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold text-gray-600">
                  کارشناس
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold text-gray-600">
                  زمان ارجاع
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold text-gray-600">
                  تاریخ ایجاد وظیفه
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold text-gray-600">
                  زیر وضعیت
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 bg-white">
              {sortedData.map((task, idx) => (
                <tr
                  key={task.id}
                  onClick={() => onRowClick?.(task)}
                  className={`cursor-pointer transition-colors hover:bg-gray-50 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-gray-900">
                    #{task.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-2xl px-3 py-1 text-xs font-medium ${
                        TASK_STATUS_STYLES[task.status]
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-xs font-normal text-gray-700 flex items-center gap-2">
                    <img
                      src={
                        task.assignedTo.avatar ? task.assignedTo.avatar : Avatar
                      }
                      alt="avatar"
                      className="w-10 h-10 rounded-lg"
                    />
                    <p> {task.assignedTo.name}</p>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-xs font-normal text-gray-700">
                    {formatSmartDate(task.assignedAt)}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-xs font-normal text-gray-700">
                    {formatSmartDate(task.createdAt)}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4  text-gray-600">
                    <div className="flex w-fit items-center gap-1 rounded-2xl bg-gray-200 px-3 py-2">
                      <img
                        src={
                          task.subStatus === "نیاز به تغییر شرکت بیمه‌گر"
                            ? YellowIndicator
                            : GrayIndicator
                        }
                        width={8}
                        height={8}
                        alt=""
                      />

                      <span className="text-[11px] font-semibold text-right">
                        {task.subStatus}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TasksTable;
