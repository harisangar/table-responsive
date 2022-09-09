import Button from "./button/Button";
export default function Table({theadData, tbodyData}) {
  return (
    <table className="  shadow-lg rounded-lg bg-white w-full mobile:w-full mobile:block">
        <thead className=" mobile:hidden">
           <tr>
            {theadData.map(heading => {
              return <th  className="bg-gray-100 border-none text-center px-8 py-4" key={heading}>{heading}</th>
            })}
            <th  className="bg-gray-100 border-none text-center px-8 py-4">Update</th>
          </tr>
        </thead>
        <tbody className="mobile:w-full mobile:block">
            {tbodyData.map((row, index) => {
                return <tr className="mobile:w-full mobile:block mobile:mb-1 even:bg-red-100 odd:bg-red-50 " key={index}>
                    {theadData.map((key, index) => {
                         return <td data-label={key} className="border-none pl-5 text-center py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                         mobile:before:content-[attr(data-label)] mobile:before:absolute
                         mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left" key={row[key]}>{row[key]}</td>
                    })}
                    <td  data-label="Update" className="border-none pl-5 text-center py-4 mobile:w-full mobile:block mobile:text-center mobile:pl-[25%] mobile:relative
                         mobile:before:content-[attr(data-label)] mobile:before:absolute
                         mobile:before:left-1 mobile:before:w-[25%]  mobile:before:text-mobile mobile:before:font-bold mobile:begore:text-left" ><Button/></td>
              </tr>;
            })}
        </tbody>
    </table>
 );
 }
 