"use client";
import Inputs from "@/components/Input/page";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";

const AuthAdmin = () => {
  const allowedIP = "161.35.220.150"; // فقط کاربران با این IP اجازه دارند
  const [userIP, setUserIP] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    // دریافت IP عمومی از سرویس خارجی
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        setUserIP(data.ip); // ذخیره IP کاربر
        if (data.ip === allowedIP) {
          setIsAllowed(true);
        }
      })
      .catch(() => setIsAllowed(false));
  }, []);

  return (
    <>
      {isAllowed ? (
        <div className="form w-full flex justify-center items-center  h-screen">
          <form
            action=""
            className="flex flex-col justify-center items-center gap-6 w-[50%] px-20 border border-primary py-10 rounded-lg"
          >
            <p>باسلام ادمین عزیز </p>
            <span className="text-[12px] text-gray-400 border border-gray-400 px-5 py-3 rounded-lg bg-gray-700/70">
              در طول فعالیت شما سیستم شما چک میشود پس فقط با سیستم ثبت شده وارد
              شوید
            </span>
            <Inputs name="userName" label={"نام کاربری"} />
            <Inputs name="userName" label={"رمز عبور "} />
            <Button fullWidth color="primary">
              ورود
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen ">
          <p> 😔😔شما اجازه دسترسی ندارید</p>

          <p>آی‌پی شما: {userIP}</p>
        </div>
      )}
    </>
  );
};

export default AuthAdmin;
