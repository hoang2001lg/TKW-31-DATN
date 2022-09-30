import React from "react";
import { Link } from "react-router-dom";
import { Receptionists } from "../../../type/receptionists";
type ReceptionistRemove = {
    receptions : Receptionists[];
    onRemove : (id:number) => void
}

const List = (props : ReceptionistRemove)=>{
    return(
        <div>
            <h2 className='mx-auto text-blue-600 text-4xl'>Receptionists List</h2>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                     

                            <table className="min-w-full text-center table table-bordered">
                                
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            STT
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border" >
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                           Code
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Age
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Image
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            PhoneNumber
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Address
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Job
                                        </th>
                                        <th scope="col-2" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.receptions.map((item, index) => {
                                        return <tr>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.name}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.code}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.age}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'><img src={item.img} alt="" width="120px"/></td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.phone}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.address}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.job}</td>
                                               <div className="mt-4">
                                               <Link className='rounded-md bg-blue-400 text-white mt-20 mr-2' to={`/receptions/${item.id}/edit`}>UPDATE</Link>
                                               <button className="bg-red-500 text-white" onClick={() => props.onRemove(item.id)}>DELETE</button>

                                               </div>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
            <button className=' bg-green-500 text-white ml-10' ><a href="receptions/add">ADD NEW</a></button>
            </div>
            
        </div>
        
    )
}
export default List