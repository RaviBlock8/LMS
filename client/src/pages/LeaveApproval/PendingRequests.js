import React from "react";

function PendingRequests() {
  return (
    <div>
      <h3>Pending request</h3>
      <div id="table">
        <table>
          <tr id="thr">
            <th>Leave Type</th>
            <th>Employee Name</th>
            <th>From</th>
            <th>To</th>
            <th>No. of Days</th>
            <th>Action</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default PendingRequests;
