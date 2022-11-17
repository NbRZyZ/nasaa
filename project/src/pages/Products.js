import { Cord } from "../components/Cord";
import { useState, useEffect , useContext } from "react";
import axios from "axios";
import styles from "../styles/pages/products.module.css";
import { Container, Spinner } from "react-bootstrap";
import { ThemeContext } from "../components/Themeprovider";

const Products = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const baseUrl = "https://dummyapi.io/data/v1/";

  useEffect(() => {
    axios
      .get(baseUrl + "post", {
        headers: {
          "app-id": "636f2fc1e8d0ff1f253fc54c",
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <Container>
        <div>
          <div>Blogs</div>
        </div>
        <div className={styles.container}>
          {!data && <Spinner/>}
          {data && data.data.map((item) => <Cord {...item} />)}
        </div>
      </Container>
    </div>
  );
};

export default Products;
