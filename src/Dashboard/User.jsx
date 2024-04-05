import React from 'react';
import DashboardLayout from './DashboardLayout';
import UserTable from './UserTable';

function User() {
  return (
    <>
      <DashboardLayout>
      <UserTable/>
      </DashboardLayout>
    </>
  );
}

export default User;
