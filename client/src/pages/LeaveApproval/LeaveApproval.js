import React from "react";
import PendingRequests from "../LeaveApproval/PendingRequests";
import ApprovalHistory from "../LeaveApproval/ApprovalHistory";

function LeaveApproval() {
  return (
    <div>
      <PendingRequests></PendingRequests>
      <ApprovalHistory></ApprovalHistory>
    </div>
  );
}

export default LeaveApproval;
