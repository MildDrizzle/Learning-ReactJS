import React from "react";
import Data from "./Data";

const TableBody = ({ data, Delete, update }) => {
  return (
    <tbody>
      {data.map((dt) => {
        return <Data data={dt} Delete={Delete} update={update} />;
      })}
    </tbody>
  );
};

export default TableBody;
