import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/order.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "500px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Food Ordering"
                description="Food order site created with Next Js, Tailwind, Formik, Yup and Data Grid to build this entire application. This application consists of multiple pages like FAQ Page, Form Page,Login Page,Order Page,Menu Page etc."
                ghLink="https://food-ordering-coral.vercel.app/"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist