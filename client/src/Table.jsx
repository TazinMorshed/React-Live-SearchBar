/* eslint-disable react/prop-types */
const Table = ({ data }) => {
  return (
    <>
      <table>
        <tbody className="list">
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {data.map((item) => (
            <tr className="listItem" key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
