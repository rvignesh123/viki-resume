import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var data = require("../data.json");
function DetailsTab() {
  return (
    <Container>
      <Row md={2}>
        {Object.keys(data.details).map((index) => (
          <div className="detail">
            <FontAwesomeIcon icon={data.details[index].icon} />{" "}
            {data.details[index].text}
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default DetailsTab;
