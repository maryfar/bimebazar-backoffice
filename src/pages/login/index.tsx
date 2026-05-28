import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthStore } from "@/store/auth.store";

import { loginSchema, type LoginFormData } from "./schema";
import { DEFAULT_ROUTE_BY_ROLE } from "@/router/default-routes";
import Button from "@/components/ui/Button";

function LoginPage() {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError("");

    try {
      const success = login({
        mobile: data.mobile as string,
        password: data.password,
      });

      if (!success) {
        setError("اطلاعات ورود نامعتبر است");
        return;
      }

      const user = useAuthStore.getState().user;
      if (!user) return;

      navigate(DEFAULT_ROUTE_BY_ROLE[user.role]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20 ">
      <div className="w-105 rounded-xl  bg-white p-5 shadow-gray-400">
        <h1 className="mb-4 font-bold text-[16px]">ورود به پنل</h1>

        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("mobile")}
              placeholder="شماره موبایل"
              className={`w-full rounded-lg border border-gray-400 p-2  text-xs ${
                !errors.mobile ? "mb-2" : "border-red-500 focus:outline-none"
              } `}
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
              className={`w-full rounded-lg border  border-gray-400 p-2  text-xs ${
                !errors.password ? "mb-2" : "border-red-500 focus:outline-none"
              } `}
            />

            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <p className="text-xs text-red-500 ">{error}</p>}

          <div className="flex items-end justify-end border-t border-gray-300 pt-3">
            <Button size="sm" type="submit" disabled={isLoading}>
              ورود
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
