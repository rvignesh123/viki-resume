import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function SkillsSection({ data, styleClass }) {
  return (
    <Container>
      <Row className={styleClass}>{data.skillTitle}</Row>
      <Row>
        {Object.keys(data.skills).map((index) => (
          <div
            className="skill"
            style={{
              background:
                "linear-gradient(90deg, " +
                data.skills[index].fill_color +
                " " +
                data.skills[index].percentage +
                "%, " +
                data.skills[index].empty_color +
                " 50%)",
              color: data.skills[index].font_color,
              fontSize: data.skills[index].font_size,
            }}
          >
            {data.skills[index].icon !== "" ? (
              <>
                <FontAwesomeIcon icon={data.skills[index].icon} />
                <span>&nbsp;</span>
              </>
            ) : (
              <></>
            )}

            {data.skills[index].skill}
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default SkillsSection;
