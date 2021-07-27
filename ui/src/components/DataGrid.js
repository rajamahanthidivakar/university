import React from "react";

export default function DataGrid({ courseList }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>University</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {courseList.map((list, index) => (
            <tr key={index}>
              <td>{list.university}</td>
              <td>{list.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
