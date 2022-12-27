// import emailjs from "@emailjs/browser";

// import React, { useRef } from "react";

// export default function Email() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_rtr70qk",
//         "template_wh8nnys",
//         form.current,
//         "lLb0ITnld6H0faqsW"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" /> 
//       {/* <label>file upload</label>
//       <input type="email" name="my_file" /> */}
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }
