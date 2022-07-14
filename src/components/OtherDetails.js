import { Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var data = require("../other_details.json");

function OtherDetails() {
  const listItem = (itemIndex, timeIndex) => {
    const text = data.timeline[timeIndex].items[itemIndex];
    return (
      <>
        {text === "" ? (
          <>
            <br></br>
          </>
        ) : (
          <li>{text}</li>
        )}
      </>
    );
  };

  const listIcon = (itemIndex, timeIndex) => {
    const link = data.timeline[timeIndex].links[itemIndex];
    return (
      <a className="company_url" href={link.url}>
        <FontAwesomeIcon icon={link.icon} />
      </a>
    );
  };
  return (
    <Container className="section_detail" fluid>
      <Row className="sectionTitle">{data.title}</Row>
      {Object.keys(data.timeline).map((index) => (
        <Row>
          <h6>
            {data.timeline[index].title}
            {Object.keys(data.timeline[index].links).map((i) =>
              listIcon(i, index)
            )}
          </h6>
          <div className="activity-container">
            <div className="activity">
              <ul>
                {Object.keys(data.timeline[index].items).map((i) =>
                  listItem(i, index)
                )}
              </ul>
            </div>
          </div>
        </Row>
      ))}
    </Container>
  );
}

export default OtherDetails;
