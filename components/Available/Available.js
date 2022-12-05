import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import Config from "../../config"

import styles from "./Available.module.scss"

function Available() {
  return (
    <section className={styles["available"]}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={"/home/available/image-left.png"} width={476} height={565} alt={"mobile"} />
          </Col>
          <Col md={6}>
            <div className={styles["available-content"]}>
              <h2>
                Be There Where Your Customers Are
              </h2>
              <p>
                Our mobile application keeps your customer support at your fingertips. Download the SwiftSales app and take your customer support with you wherever you want.
              </p>
              <div className={styles["app-btns"]}>
                <Link href={Config.APP_STORE_URL} target="_blank">
                  <Image src="/home/available/app-store.png" width={177} height={53} alt="app-play" />
                </Link>
                <Link href={Config.PLAY_STORE_URL} target="_blank">
                  <Image src="/home/available/google-play.png" width={177} height={53} alt="google-play" />
                </Link>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Available