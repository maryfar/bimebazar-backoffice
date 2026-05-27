import type { Task } from "@/types/task.types";



export const mockTasks: Task[] = [
  {
    id: 3035475,
    assignedTo: {
    id: 1,
    name: "مهرداد رضایی",
    avatar: "/images/portrait06.svg"
  },
    status: "باز",
    subStatus: "در انتظار پرداخت",
    createdAt: "2026-05-27T10:01:00Z",
    assignedAt: "2026-05-27T10:01:00Z",
  },
  {
    id: 20530001,
    assignedTo: {
    id: 1,
    name: "رها کریمی",
    avatar: "/images/portrait02.svg"
  },
    status: "بسته",
    subStatus: "بررسی اطلاعات",
    createdAt: "2026-05-27T10:01:00Z",
    assignedAt: "2026-05-27T10:01:00Z",
  },
  {
    id: 20530002,
    assignedTo: {
    id: 1,
    name:  "فرهاد حسینی",
    avatar: "/images/portrait01.svg"
  },
    status: "لغو شده",
    subStatus: "صادر شده",
    createdAt: "2026-05-24T10:01:00Z",
    assignedAt: "2026-05-27T10:01:00Z",
  },
  {
    id: 20530003,
    assignedTo: {
    id: 1,
    name: "پویا احمدی",
    avatar: ""
  },
  
    status: "باز",
    subStatus: "نیاز به تغییر شرکت بیمه‌گر",
    createdAt: "2026-05-27T10:01:00Z",
    assignedAt: "2026-05-27T10:01:00Z",
  },
];

