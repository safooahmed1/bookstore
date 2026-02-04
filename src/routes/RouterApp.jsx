import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddCodePage from "../pages/AddCodePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AboutusPage from "../pages/AboutusPage";


export default function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Auth Pages */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutusPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forget-password" element={<ForgetPasswordPage />} />
          <Route path="add-code" element={<AddCodePage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route
            path="*"
            element={
              <div className=" flex items-center justify-center h-80 w-full bg-backGrond text-scandColor text-5xl font-semibold ">
                Error 404 | Not Fond
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
