import React from "react";
import { useForm } from "react-hook-form";

const Enter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-black-300 via-black-200 to-black-100 pt-44 p-10 leading-relaxed text-lg">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="username">
              نام کاربری <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("username", { min: 3 })}
              className="border border-black-500 p-1 my-2 outline-none rounded-sm bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              رمز عبور <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("password", { min: 3 })}
              className="border border-black-500 p-1 my-2 outline-none rounded-sm bg-transparent"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-red-500 w-1/2 p-2 mt-5 text-white rounded-sm focus:w-full duration-300"
              type="submit"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enter;
