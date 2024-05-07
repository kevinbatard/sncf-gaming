"use client";
import styles from "../../style/login.module.css";
import Icon from "@mdi/react";
import { mdilLogin } from "@mdi/light-js";
import { useState } from "react";

export default function Login() {
    const [colorIcon, setColorIcon] = useState("#82be00");

    return (
        <>
            <div
                className={`${styles.iconCircle} ms-auto mx-4`}
                onMouseEnter={() => setColorIcon("#1E173C")}
                onMouseLeave={() => setColorIcon("#82be00")}
            >
                <Icon
                    className="exclude"
                    path={mdilLogin}
                    size={1.2}
                    color={colorIcon}
                />
            </div>
        </>
    );
}
