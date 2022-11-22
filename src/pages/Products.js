import { Cord } from "../components/Cord";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "../styles/pages/products.module.css";
import { Container, Spinner ,Button} from "react-bootstrap";
import { ThemeContext } from "../components/Themeprovider";

const baseUrl = "https://dummyapi.io/data/v1/";

const Products = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [pos, setPos] = useState(0);
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(0);

  const goRight = () => setPos((prev) => prev + 1);
  const goLeft = () => setPos((prev) => prev - 1);

  const nextPage = () => {
    setData(null);
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setData(null);
    setPage((prev) => {
      if (prev > 0) return prev - 1;
    });
  };

  useEffect(() => {
    axios
      .get(baseUrl + `post?limit=${limit}&page=${page}`, {
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
  }, [page,limit]);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <Container>
        <div>
          <div>Blogs</div>
        </div>
        <div className={styles.container}>
          {!data && <Spinner />}
          {data && data.data.map((item) => <Cord {...item} />)}
        </div>
        <Button onClick={prevPage}>prev</Button>
        <Button onClick={nextPage}>next</Button>
      </Container>
    </div>
  );
};

export default Products;
