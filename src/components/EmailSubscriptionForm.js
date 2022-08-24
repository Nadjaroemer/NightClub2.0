import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import Message from "./Message";
import axios from "axios";
import PrimaryButton from "./PrimaryButton";

export default function EmailSubscriptionForm() {
  const [successMessage, setSuccessMessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const mailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = async (form) => {
    try {
      const res = await axios.post(
        `${process.env.NIGHTCLUB_APP_BASE_URL}/newsletters`,

        {
          email: form.email,
        }
      );
      if (res.status === 201) {
        setSuccessMessage(`${res.data.email} is now subscribed!`);
        setTimeout(() => setSuccessMessage(null), 3000);
      }
    } catch {
      setError("nightClubApi", { message: "Something went wrong" });
    }
  };

  return (
    <section className="flex flex-col justifz-center items-center pt-44 pb-14">
      <div>
        <h2 className="uppercase text-4xl pb-3">
          Want the latest night club news
        </h2>
        <p className="text-2xl text-center">
          Subscribe to our newsletter and never miss an
          <span className="text-[#ff2a70]"> Event</span>
        </p>
      </div>

      <form className="max-w-3xl pt-12 flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-[516px] h-10 p-6 mr-6 border-b-4 bg-transparent"
          type="text"
          placeholder="Enter Your Email"
          {...register("email", {
            required: "Please enter your email",
            pattern: mailValidation,
          })}
          onChange={() => {
            clearErrors();
            setSuccessMessage(null);
          }}
        />

        <PrimaryButton text="Subscribe" />

        <AnimatePresence>
          {errors.email && errors.email.type === "required" && (
            <Message error>{errors.email.message}</Message>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <Message error>Please write a valid email</Message>
          )}
          {errors.nightClubApi && (
            <Message error>{errors.nightClubApi.message}</Message>
          )}
          {successMessage && <p>{successMessage}</p>}
        </AnimatePresence>
      </form>
    </section>
  );
}
