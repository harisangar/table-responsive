import React from 'react'
import Button from './button/Button'
import {users} from './userData'




function Table() {
  return (
 
    <div className='m-2 "'>
       
    
   <div>
   <table className="  shadow-lg rounded-lg bg-white w-full mobile:w-full mobile:block">
     <thead className=" mobile:hidden">
     	<tr className=''>
     	 <th className="bg-gray-100 border-none text-center px-8 py-4">ID</th>
     	 <th className="bg-gray-100 border-none text-center px-8 py-4">Name</th>
     	 <th className="bg-gray-100 border-none text-center px-8 py-4">Gender</th>
     	 <th className="bg-gray-100 border-none text-center px-8 py-4">Age</th>
     	 <th className="bg-gray-100 border-none text-center px-8 py-4">Mark1</th>
         <th className="bg-gray-100 border-none text-center px-8 py-4">Mark2</th>
     	 <th className="bg-gray-100 border-none text-center px-8 py-4">Status</th>
     	 <th className="bg-gray-100 border-none text-center px-8 py-4">City</th>
         <th className="bg-gray-100 border-none text-center px-8 py-4">update</th>
        </tr>
     </thead>
     <tbody className="mobile:w-full mobile:block">

        {
            users.map((user)=>{
                return(
                    <tr className="mobile:w-full mobile:block mobile:mb-1 even:bg-red-100 odd:bg-red-50 ">
                    <td data-label="S.No" className="border-none pl-5 py-4 text-center mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">
                   {user.id}</td>
                    <td data-label="Name" className="border-none pl-5 text-center py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{user.Name}</td>
                    <td data-label="Age" className="border-none pl-5 text-center py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{user.Gender}</td>
                    <td data-label="Marks%" className="border-none pl-5 text-center py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{user.Age}</td>
                    <td data-label="Staus" className="border-none pl-5 text-center py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{user.Mark1}</td>
                 <td data-label="Age" className="border-none pl-5 text-center py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{user.Mark2}</td>
                    <td data-label="Marks%" className="border-none pl-5 text-center py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{user.Status}</td>
                    <td data-label="Staus" className="border-none pl-0 py-4 text-center mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{user.Status}</td>
                   <td data-label="Staus" className="border-none pl-0 py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                  mobile:before:content-[attr(data-label)] mobile:before:absolute
                  mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{<Button/>}</td>
              </tr> 

                );
            })

        }
        </tbody>
   </table>
   </div>
   </div>
    
  )   
}

export default Table
