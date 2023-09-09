import React from "react";
import styles from "./ContactForm.module.css";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Button from "../Button/Button";
const ContactForm = () => {
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
        <form>
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
            <textarea type="text" />
          </div>
        </form>
      </div>

      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
