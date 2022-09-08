import React from 'react'
import DeleteButton from './button/deleteButton'




function Table() {
  return (
 
    <div className='m-2'>
       
    
   
   <table className=" shadow-lg bg-white border-none-none w-full mobile:w-full mobile:block">
     <thead className=" mobile:hidden">
     	<tr className=''>
     	 <th className="bg-blue-100 border-none text-left px-8 py-4">S.No</th>
     	 <th className="bg-blue-100 border-none text-left px-8 py-4">Name</th>
     	 <th className="bg-blue-100 border-none text-left px-8 py-4">Age</th>
     	 <th className="bg-blue-100 border-none text-left px-8 py-4">Marks%</th>
     	 <th className="bg-blue-100 border-none text-left px-8 py-4">Status</th>
        <th className="bg-blue-100 border-none text-left px-8 py-4">Age</th>
     	 <th className="bg-blue-100 border-none text-left px-8 py-4">Marks%</th>
     	 <th className="bg-blue-100 border-none text-left px-8 py-4">Status</th>
          <th className="bg-blue-100 border-none text-left px-8 py-4">update</th>

     	</tr>
     </thead>
     <tbody className="mobile:w-full mobile:block">
     	  <tr className="mobile:w-full mobile:block mobile:mb-1 even:bg-lime-200 odd:bg-lime-100 ">
     	  	  <td data-label="S.No" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">
                1</td>
     	  	  <td data-label="Name" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Dinesh</td>
     	  	  <td data-label="Age" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">34</td>
     	  	  <td data-label="Marks%" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">25%</td>
     	  	  <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Passed</td>
              <td data-label="Age" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">34</td>
     	  	  <td data-label="Marks%" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">25%</td>
     	  	  <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Passed</td>
                <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{<DeleteButton/>}</td>
     	  </tr>             

     	  <tr className="mobile:w-full mobile:block mobile:mb-1 even:bg-lime-200 odd:bg-lime-100">
     	  	  <td data-label="S.No" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">2</td>
     	  	  <td data-label="Name" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Kamal</td>
     	  	  <td data-label="Age"className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">23</td>
     	  	  <td data-label="Marks%"className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">70%</td>
     	  	  <td data-label="Staus"className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Passed</td>
                <td data-label="Age"className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">34</td>
     	  	  <td data-label="Marks%"className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">25%</td>
     	  	  <td data-label="Staus"className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Passed</td>
                <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{<DeleteButton/>}</td>	  
          </tr>

     	  <tr className="mobile:w-full mobile:block mobile:mb-1 even:bg-lime-200 odd:bg-lime-100 ">
     	  	  <td data-label="S.No" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">3</td>
     	  	  <td data-label="Name" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Neha</td>
     	  	  <td data-label="Age" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">20</td>
     	  	  <td data-label="Marks%" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">90%</td>
     	  	  <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Passed</td>
                 <td data-label="Age" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">34</td>
     	  	  <td data-label="Marks%" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">25%</td>
     	  	  <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Passed</td>
     	     <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{<DeleteButton/>}</td>
          </tr>

     	  <tr className="mobile:w-full mobile:block mobile:mb-1 even:bg-lime-200 odd:bg-lime-100">
     	  	  <td data-label="S.No" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">4</td>
     	  	  <td data-label="Name" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Priya</td>
     	  	  <td data-label="Age" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">30</td>
     	  	  <td data-label="Marks%" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">30%</td>
     	  	  <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Failed</td>
                 <td data-label="Age" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">34</td>
     	  	  <td data-label="Marks%" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">25%</td>
     	  	  <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">Passed</td>
     	         <td data-label="Staus" className="border-none px-8 py-4 mobile:w-full mobile:block mobile:text-left mobile:pl-[25%] mobile:relative
               mobile:before:content-[attr(data-label)] mobile:before:absolute
               mobile:before:left-0 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left">{<DeleteButton/>}</td>
          </tr>
     </tbody>
   </table>
  

    </div>
    
  )   
}

export default Table
