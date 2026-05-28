
# پروژه بک‌آفیس بیمه‌بازار


##  نصب و راه‌اندازی

cd bimebazar-backoffice
npm install
npm run dev


## 👥 کاربران تست

برای ورود به سیستم می‌توانید از اطلاعات زیر استفاده کنید:

| **ادمین** | `09120000001` | `123456` | مهرداد رضایی |
| **کاربر عادی** | `09120000002` | `123456` | مریم فرهادی |


## فناوری‌ها

Vite + React + TypeScript

React Router DOM v6

Zustand

Tailwind CSS

React Hook Form + Zod


## ساختار پروژه

```
src/
├── assets/          # تصاویر و فایل‌های استاتیک
├── components/      # کامپوننت‌های قابل استفاده مجدد
│   ├── guards/      # گاردهای مسیر (ProtectedRoute, RoleGuard)
│   ├── icons/       # آیکون‌های SVG
│   ├── tasks/       # کامپوننت‌های مربوط به تسک
│   └── ui/          # کامپوننت‌های UI
├── constants/       # ثابت‌های برنامه
├── layouts/         # چیدمان‌های اصلی (AuthLayout, DashboardLayout)
├── mocks/           # دیتاهای mock برای توسعه
├── pages/           # صفحات برنامه
│   ├── login/       # صفحه ورود
│   ├── tasks/       # صفحه لیست وظیفه‌ها
│   └── task-details/# صفحه جزئیات وظیفه
├── router/          # کانفیگ مسیرها
├── store/           # مدیریت state (Zustand)
├── types/           # تعاریف TypeScript
└── utils/           # توابع کمکی
```






