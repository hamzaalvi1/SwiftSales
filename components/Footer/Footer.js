
import Image from "next/image"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Container>
        <Row className="align-items-center">
          <Col md={3}>
            <Image src="/home/footer/f-logo.png" width={200} height={39} alt="f-logo" />
          </Col>
          <Col md={6}>
            <p>
              <a href="tel:+16468019992" target="_blank">+1 646-801-9992</a>
            </p>
            <p>
              Southlake, TX, United States, Texas
            </p>
            <p>
              <a href="mailto:support@swiftchat.io" target="_blank">support@swiftchat.io</a>
            </p>
            {/* <ul className={styles["footer-links"]}>
              <li>
                <Link href="#"> Privacy Policy</Link>
              </li>
              <li>
                <Link href="#"> Pricing</Link>
              </li>
              <li>
                <Link href="#"> Faqs</Link>
              </li>
              <li>
                <Link href="#"> Contact Us</Link>
              </li>
            </ul> */}
          </Col>
          <Col md={3}>
            <ul className={`${styles["footer-links"]} ${styles["social-links"]}`}>
              <li>
                <Link href="https://www.facebook.com/swiftchatio" target={"_blank"} ><Image src="/home/footer/facebook.png" width={8} height={15} alt="icons" /></Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/33457992" target={"_blank"} ><FaLinkedinIn /></Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/swiftchatio/" target={"_blank"} ><FaInstagram /></Link>
              </li>
              <li>
                <Link href="https://twitter.com/swiftchatio" target={"_blank"} ><Image src="/home/footer/twitter.png" width={18} height={15} alt="icons" /></Link>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer