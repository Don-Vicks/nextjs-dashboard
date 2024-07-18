import React from 'react'
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export default async function CustomerPage() {
  const customer = await fetchFilteredCustomers();

  return (
    <CustomersTable customers={customer}/>
  )
}
