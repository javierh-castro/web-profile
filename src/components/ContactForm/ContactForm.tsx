"use client";

// import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import "./ContactForm.css";
import useTranslation from "@/src/hooks/use-translation";
function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert(t("contact.successfully"));
      } else {
        alert(t("contact.failed"));
      }
    } catch (error) {
      alert(t("contact.error"));
    }
  };

  return (
    <section id="contact" className="contact">
      <h1>{t("contact.title")}</h1>
      <div className="format_contact">
        <form
          className="contact_form"
          name="contactform"
          onSubmit={handleSubmit}
        >
          <p className="input_field">
            <label htmlFor="name">{t("contact.name")}</label>
            <input
              type="text"
              id="name"
              name="subject"
              onChange={handleChange}
              placeholder={t("contact.userInput.name")}
              value={formData.subject}
              required
            />
          </p>
          <p className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder={t("contact.userInput.email")}
              required
            />
          </p>
          <p className="input-field">
            <label htmlFor="message">{t("contact.message")}</label>
            <textarea
              id="message"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder={t("contact.userInput.message")}
              required
            />
          </p>
          <p>
            <button className="button_form" type="submit">
              {t("contact.buttonSend")}
            </button>
          </p>
        </form>
        <article className="description">
          <h4>{t("contact.description.address")}</h4>
          <p>Mendoza, Argentina</p>
          <h4>EMAIL:</h4>
          <p>javiercastrohernan@gmail.com</p>
          <p>{t("contact.description.presentation")}</p>
        </article>
      </div>
    </section>
  );
}

export default ContactForm;
