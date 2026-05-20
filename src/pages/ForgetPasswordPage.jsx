import axios from "axios";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import UiComponant from "../components/Authentication/UiComponant";
import Herosection from "../components/HeroSection/Herosection";
import BtnType from "../components/Authentication/BtnType";
import toast from "react-hot-toast";
import { domain } from "../store/domain";

export default function ForgetPasswordPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <>
      <Herosection h="h-84.5" />
      <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center gap-6 py-6">
        <h1 className="font-semibold text-mainColor text-2xl">
          Forget Password
        </h1>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await axios.post(domain + "/forget-password", values);
              sessionStorage.setItem("reset-email", values.email);
              toast.success(res.data.message);
              navigate("/add-code");
            } catch (error) {
              toast.error(error.response?.data?.message);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-200 p-4 flex flex-col gap-6 items-center">
              <UiComponant
                name="email"
                label="Email"
                placeholder="example@gmail.com"
                type="email"
              />
              <BtnType btn="Send Code" w="w-[280px]" disabled={isSubmitting} />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
