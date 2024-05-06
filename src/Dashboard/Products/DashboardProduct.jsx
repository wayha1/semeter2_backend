import React from 'react'
import DashboardLayout from '../DashboardLayout';
import ProductInformation from './ProductInformation';

function DashboardProduct() {
  return (
    <>
      <DashboardLayout>
        <ProductInformation/>
      </DashboardLayout>
    </>
  );
}

export default DashboardProduct