import BreadCrumb from "../components/BreadCrumb";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  // const listRefs = useRef([]);

  // useEffect(() => {
  //   AOS.init({ duration: 1400 });
  // }, []);

  // useEffect(() => {
  //   if (listRefs.current) {""
  //   }
  //   const observers = [];

  //   listRefs.current.forEach((listRef) => {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const listItems =
  //             listRef.current.querySelectorAll(".list-group-item");
  //           listItems.forEach((item) => {
  //             item.classList.add("list-item-animation");
  //           });
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     });

  //     if (listRef.current) {
  //       observer.observe(listRef.current);
  //     }
  //     observers.push(observer);
  //   });
  // }, []);

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  // Event handlers for input focus
  const handleFocus = (field) => {
    setFocused((prevFocused) => ({ ...prevFocused, [field]: true }));
  };

  const handleBlur = (field) => {
    if (!field.target.value) {
      setFocused((prevFocused) => ({ ...prevFocused, [field]: false }));
    }
  };

  return (
    <>
      <div className="contact">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              "Genomed Pharmaceuticals offers cutting-edge treatments, backed by
              rigorous research and quality assurance, ensuring optimal patient
              care and outcomes."
            </p>
            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;
                <p>Genomedpharma@.com</p>
              </div>
              <div className="information">
                <i className="fas fa-phone"></i>&nbsp;&nbsp;
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.611.611 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.618.618 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1"
                    />
                  </svg>
                </Link>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
                    />
                  </svg>{" "}
                </Link>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
                    />
                    <path
                      fill="currentColor"
                      d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
                    />
                  </svg>
                </Link>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25" 
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.574 1.767a1.316 1.316 0 0 1-1.287 1.326A1.346 1.346 0 0 1 .99 1.767A1.326 1.326 0 0 1 2.287.5a1.316 1.316 0 0 1 1.287 1.267M1.129 5.449c0-.762.485-.643 1.158-.643c.673 0 1.148-.119 1.148.643v7.424c0 .772-.485.614-1.148.614c-.663 0-1.158.158-1.158-.614zm4.306.001c0-.426.158-.585.405-.634c.248-.05 1.099 0 1.396 0c.297 0 .416.485.406.851a2.485 2.485 0 0 1 2.217-.99a2.97 2.97 0 0 1 3.148 3.098v5.068c0 .772-.475.614-1.149.614c-.673 0-1.148.158-1.148-.614V8.884A1.425 1.425 0 0 0 9.206 7.34A1.435 1.435 0 0 0 7.74 8.914v3.959c0 .772-.485.614-1.158.614c-.673 0-1.148.158-1.148-.614V5.449Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            {/* Form */}
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              {/* Username Input */}
              <div className={`input-container ${focused.name ? "focus" : ""}`}>
                <input
                  type="text"
                  name="name"
                  className="input"
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              {/* Email Input */}
              <div
                className={`input-container ${focused.email ? "focus" : ""}`}
              >
                <input
                  type="email"
                  name="email"
                  className="input"
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              {/* Phone Input */}
              <div
                className={`input-container ${focused.phone ? "focus" : ""}`}
              >
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  onFocus={() => handleFocus("phone")}
                  onBlur={() => handleBlur("phone")}
                />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              {/* Message Input */}
              <div
                className={`input-container textarea ${
                  focused.message ? "focus" : ""
                }`}
              >
                <textarea
                  name="message"
                  className="input"
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                ></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              {/* Submit Button */}
              <input type="submit" value="Send" className="btn-send" />
            </form>
          </div>
        </div>
      </div>   
    </>
  );
}

export default Contact;
