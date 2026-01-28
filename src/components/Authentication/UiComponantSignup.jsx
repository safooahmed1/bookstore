import { ErrorMessage, Field, Form } from "formik";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function UiComponantSignup({
  firstname,
  lastname,
  email,
  password,
  confirmpassword,
}) {
  return (
    <>
      <Form className="p-4 bg-[#F5F5F5] flex flex-col gap-4 py-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222] ">
            <span>First Name</span>
            <Field
              name={firstname}
              className="text-sm text-gray-950 w-full border-[#22222233] p-4 rounded-lg border"
              placeholder="John"
            />
            <ErrorMessage
              name={firstname}
              component={"p"}
              className="text-error"
            />
          </div>
          <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222] ">
            <span>Last Name</span>
            <Field
              name={lastname}
              className="text-sm text-gray-950 w-full border-[#22222233] p-4 rounded-lg border"
              placeholder="Smith"
            />
            <ErrorMessage
              name={lastname}
              component={"p"}
              className="text-error"
            />
          </div>
        </div>

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
          <ErrorMessage
            name={password}
            component={"p"}
            className="text-error"
          />
        </div>
        <div className="flex flex-col gap-1 font-semibold text-[18px] text-[#222222] ">
          <span>Confirm password</span>
          <Field
            name={confirmpassword}
            className="text-sm text-gray-950 w-full border-[#22222233]  p-4 rounded-lg border"
            placeholder="Enter password"
          />
          <ErrorMessage
            name={confirmpassword}
            component={"p"}
            className="text-error"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-4">
            <input type="checkbox" className="checkbox checkbox-error" />
            <span className="text-black">Remember me</span>
          </div>
          <span className="text-mainColor">Forget password?</span>
        </div>

        <button
          type="sumbit"
          className="bg-mainColor p-4 rounded-lg font-semibold  text-[18px] text-white"
        >
          Singup
        </button>
        <div className="mt-5">
          <p className="text-black font-semibold text-center">
            Don't have an account?
            <span className="text-mainColor">Signup</span>
          </p>
        </div>
        <div className="text-[#00000080] w-full text-center my-8">or</div>
        <div className="flex flex-col gap-4">
          <button className="flex justify-center items-center gap-4 shadow-xl bg-white w-full rounded-lg font-normal text-[18px] text-black p-4">
            <FaGoogle />
            Login with Google
          </button>
          <button className="flex justify-center items-center gap-4 shadow-xl bg-white w-full rounded-lg font-normal text-[18px] text-black p-4">
            <FaFacebook />
            Login with Facebook
          </button>
        </div>
      </Form>
    </>
  );
}
