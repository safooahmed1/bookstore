import { useEffect } from "react";
import { Form, Formik } from "formik";
import Herosection from "../components/HeroSection/Herosection";
import UiComponant from "../components/Authentication/UiComponant";
import BtnType from "../components/ui/BtnType";
import { LiaPenAltSolid } from "react-icons/lia";
import Button from "../components/ui/Button";
import { useProfile, useUpdateProfile } from "../hooks/useProfile";
import toast from "react-hot-toast";

export default function Profile() {
  const { data, isLoading } = useProfile();
  const updateProfile = useUpdateProfile();
  const profile = data?.data || {};

  const initialValues = {
    firstname: profile.first_name || "",
    lastname: profile.last_name || "",
    email: profile.email || "",
    number: profile.phone || "",
    address: profile.address || "",
  };

  const handleSubmit = async (values) => {
    try {
      await updateProfile.mutateAsync({
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        phone: values.number,
        address: values.address,
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  if (isLoading) {
    return (
      <>
        <Herosection h="h-84.5" />
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mainColor"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <Herosection h="h-84.5" />
      <div className="flex items-center justify-center">
        <div className="container flex items-center justify-center flex-col relative min-h-screen pb-20">
          <div className="w-45 h-45 rounded-full absolute -top-15 overflow-hidden border-4 border-white shadow-lg">
            <img
              src={profile.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcqkUHsDulyGaMQk4mV7s9_d8-FW0x8ZOQ&s"}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <Button
              isMainBtn
              classn="flex items-center justify-center rounded-full w-[33px] h-[33px] -top-20 -right-15 absolute"
            >
              <LiaPenAltSolid />
            </Button>
          </div>

          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Form className="w-full max-w-2xl">
              <div className="bg-[#FFFFFF] flex flex-col gap-4 rounded-xl mt-9 p-7">
                <div>
                  <h1 className="text-[20px] text-[#222222] font-semibold text-center mt-7">
                    General information
                  </h1>
                </div>
                <div className="mt-7 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-5">
                    <UiComponant
                      name="firstname"
                      label="First Name"
                      placeholder="John"
                      type="firstname"
                    />
                    <UiComponant
                      name="lastname"
                      label="Last Name"
                      placeholder="Smith"
                      type="lastname"
                    />
                  </div>
                  <UiComponant
                    name="email"
                    label="Email"
                    placeholder="example@gmail.com"
                    type="email"
                  />
                  <UiComponant
                    name="number"
                    label="Phone number"
                    placeholder="123456789"
                    type="text"
                  />
                  <UiComponant
                    name="address"
                    label="Address"
                    placeholder="Maadi, Cairo, Egypt."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center mt-6">
                <BtnType
                  btn="Update information"
                  w="w-[280px]"
                  disabled={updateProfile.isPending}
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
