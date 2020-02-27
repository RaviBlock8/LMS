// import React from "react";

// function PendingRequests() {
//   // const data = [
//   //   {
//   //     LeaveType: "Sick",
//   //     EmployeeName: "Om",
//   //     From: "12/12/2020",
//   //     To: "13/12/2020",
//   //     NoOfDays: "1",
//   //     Action: "Pending"
//   //   },
//   //   {
//   //     LeaveType: "Casual",
//   //     EmployeeName: "ravi",
//   //     From: "10/11/2020",
//   //     To: "13/11/2020",
//   //     NoOfDays: "3",
//   //     Action: "Approved"
//   //   },
//   //   {
//   //     LeaveType: "Sick",
//   //     EmployeeName: "OK",
//   //     From: "12/12/2020",
//   //     To: "17/12/2020",
//   //     NoOfDays: "5",
//   //     Action: "Pending"
//   //   }
//   // ];
//   return (
//     <div>
//       <h3>Pending request</h3>
//       <div id="table">
//         <table>
//           <tr id="thr">
//             <th>Leave Type</th>
//             <th>Employee Name</th>
//             <th>From</th>
//             <th>To</th>
//             <th>No. of Days</th>
//             <th>Action</th>
//           </tr>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default PendingRequests;

import React from "react";
import { connect } from "react-redux";
// import "./LeaveTable.css";
import PendingRequestEntry from "./PendingRequestEntry";

function PendingRequestTable(props) {
  const getRows = () => {
    return props.data.map(entry => {
      return (
        <PendingRequestEntry id={entry.id} entry={entry}></PendingRequestEntry>
      );
    });
  };

  return (
    <div id="table">
      <h3>Pending request</h3>
      <table>
        <tr id="thr">
          <th>Leave Type</th>
          <th>From</th>
          <th>To</th>
          <th>Days</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
        {getRows()}
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(PendingRequestTable);
