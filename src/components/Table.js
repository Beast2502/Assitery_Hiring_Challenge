export default function StyledTable(props) {

  const finalData = props.data.map((data) => {
    if (data.vaccination_date <= props.currentDate) {
      return (<tr className="vaccinated" key={data.person_id}>
        <td>{data.person_id}</td>
        <td>{data.person_name}</td>
        <td>Vaccine Done</td>
      </tr>
      )
    }

    else {
      return (<tr className="pending" key={data.person_id}>
        <td>{data.person_id}</td>
        <td>{data.person_name}</td>
        <td>Vaccine Pending</td>
      </tr>)

    }
  })





  return (
    <table>
      <thead>
        <tr style={{ backgroundColor: "#737373", color: "white" }}>
          <th>Name</th>
          <th>Vaccination Date</th>
          <th>Vaccination Status</th>
        </tr>
      </thead>
      <tbody>
        {finalData}
      </tbody>
    </table>
  );
}
