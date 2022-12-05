import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {PricingBox} from "../PricingBox";
import styles from "./Pricing.module.scss"

const Pricing = () => {

    const List1 = [
        'Single Website',
        '3 Agents Support',
        '100,000 Monthly Unique Visitors',
        '2,000 Contacts'
    ]
    const List2 = [
        '3 Websites',
        '10 Agents Support',
        '500,000 Monthly Unique Visitors',
        '20,000 Contacts'
    ]
    const List3 = [
        '5 Websites',
        '20 Agents Support',
        '10,00,000 Monthly Unique Visitors',
        '50,000 Contacts'
    ]
 
    return (
        <div className={styles.contentWrapper} id="pricing"> 
            <Container>
                <Row>
                    <Col md={12} lg={12} sm={12}>
                        <div className={styles.content}>
                            <h2>Pricing Plan</h2>
                        </div>
                        <div className={styles.pricingWrapper}>
                            <Row>
                                <Col md={4} lg={4} sm={12}>
                                    <PricingBox title="Personal" price="29" list={List1} ribbon={true} />
                                </Col>
                                <Col md={4} lg={4} sm={12}>
                                    <PricingBox title="Business" price="59" list={List2} />
                                </Col>
                                <Col md={4} lg={4} sm={12}>
                                    <PricingBox title="Enterprise" price="99" list={List3} />
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Pricing;