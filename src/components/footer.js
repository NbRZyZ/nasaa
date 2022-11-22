import styles from "../styles/components/Footer.module.css";
import {Container} from "react-bootstrap"



export const Footer = () =>{
    return(
        <div className={styles.container}>
            <Container>
            <div className={styles.flexContainer}>
                <div>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                </div>
                <div>
                        <p>UI Design</p>
                        <p>UX Design</p>
                        <p>Prototyping</p>
                        <p>UI Design</p>
                        <p>UX Design</p>
                        <p>Prototyping</p>
                </div>
                <div>
                        <p>Figma</p>
                        <p>Customers</p>
                        <p>Why I Love Figma</p>
                        <p>Figma</p>
                        <p>Customers</p>
                        <p>Why I Love Figma</p>
                </div>
                <div>
                        <p>Community Resources Hub</p>
                        <p>Support</p>
                        <p>Education</p>
                        <p>Community Resources Hub</p>
                        <p>Support</p>
                        <p>Education</p>
                </div>
                <div>
                <h4>Subscribe to our newsletter</h4>
                <input placeholder="Email"></input>
                </div>
            </div>
            </Container>
        </div>
    )
}

