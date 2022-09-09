import React from 'react'
import {users} from "./userData";
import Table from './Table';

function Userpage() {
    const getHeadings = () => {
        return Object.keys(users[0]);
      }
  return (
    <div>
          <Table theadData={getHeadings()} tbodyData={users}/>
    </div>
  )
}

export default Userpage
