import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Headline from "../components/Headline";
import Message from "../components/Message";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = async (form) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/contact_messages`,
        form
      );
      if (res.status === 201) {
        setSuccessMessage(`Your comment has been sent!`);
        setTimeout(() => setSuccessMessage(null), 3000);
      }
    } catch {
      setError("nightClubApi", { message: "Something went wrong" });
    }
  };

  return (
    <section>
      <Headline headline="contact us" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <input
          className="border-2 p-2 bg-transparent md:h-20"
          type="text"
          placeholder="Your Name"
          errorMessage={errors.name?.message}
          onChange={() => clearErrors()}
          {...register("name", {
            required: "name is required",
          })}
        />
        <input
          className="border-2 p-2 bg-transparent md:h-20"
          placeholder="Your Email"
          errorMessage={errors.email?.message}
          onChange={() => clearErrors()}
          {...register("email", {
            required: "email is required",
          })}
        />
        <input
          className="border-2 p-2 bg-transparent md:h-20"
          placeholder="Your Website"
          errorMessage={errors.email?.message}
          onChange={() => clearErrors()}
          {...register("website", {
            required: "website is required",
          })}
        />
        <textarea
          rows="10"
          className="border-2 p-2 bg-transparent"
          placeholder="Comment"
          errorMessage={errors.email?.message}
          onChange={() => clearErrors()}
          {...register("comment", {
            required: "comment is required",
          })}
        />
        <AnimatePresence>
          {errors.nightClubApi && (
            <Message error>{errors.nightClubApi.message}</Message>
          )}
          {successMessage && (
            <div className="text-[#ff2a70] ">{successMessage}</div>
          )}
        </AnimatePresence>
        <button
          className="col-start-2 col-end-3 place-self-end p{t/b}-{10px} pl-8 pr-8 bg-transparent border-white uppercase border-y-4"
          type="submit"
          onClick={() => clearErrors()}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
