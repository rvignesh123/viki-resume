import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function Credits({ data, styleClass }) {
  return (
    <Container>
      <p class="credits">
        This document is made with{" "}
        <FontAwesomeIcon
          icon="fa-solid fa-heart"
          style={{ color: "#eb0f0f", fontSize: "16px" }}
        />{" "}
        using{" "}
        <a href="https://reactjs.org/">
          <FontAwesomeIcon
            icon="fa-brands fa-react"
            style={{ color: "#75bedd", fontSize: "16px" }}
          />
        </a>{" "}
        source at{" "}
        <a href="https://github.com/rvignesh123/viki-resume">
          <FontAwesomeIcon
            style={{ color: "black", fontSize: "16px" }}
            icon="fa-brands fa-github"
          />
        </a>
      </p>
    </Container>
  );
}

export default Credits;
