import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import useMediaQuery from "../hooks/WindowSize";
import { ResponsiveMenu } from "../ResponsiveMenu";
import { Button } from "../Button";
import { movetoElement } from "../../utils/MoveIntoSection"
import Config from "../../config";

import styles from "./Header.module.scss";

function Header() {
  const matches = useMediaQuery("(max-width: 991px)");
  const pagesLink = [
    { name: "Feature", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    // { name: "FAQs", href: "#faqs" },
    { name: "Contact Us", href: "#contact-us" },
  ];
  return (
    <header className={styles["header"]}>
      <Container>
        <Row className="align-items-center">
          <Col md={3} xs={6}>
            <Link href={"/"}>
              <Image src="/logo.png" width={196} height={42} alt="logo" />
            </Link>
          </Col>
          <Col md={matches ? 9 : 6} xs={6}>
            {matches ? <ResponsiveMenu /> : <nav className={styles["menu"]}>
              <ul className={styles["menu-list"]}>
                {pagesLink.map(({ name, href }, idx) => {
                  return (
                    <li key={idx} className={styles["menu-item"]}>
                      <Link href={href} onClick={() => movetoElement(name)}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>}

          </Col>
          {
            matches ? null : <Col md={3}>

              <Link href={Config.WEB_LOGIN_URL} target="_blank">
                <Button
                  title="Login"
                  type="button"
                  classes={styles["header-btn"]}
                />
              </Link>
            </Col>
          }

        </Row>
      </Container>
    </header>
  );
}

export default Header;
