import React from "react";
// import { Linking } from 'react-native'

// import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [errorMessage, setErrorMessage] = useState("");
  // const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     setFormState({ [e.target.name]: e.target.value });
  //     console.log("Form", formState);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }
  // };

  return (
    <section id="contact-section">
      <div>
        <a href="https://www.linkedin.com/in/jeremy-cornwall-a9698448/">My Linkedin</a>
        <br>
        </br>
       <a href="cornwall.jeremy@gmail.com">Email</a>
       <br>
       </br>
       <a href="https://github.com/cornwalljeremy">GitHub</a>
      </div>
    </section>
  );
}

export default ContactForm;
