import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
const TableHeader = ({
  inputData,
  handleChange,
  currentOperation,
  handleDataAdd,
  setUpdatedData,
}) => {
  return (
    <thead>
      <tr>
        <td>
          <input
            className="input-data-add "
            name="firstInput"
            onChange={handleChange}
            value={inputData.firstInput}
            placeholder="First Name"
          />
        </td>
        <td>
          <input
            className="input-data-add "
            name="secondInput"
            onChange={handleChange}
            value={inputData.secondInput}
            placeholder="Second Name"
          />
        </td>
        <td colSpan={2}>
          {/* According to currentoperation state render add/update button */}
          {currentOperation.operation === "add" && (
            <button className="btn-add" type="button" onClick={handleDataAdd}>
              <FontAwesomeIcon icon={faPlus} /> Add
            </button>
          )}
          {currentOperation.operation === "update" && (
            <button
              className="btn-update"
              type="button"
              onClick={setUpdatedData}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
              Update
            </button>
          )}
        </td>
      </tr>
    </thead>
  );
};

export default TableHeader;
