import React from 'react'
import {users} from "./employee"
import Table from './Table';

function Employeepage() {
    const getHeadings = () => {
        return Object.keys(users[0]);
      }
  return (
    <div>
          <Table theadData={getHeadings()} tbodyData={users}/>
    </div>
  )
}

export default Employeepage