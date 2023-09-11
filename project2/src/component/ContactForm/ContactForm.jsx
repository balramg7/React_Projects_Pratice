import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Button from "../Button/Button";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (event) =>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<BiSolidMessageDetail fonSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoIosCall fonSize="24px" />} />
        </div>
        <Button
          sec_btn={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fonSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" rows={8} />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Button  text="SUBMIT BUTTON"/>
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/main_pic.svg" alt="Main Pic" />
      </div>
    </section>
  );
};

export default ContactForm;
