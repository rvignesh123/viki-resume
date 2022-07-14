import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import DetailsTab from "./components/DetailsTab";
import SkillsSection from "./components/SkillsSection";
import WorkDetails from "./components/WorkDetails";
import OtherDetails from "./components/OtherDetails";
import Credits from "./components/Credits";
var data = require("./data.json");
var interests = require("./interests.json");
var languages = require("./languages.json");
var workDetail = require("./work_details.json");

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

const brandIconList = Object.keys(BrandIcons)
  .filter((key) => key !== "fab" && key !== "prefix")
  .map((icon) => BrandIcons[icon]);

library.add(...iconList);
library.add(...brandIconList);

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row id="header">
          <Col>
            <Col id="name">{data.name}</Col>
            <Col id="position">{data.position}</Col>
          </Col>
          <Col id="image_holder">
            <div id="image_border">
              <div id="image"></div>
            </div>
          </Col>
          <Row id="tagline">{data.tagLine}</Row>
        </Row>
        <Row id="detail_tab">
          <DetailsTab data={data} />
        </Row>
        <Row id="skills_tab">
          <SkillsSection data={data} styleClass="sectionTitle" />
        </Row>
        <Row id="work_details_tab">
          <WorkDetails data={workDetail} />
        </Row>
        <Row className="section_container">
          <OtherDetails />
        </Row>
        <Row id="interest_tab">
          <SkillsSection
            data={interests}
            styleClass="sectionTitle sectionMinTitle"
          />
        </Row>
        <Row id="languages_tab">
          <SkillsSection
            data={languages}
            styleClass="sectionTitle sectionMinTitle"
          />
        </Row>
        <Row id="credits">
          <Credits data={languages} styleClass="sectionTitle sectionMinTitle" />
        </Row>
      </Container>
    </div>
  );
}

export default App;
