import React from "react";
import Link from "next/link";
import { BsCheck2 } from "react-icons/bs"

import { Button } from "../Button";
import { Ribbon } from "../Ribbon";
import Config from "../../config";

import styles from "./PricingBox.module.scss";


const PricingBox = ({ title, list = [], price, ribbon = false }) => {

    return (
        <div className={styles.boxWrapper}>
            {ribbon && <Ribbon />}
            <h3>{title}</h3>
            <p>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>{price}</span>
                <span className={styles.floatNumber}>/Mo</span>
            </p>
            <ul className={styles.pricingFeatures}>
                {list && list.length &&
                    list.map((item, key) => (
                        <li key={key}><BsCheck2 />{item}</li>
                    ))
                }
            </ul>
            <Link href={Config.WEB_SIGNUP_URL} target="_blank">
                <Button title="Sign Up" classes={styles.priceBtn} />
            </Link>
        </div>
    )
}

export default PricingBox;