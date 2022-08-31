import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SelectLanguage from "../components/SelectLanguage";
import LecturerTable from "../components/LecturerTable";
import { httpService } from "../service/httpService";

const HomeScreen = () => {
  const [lecturers, setLecturers] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [filteredLecture, setFilteredLecture] = useState([]);

  useEffect(() => {
    const getLectures = async () => {
      const { data: lecturersData } = await httpService.get("/lecturers");
      const { data: languagesData } = await httpService.get("/languages");

      setLecturers(lecturersData);
      setLanguages(languagesData);
    };
    getLectures();
  }, []);

  const onChangeHandler = ({ target: { value } }) => {
    setFilteredLecture(
      lecturers.filter((lec) =>
        lec.languages.find((lang) => lang === Number(value))
      )
    );
  };

  return (
    <Container className="flex-fill">
      <SelectLanguage languages={languages} onChangeHandler={onChangeHandler} />
      <LecturerTable
        filteredLecture={filteredLecture}
        languages={languages}
        lecturers={lecturers}
      />
    </Container>
  );
};

export default HomeScreen;
