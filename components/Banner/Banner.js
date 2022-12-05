import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import { Button } from "../Button";
import Config from "../../config";

import styles from "./Banner.module.scss";

function Banner(props) {
  const { bannerClasses } = props;
  return (
    <section
      className={`${styles["main-banner"]} ${bannerClasses ? bannerClasses : ""
        }`}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className={`${styles["banner-content"]}`}>
              <h1>SwiftSales Accelerates 2x Revenue</h1>
              <p>
                SwiftSales is an AI chat builder that assists you in automating
                live chat conversations and provides advanced CRM solutions.
                Integrate real-time customer support to assist customers at the
                speed of light and generate 2x revenue.
              </p>
              <Link href={Config.WEB_SIGNUP_URL} target="_blank">
                <Button title="SIGN UP FOR FREE" classes={styles["banner-btn"]} />
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles["animated-images"]}>
              <Image
                src="/home/banner/img-1.png"
                className={styles["img-1"]}
                width={312}
                height={151}
                alt="img-1"
              />
              <Image
                src="/home/banner/img-2.png"
                className={styles["img-2"]}
                width={309}
                height={141}
                alt="img-2"
              />
              <Image
                src="/home/banner/img-3.png"
                className={styles["img-3"]}
                width={186}
                height={206}
                alt="img-3"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
