import { Table } from "react-bootstrap";
import LecturerMap from "./LecturerMap";

const LecturerTable = ({ filteredLecture, languages, lecturers }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th>#</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>LANGUAGES</th>
        </tr>
      </thead>
      <tbody>
        {filteredLecture.length ? (
          <LecturerMap arr={filteredLecture} languages={languages} />
        ) : (
          <LecturerMap arr={lecturers} languages={languages} />
        )}
      </tbody>
    </Table>
  );
};

export default LecturerTable;
