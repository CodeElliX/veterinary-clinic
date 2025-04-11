"use client";
import { useEffect, useState } from 'react';
import styles from './header.module.css';

const Header = () => {
    const [bottomFixation, setBottomFixation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setBottomFixation(true);
            } else {
                setBottomFixation(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <>
            <div className={styles.header__top}></div>
            <div className={`${styles.header__bottom} ${bottomFixation ? styles.header__bottom_fixed : ""}`}></div>
        </>
    )
}

export default Header;