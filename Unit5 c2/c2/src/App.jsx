import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  return (
    <div className="App">
      <button className="togglebtn">ADD</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}

      {/* <AddStudent></AddStudent> */}
      <ShowStudents></ShowStudents>
    </div>
  );
}

export default App;