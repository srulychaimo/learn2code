import { Col, Form, Row } from "react-bootstrap";

const SelectLanguage = ({ languages, onChangeHandler }) => {
  return (
    <Row className="my-5">
      <Form.Label>To see lecturers for each language please select:</Form.Label>
      <Col md={6} lg={4}>
        <Form.Select onChange={onChangeHandler}>
          <option value="">Select Language</option>
          {languages.map((language) => (
            <option key={language.id} value={language.id}>
              {language.name}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  );
};

export default SelectLanguage;
