import Inputs from "@/components/Input/page";
import { Button } from "@heroui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="border border-primary px-20 py-10 rounded-lg bg-slate-700/50 w-[100vh]">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl ">ورود</h1>
            <p> 😎 دوست من سلام ...</p>
            <div className="flex justify-center gap-1">
              <span className="text-sm text-gray-500"> ایا اکانت داری ؟</span>
              <Link href={"/"}>ندارم </Link>
            </div>
          </div>
          <form action="" className="flex flex-col gap-4 mt-10">
            <Inputs label={"نام کاربری"} />
            <Inputs label={" رمز عبور"} />
            <Button color="primary">ورود</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
