import React from "react";

const Data = ({ data, Delete, update }) => {
  return (
    <tr key={data.id} className="table-margin">
      <td>
        <input
          className="input-data"
          disabled
          readOnly={true}
          value={data.data1}
        />
      </td>
      <td>
        <input
          className="input-data"
          disabled
          readOnly={true}
          value={data.data2}
        />
      </td>
      <td>
        <button
          className="btn-succes"
          type="button"
          onClick={() => update(data.id)}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn-danger"
          onClick={() => Delete(data.id)}
          type="button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Data;
