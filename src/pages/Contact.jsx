"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logoblack from "../Images/blackportlogo.png"
import linkedin from "../Images/Linkedinblack.png"
import email from "../Images/EmailBlack.png"
import facebook from "../Images/FacebookBlack.png"

function Header(){ 

  return (
  <header className={styles.newheaderdiv}>

  <img src={logoblack} alt="Logo" className={styles.logoimg} />

  <nav className={styles.navdiv}>

     <Link to="/" className={styles.navLinks}>Projects</Link>

     <Link to="/about" className={styles.navLinks}>About</Link>

     <Link to="/contact" className={styles.navLinks}>Contact</Link>

  </nav>

  <Link to="https://www.facebook.com/seby.skittles">
    <img src={facebook} alt="Email" className={styles.facebookimg} />
  </Link>

  <Link to="https://www.linkedin.com/in/sebastian-quiroz-malca-alva-843275205/">
    <img src={linkedin} alt="LinkedIn" className={styles.linkedinimg2} />
  </Link>

</header>
)

}

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.div}>
        <div className={styles.div2}>
          <div className={styles.headerdiv}>
            <Header />
          </div>
          <main>
            <h1 className={styles.contactMeforBusinessInquiries}>
              Contact Me for Business Inquiries
            </h1>
            <ContactForm />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formdiv}>
      <div className={styles.div5}>
        {/* First & Last Name */}
        <div className={styles.div6}>
          <div className={styles.column}>
            <label htmlFor="firstName" className={styles.firstName}>First Name</label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className={styles.div8}
            />
            {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
          </div>

          <div className={styles.column}>
            <label htmlFor="lastName" className={styles.lastName}>Last Name</label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              className={styles.div10}
            />
            {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email & Phone */}
        <div className={styles.div6}>
          <div className={styles.column}>
            <label htmlFor="email" className={styles.email}>Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className={styles.div11}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>

          <div className={styles.column}>
            <label htmlFor="phone" className={styles.phone}>Phone</label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[+]?[0-9\s\-().]{7,15}$/,
                  message: "Invalid phone format",
                },
              })}
              className={styles.div12} 
            />
            {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
          </div>
        </div>

        {/* Message Field */}
        <div className={styles.columnFull}>
          <label htmlFor="message" className={styles.message}>Message</label>
          <textarea
            id="message"
            {...register("message", { required: "Message cannot be empty" })}
            className={styles.div13}
          />
          {errors.message && <p className={styles.error}>{errors.message.message}</p>}
        </div>

        <button type="submit" className={styles.submit}>Submit</button>
      </div>
    </form>
  );
}


export default Contact;
