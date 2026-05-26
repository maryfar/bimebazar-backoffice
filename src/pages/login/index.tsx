import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthStore } from "@/store/auth.store";

import { loginSchema, type LoginFormData } from "./schema";
import { DEFAULT_ROUTE_BY_ROLE } from "@/router/default-routes";

function LoginPage() {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    const success = login(data);

    if (!success) {
      setError("اطلاعات ورود نامعتبر است");
      return;
    }

    const user = useAuthStore.getState().user;

    if (!user) return;
    navigate(DEFAULT_ROUTE_BY_ROLE[user.role]);
  };

  return (
    <div className="flex items-center justify-center mt-20 ">
      <div className="w-[320px] rounded-xl  bg-white p-5 shadow-gray-400">
        <h1 className="mb-4 font-bold">ورود به پنل</h1>

        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("mobile")}
              placeholder="شماره موبایل"
              className="w-full rounded-lg border p-2 text-sm"
            />

            {errors.mobile && (
              <p className="mt-1 text-xs text-red-500">
                {errors.mobile.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="رمز عبور"
              className="w-full rounded-lg border p-2 text-sm"
            />

            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}
          <br className=" text-gray-800 w-full" />
          <div className="flex items-end justify-end">
            <button
              type="submit"
              className=" rounded-xl shadow-gray-200 bg-gray-700 p-2 text-sm text-white px-4 self-end  shadow-2xl"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
