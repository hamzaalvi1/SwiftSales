import styles from "./ContactForm.module.scss";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { toast } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Message: "",
  });
  const handleChange = (evt) =>
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { Name, Phone, Email, Message } = formData;
    if (!Name || !Phone || !Email || !Message) {
      toast.error("Please filled all form fields", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    let data = JSON.stringify(formData);
    try {
      const response = await fetch(
        "https://api.swiftchat.io/auth/landing-page/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        }
      );
      const result = await response.json();
      toast.warn(result?.Message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFormData({
        Name: "",
        Phone: "",
        Email: "",
        Message: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className={styles["contact-form"]} id="contact-us">
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <div className={styles["contact-content"]}>
              <h2>We Are Here to Assist You </h2>
              <p>Got some questions? Share it now! </p>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={formData.Name}
                    name="Name"
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.Email}
                    name="Email"
                    onChange={handleChange}
                  />
                  <Input
                    type="number"
                    placeholder="Phone Number"
                    value={formData.Phone}
                    name="Phone"
                    onChange={handleChange}
                  />
                </Col>
                <Col md={6}>
                  <TextArea
                    placeholder="Type Your Message"
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                  />
                </Col>
                <Col md={12}>
                  <Button
                    title="SUBMIT SIGNUP FORM"
                    type="submit"
                    classes={styles["submit-btn"]}
                  />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
