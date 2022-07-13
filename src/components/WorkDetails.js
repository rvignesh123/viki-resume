import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var data = require("../work_details.json");
const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#262626",
  borderDotColor: "#d0cdc4",
  titleColor: "#405b73",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};
function WorkDetails() {
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
  return (
    <Row>
      <Row className="sectionTitle">{data.title}</Row>
      <Timeline lineColor={"#ddd"}>
        {Object.keys(data.timeline).map((index) => (
          <TimelineItem
            key={"00" + (index + 1)}
            dateText={data.timeline[index].time}
            style={{ color: data.timeline[index].color }}
          >
            <h3>{data.timeline[index].role}</h3>
            <h5>
              {data.timeline[index].company}
              <a className="company_url" href={data.timeline[index].url}>
                <FontAwesomeIcon icon="fa-link" />
              </a>
            </h5>
            <p>{data.timeline[index].location}</p>
            <div className="activity-container">
              <div className="activity">
                <ul>
                  {Object.keys(data.timeline[index].items).map((i) =>
                    listItem(i, index)
                  )}
                </ul>
              </div>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </Row>
  );
}

export default WorkDetails;
