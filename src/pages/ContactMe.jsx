import { React } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/ContactMe.css";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const schema = yup.object().shape({
    name: yup.string().required("Missing name"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().required("No message found"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        "#contact-form-id",
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          document.getElementById("contact-form-id").reset();
          console.log("Message Sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-wrapper">
      <form
        className="contact-form"
        onSubmit={handleSubmit(sendEmail)}
        id="contact-form-id"
      >
        <h1>Contact Me</h1>
        <input type="text" placeholder="Name" {...register("name")} id="name" />
        <span>{errors.name?.message}</span>
        <input
          type="text"
          placeholder="Email"
          {...register("email")}
          id="email"
        />
        <span>{errors.email?.message}</span>
        <textarea
          {...register("message")}
          id=""
          cols="30"
          rows="7"
          placeholder="Message"
        ></textarea>
        <span>{errors.message?.message}</span>
        <button>
          <input type="submit" className="submit-btn" />
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
