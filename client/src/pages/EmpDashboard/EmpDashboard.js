import React from "react";
//importing components
import LeaveTable from "../../components/LeaveTable/LeaveTable";
import LeaveList from "../../components/LeaveList/LeaveList";
//importing css files
import "./empdashboard.css";
import PendingRequests from "../LeaveApproval/PendingRequests";
import ApprovalHistory from "../LeaveApproval/ApprovalHistory";

function EmpDashboard() {
  return (
    <div id="empd">
      <LeaveList></LeaveList>
      <LeaveTable></LeaveTable>
      {/* <LeaveApproval></LeaveApproval> */}
      <PendingRequests></PendingRequests>
      <ApprovalHistory></ApprovalHistory>
    </div>
  );
}

export default EmpDashboard;
