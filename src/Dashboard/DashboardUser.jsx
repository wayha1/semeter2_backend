import React from "react";
import DashboardLayout from "./DashboardLayout";
import UserTable from "./User/UserTable";

function User() {
  return (
    <>
      <DashboardLayout>
        <UserTable />
      </DashboardLayout>
    </>
  );
}

export default User;
