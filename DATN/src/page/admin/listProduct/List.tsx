import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../../types/Product";
type ProductRemove = {
    products : ProductType[];
    onRemove : (id:number) => void
}

const List = (props : ProductRemove)=>{
    return(
        <div>
            <h2 className='mx-auto text-blue-600 text-4xl'>Danh sách gói tập</h2>
            <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full ">
                <thead className="">
                  <tr>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      STT
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Tên gói tập
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Bộ môn
                    </th>
                    <th scope="col" className=" text-base text-center  font-medium text-gray-900 px-6 py-4 text-left border ">
                      Thể loại
                    </th>
                    <th scope="col" className=" text-base text-center  font-medium text-gray-900 px-6 py-4 text-left border ">
                      Giá niêm yết
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Giá Sale
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Hành động
                    </th>
                    <th scope="col" className="text-base font-medium text-gray-900 px-6 py-4 text-left border">
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                {props.products.map((item, index) => (
                    <tr key={index} className="border-solid	">
                      <td className=" px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 border" >{item.id}</td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.name}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.subject}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.category}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.price}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.price_sale}
                      </td>
                      <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                        {item.act}
                      </td>
                      <td className='border '>
                      <Link className='bg-blue-900 px-2 py-2 text-center rounded-full hover:bg-violet-600 text-white mx-6' to={`/products/${item.id}/edit`}>Edit</Link>
                      <button className="bg-yellow-600 px-2 py-2 text-center rounded-full hover:bg-red-600 text-white mx-4" onClick={() => props.onRemove(item.id)}>DELETE</button>
                      </td>
                    </tr>

                  ))}
                </tbody>
              </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
            <button className=' bg-green-500 text-white ml-10' ><a href="products/add">ADD NEW</a></button>
            </div>

        </div>

    )
}
export default List