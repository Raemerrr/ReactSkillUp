import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./loginForm.css";

const LoginForm = () => {
  return (
    <section className="loginForm">
      <Header />
      <button>Google</button><br />
      <button>Github</button>
      <Footer />
    </section>
  );
};

export default LoginForm;
