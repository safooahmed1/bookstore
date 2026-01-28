import { ErrorMessage, Field, Form } from "formik";
import { FaFacebook, FaGoogle } from "react-icons/fa";
export default function UiComponant({ email, password }) {
  return (
    <Form className="w-200 p-4 bg-[#F5F5F5] flex flex-col gap-6">
      <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222]">
        <span>Email</span>
        <Field
          name={email}
          className="text-sm text-gray-950 w-full border-[#22222233] p-4 rounded-lg border"
          placeholder="example@gmail.com"
        />
        <ErrorMessage name="email" component={"p"} className="text-error" />
      </div>

      <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222] ">
        <span>Password</span>
        <Field
          name={password}
          className="text-sm text-gray-950 w-full border-[#22222233]  p-4 rounded-lg border"
          placeholder="Enter password"
        />
        <ErrorMessage name="password" component={"p"} className="text-error" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <input type="checkbox" className=" checkbox checkbox-error" />
          <span className="text-black">Remember me</span>
        </div>
        <span className="text-mainColor active:text-[#8c1347]">
          Forget password?
        </span>
      </div>

      <button
        type="sumbit"
         className="bg-mainColor p-4 rounded-lg font-semibold  text-[18px] text-white"
      >
        Login
      </button>
      <div className="text-[#00000080] w-full text-center my-8">or</div>
      <div className="flex flex-col gap-4">
        <button className="flex justify-center items-center gap-4 shadow-lg bg-white w-full rounded-lg font-normal text-[14px] text-black p-4">
          <FaGoogle />
          Login with Google
        </button>
        <button className="flex justify-center items-center gap-4 shadow-lg bg-white w-full rounded-lg font-normal text-[14px] text-black p-4">
          <FaFacebook />
          Login with Facebook
        </button>
      </div>
    </Form>
  );
}
