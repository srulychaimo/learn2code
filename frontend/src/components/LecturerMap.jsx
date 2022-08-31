const LecturerMap = ({ arr, languages }) => {
  return (
    <>
      {arr.map((lecturer, index) => (
        <tr key={lecturer.id}>
          <td>{index + 1}</td>
          <td>{lecturer.name}</td>
          <td>{lecturer.email}</td>
          <td>
            <ul>
              {lecturer.languages.map((language) => {
                const languageNames = languages.filter(
                  (lang) => lang.id === language
                );
                return languageNames.map((name) => (
                  <li key={name.id}>{name.name}</li>
                ));
              })}
            </ul>
          </td>
        </tr>
      ))}
    </>
  );
};

export default LecturerMap;
