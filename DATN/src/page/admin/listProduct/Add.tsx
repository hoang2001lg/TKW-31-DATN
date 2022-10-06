import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

type Input = {
  name : string;
  subject : string;
  category  : string;
  price : number;
  price_sale : number;
  act : string
}

type AddProps = {
  onAdd: (receptions: Input) => void
}

const AddProduct = (props: AddProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm<Input>();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Input> = (dataInput) => {
    props.onAdd(dataInput)
    navigate('/products')

  }
  // Call API
  return (
    <div>
    <div className="bg-white">
      <strong className=" text-xl uppercase pt-4">Thêm gói tập</strong> <br />
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <form id="form-add-pro" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Tên gói tập<span className="text-red-500">*</span></label><br />
                    <input type="text" {...register('name')} className="border border-gray-300 p-2 w-full" id="name" />
                </div>

                <div className="mb-3 grid grid-cols-2 gap-6">
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Bộ môn<span className="text-red-500">*</span></label><br />
                        <input type="text" {...register('subject')} className="border border-gray-300 p-2 w-full" id="subject" />
                    </div>
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">thể loại<span className="text-red-500">*</span></label><br />
                        <input type="text" {...register('category')} className="border border-gray-300 p-2 w-full" id="category" />
                    </div>
                </div>
                <div className="mb-3 grid grid-cols-2 gap-6">
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Giá niêm yết<span className="text-red-500">*</span></label><br />
                        <input type="number" {...register('price')} className="border border-gray-300 p-2 w-full" id="price" />
                    </div>
                    <div>
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Giá sale<span className="text-red-500">*</span></label><br />
                        <input type="number" {...register('price_sale')} className="border border-gray-300 p-2 w-full" id="price_sale" />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-gray-600 font-semibold mb-1">Hành động<span className="text-red-500">*</span></label><br />
                    <textarea {...register('act')} className="w-full sec p-3 h-60 border border-gray-300 " id="act" placeholder="Mô tả sản phẩm" defaultValue={""} />
                </div>
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                    <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Hủy</button>
                    <button className="w-auto bg-red-600 hover:bg-blue-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">Thêm mới</button>
                </div>
            </form>
      </div>
    </div>
    </div>
  )
}

export default AddProduct