import axios from "axios";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import UiComponantSignup from "../components/Authentication/UiComponantSignup";
export default function SignupPage() {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    const domain = "https://bookstore.eraasoft.pro/api";
    const endPoint = "/register";
    const url = domain + endPoint;

    if (values.password !== values.confirmpassword) {
      alert("Password not matching");
    }

    const data = {
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      password: values.password,
      password_confirmation: values.confirmpassword,
    };

    try {
      const res = await axios.post(url, data);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const SignupSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),

    lastname: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),

    terms: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  return (
    <>
      <div className="w-full  bg-[#F5F5F5] flex flex-col items-center justify-center gap-6 ">
        {/* logic componant (formik) */}
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            terms: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleRegister(values);
          }}
        >
          {/* ui componant  */}
          <UiComponantSignup
            firstname="firstname"
            lastname="lastname"
            email="email"
            password="password"
            confirmpassword="confirmpassword"
          />
        </Formik>
      </div>
    </>
  );
}
