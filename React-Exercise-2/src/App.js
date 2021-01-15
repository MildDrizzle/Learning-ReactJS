import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";

function App() {
  //State for main Data
  const [data, setData] = useState([]);
  //State for Inputs
  const [inputData, setInputData] = useState({
    firstInput: "",
    secondInput: "",
  });
  //State for update/add button
  const [currentOperation, setCurrentOperation] = useState({
    operation: "add",
  });

  //Input onChange method
  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  //Method for adding data
  const handleDataAdd = (event) => {
    event.preventDefault();
    const input1 = inputData.firstInput;
    const input2 = inputData.secondInput;
    //Add data only if both inputs have values
    if (input1 && input2) {
      setData([...data, { id: uuidv4(), data1: input1, data2: input2 }]);
      setInputData({ firstInput: "", secondInput: "" });
    }
  };

  //Method for deleteing data
  const handleDelete = (id) => {
    //if the data which is to be delete is in update mode then clear the data update inputs and then delete data
    if (id === currentOperation.id) {
      setCurrentOperation({ operation: "add" });
      setInputData({ firstInput: "", secondInput: "" });
    }
    const newData = data.filter((dt) => dt.id !== id);
    setData([...newData]);
  };

  //Method for changing into update mode
  const handleUpdate = (id) => {
    const oldData = data.filter((dt) => dt.id === id);
    setInputData({
      firstInput: oldData[0].data1,
      secondInput: oldData[0].data2,
    });
    setCurrentOperation({ id, operation: "update" });
  };

  //Method for updating the data
  const setUpdatedData = () => {
    const input1 = inputData.firstInput;
    const input2 = inputData.secondInput;
    //Only update if the input have values
    if (input1 && input2) {
      const index = data.findIndex((el) => el.id === currentOperation.id);
      let newData = [...data];
      newData[index].data1 = input1;
      newData[index].data2 = input2;
      setData([...newData]);
      setCurrentOperation({ operation: "add" });
      setInputData({ firstInput: "", secondInput: "" });
    }
  };

  return (
    <div className="app">
      <form>
        <table>
          <TableHeader
            inputData={inputData}
            handleChange={handleChange}
            currentOperation={currentOperation}
            handleDataAdd={handleDataAdd}
            setUpdatedData={setUpdatedData}
          />
          {/*TableBody has a Data component for all the data rows*/}
          <TableBody data={data} Delete={handleDelete} update={handleUpdate} />
        </table>
      </form>
    </div>
  );
}

export default App;
