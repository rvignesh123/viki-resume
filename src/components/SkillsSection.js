import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
var data = require("../data.json");
function SkillsSection() {
  return (
    <Container>
      <Row className="sectionTitle">{data.skillTitle}</Row>
      <Row>
        {Object.keys(data.skills).map((index) => (
          <div
            className="skill"
            style={{
              background:
                "linear-gradient(90deg, #7a808b " +
                data.skills[index].percentage +
                "%, #bdc0c6 50%)",
            }}
          >
            {data.skills[index].skill}
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default SkillsSection;
