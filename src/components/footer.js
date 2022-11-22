import styles from "../styles/components/Footer.module.css";
import {Container} from "react-bootstrap"



export const Footer = () =>{
    return(
        <div className={styles.container}>
            <Container>
            <div className={styles.flexContainer}>
                <div>
                    {new Array(6).fill(0).map(() =>(
                        <p>Facebook</p>
                    ) )}
                </div>
                <div>
                {new Array(6).fill(0).map(() =>(
                    <p>Youtube</p>
                ) )}
                </div>
                <div>
                {new Array(6).fill(0).map(() =>(
                    <p>Facebook</p>
                ) )}
                </div>
                <div>
                {new Array(6).fill(0).map(() =>(
                    <p>Facebook</p>
                ) )}
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

