import { Container, Row, Col } from "react-bootstrap";
import styles from "./Features.module.scss";
import { useState } from "react";
import Image from "next/image";

function Features() {
  const [tabs, setTabs] = useState("Chatbot");
  const handleTabChange = (tabDetails) => setTabs(tabDetails);
  return (
    <section className={styles["all-features"]} id="features">
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles["features-content"]}>
              <h2>Review Features</h2>
              <p>
                Our AI-based features assist businesses in building robust customer relationships and generating two times
                as much revenue than average.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles["tablist"]}>
              <ul>
                <li
                  className={`${tabs === "Chatbot" && styles["tab-active"]}`}
                  onClick={() => handleTabChange("Chatbot")}
                >
                  <p>Chatbot</p>
                </li>
                <li
                  className={`${tabs === "Screen Sharing" && styles["tab-active"]
                    }`}
                  onClick={() => handleTabChange("Screen Sharing")}
                >
                  <p>Screen Sharing</p>
                </li>
                <li
                  className={`${tabs === "CRM" && styles["tab-active"]}`}
                  onClick={() => handleTabChange("CRM")}
                >
                  <p>CRM</p>
                </li>
                <li
                  className={`${tabs === "Visitor Tracking" && styles["tab-active"]
                    }`}
                  onClick={() => handleTabChange("Visitor Tracking")}
                >
                  <p>Visitor Tracking</p>
                </li>
                <li
                  className={`${tabs === "Team Chat" && styles["tab-active"]}`}
                  onClick={() => handleTabChange("Team Chat")}
                >
                  <p>Team Chat</p>
                </li>
                <li
                  className={`${tabs === "Customize Chatbox" && styles["tab-active"]
                    }`}
                  onClick={() => handleTabChange("Customize Chatbox")}
                >
                  <p>Customize Chatbox</p>
                </li>
                <li
                  className={`${tabs === "Whisper Messages" && styles["tab-active"]
                    }`}
                  onClick={() => handleTabChange("Whisper Messages")}
                >
                  <p>Whisper Messages</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={8}>
            <div className={styles["tab-content"]}>
              {tabs === "Chatbot" && (
                <div className={styles["tab-details"]}>
                  <Image
                    src={"/home/features/image-1.png"}
                    width={544}
                    height={301}
                    alt={"tab-1"}
                  />
                  <p>
                    Provide offline customer support via automate responses. Our
                    chatbots offer 24.7 support to your customers by
                    understanding queries and communicating transparently.
                  </p>
                </div>
              )}
              {tabs === "Screen Sharing" && (
                <div className={styles["tab-details"]}>
                  <Image
                    src={"/home/features/image-1.png"}
                    width={544}
                    height={301}
                    alt={"tab-1"}
                  />
                  <p>
                    Through the screen-sharing feature, you can track the screen
                    of your website visitors. It results in understanding buying
                    behaviors and capturing more leads.
                  </p>
                </div>
              )}
              {tabs === "CRM" && (
                <div className={styles["tab-details"]}>
                  <Image
                    src={"/home/features/image-1.png"}
                    width={544}
                    height={301}
                    alt={"tab-1"}
                  />
                  <p>
                    CRM simplifies the methods by which your company collects
                    money from customers and pays them. Businesses can pay and
                    conduct business without involving third-party.
                  </p>
                </div>
              )}
              {tabs === "Visitor Tracking" && (
                <div className={styles["tab-details"]}>
                  <Image
                    src={"/home/features/image-1.png"}
                    width={544}
                    height={301}
                    alt={"tab-1"}
                  />
                  <p>
                    Our visitor tracking tool lets you view and track record
                    your website’s traffic management and comprehend visitor
                    patterns. It leads to proactive customer communication.
                  </p>
                </div>
              )}
              {tabs === "Customize Chatbox" && (
                <div className={styles["tab-details"]}>
                  <Image
                    src={"/home/features/image-1.png"}
                    width={544}
                    height={301}
                    alt={"tab-1"}
                  />
                  <p>
                    SwiftSales allows you to customize your live chat box
                    according to your brand. Create your brand’s look and feel
                    by customizing the chat box's color, text, and design
                    shapes.
                  </p>
                </div>
              )}

              {tabs === "Team Chat" && (
                <div className={styles["tab-details"]}>
                  <Image
                    src={"/home/features/image-1.png"}
                    width={544}
                    height={301}
                    alt={"tab-1"}
                  />
                  <p>
                    This function facilitates effective teamwork, which
                    eventually increases productivity and improves project
                    management. It helps in assisting customers pro-actively.
                  </p>
                </div>
              )}
              {tabs === "Whisper Messages" && (
                <div className={styles["tab-details"]}>
                  <Image
                    src={"/home/features/image-1.png"}
                    width={544}
                    height={301}
                    alt={"tab-1"}
                  />
                  <p>
                    Stay proactive and prepared before your customer throws a
                    query. Whisper messages let you know what your customers are
                    typing, even before they hit the send button.
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
