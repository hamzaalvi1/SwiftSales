import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Banner } from "../components/Banner";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../components/Button";
import { Features } from "../components/Features";
import { Available } from "../components/Available"
import { ContactForm } from "../components/ContactForm";
import { Pricing } from "../components/Pricing";
import Config from "../config";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main>
      <Head>
        <title>
        SwiftSales: Free Best Live Chat App | Software for Customer Support
        </title>
        {/* Open Graph Tags */}
        <meta property="og:title" content="SwiftSales" />
        <meta property="og:description" content="SwiftSales" />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGKQWM15Dnfz8P95BnachQY_W4OVda31jIERLfWxnzCYVLT5t&s"
        />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="SwiftSales is a free best live chat app for websites to provide customer support online and offline from your desktop or mobile devices remotely."
        />
        {/* Favicons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner bannerClasses={styles["home-banner"]} />
      <section className={styles["keypoints"]}>
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <div className={styles["keypoints-content"]}>
                <h2>Key Points</h2>
              </div>

              <div className={styles["keypoints-main"]}>
                <div className={styles["keypoint-left"]}>
                  <h4>
                    Slash Your Response Time <br /> within Minutes
                  </h4>
                  <ul>
                    <li>
                      <span>
                        <Image
                          src={"/home/keypoints/icon.png"}
                          alt="icon"
                          height={23}
                          width={23}
                        />
                      </span>
                      Agent support
                    </li>
                    <li>
                      <span>
                        <Image
                          src={"/home/keypoints/icon.png"}
                          alt="icon"
                          height={23}
                          width={23}
                        />
                      </span>
                      Automated conversation
                    </li>
                    <li>
                      <span>
                        <Image
                          src={"/home/keypoints/icon.png"}
                          alt="icon"
                          height={23}
                          width={23}
                        />
                      </span>
                      Maintained database
                    </li>
                    <li>
                      <span>
                        <Image
                          src={"/home/keypoints/icon.png"}
                          alt="icon"
                          height={23}
                          width={23}
                        />
                      </span>
                      Audio & video call
                    </li>
                  </ul>
                </div>

                <div className={styles["keypoint-center"]}>
                  <Image
                    src={"/home/keypoints/bulb.png"}
                    width={95}
                    height={90}
                    alt="bulb"
                    className={styles["bulb"]}
                  />
                  <Image
                    src={"/home/keypoints/graph.png"}
                    width={59}
                    height={59}
                    alt="graph"
                    className={styles["graph"]}
                  />
                  <Image
                    src={"/home/keypoints/dollar-sign.png"}
                    width={55}
                    height={55}
                    alt="dollar-sign"
                    className={styles["dollar-sign"]}
                  />
                  <Image
                    src={"/home/keypoints/cube.png"}
                    width={37}
                    height={33}
                    alt="cube"
                    className={styles["cube"]}
                  />

                  <Image
                    src={"/home/keypoints/mobile.png"}
                    alt="mobile"
                    height={593}
                    width={351}
                    className={styles["mobile"]}
                  />
                </div>

                <div className={styles["keypoint-left"]}>
                  <h4>Turn More Visitors into Paying Customers</h4>
                  <ul>
                    <li>
                      <span>
                        <Image
                          src={"/home/keypoints/icon.png"}
                          alt="icon"
                          height={23}
                          width={23}
                        />
                      </span>
                      Improved lead capturing
                    </li>
                    <li>
                      <span>
                        <Image
                          src={"/home/keypoints/icon.png"}
                          alt="icon"
                          height={23}
                          width={23}
                        />
                      </span>
                      Less abandoned carts
                    </li>
                    <li>
                      <span>
                        <Image
                          src={"/home/keypoints/icon.png"}
                          alt="icon"
                          height={23}
                          width={23}
                        />
                      </span>
                      Track buying behavior
                    </li>
                    <li>
                      <span>
                        <Image
                          src={"/home/keypoints/icon.png"}
                          alt="icon"
                          height={23}
                          width={23}
                        />
                      </span>
                      Better customer engagement
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className={styles["trustby"]}>
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <div className={styles["trusted-content"]}>
                <h2>Clientele</h2>
                <p>
                  Take a quick glimpse
                </p>
              </div>

              <div className={styles["trusted-partners"]}>
                <Image
                  src={"/home/trustedby/appverticals.png"}
                  width={144}
                  height={47}
                  alt="p-1"
                />
                <Image
                  src={"/home/trustedby/digemp.png"}
                  width={144}
                  height={47}
                  alt="p-4"
                />
              </div>
              <div className={styles["trusted-bottom"]}>
                <h4>Start your free trial today! </h4>
                <p>Subscribe for free, and boost 2x sales!</p>
                <Link href={Config.WEB_SIGNUP_URL} target="_blank">
                  <Button title="Signup Now" classes={styles["trusted-btn"]} />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Pricing />
      <Features />

      <Available />
      <ContactForm />
    </main>
  );
}
