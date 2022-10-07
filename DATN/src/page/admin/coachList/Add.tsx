import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Inputs = { // kiểu dữ liệu của từng input
  name: string,
  telephone: number,
  address: string,
  email: string,
  subject: string,
  stasus: string,
  action: string

};

type CoachsAddProps = {
  onAddCoach: (coachs: Inputs) => void
}
const AddCoach = (props: CoachsAddProps) => {
  onAdd: (coachs: Inputs) => void
}
const Add = (props: CoachsAddProps) => {
  const { register, handleSubmit, formState: { errors}} = useForm<Inputs>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Inputs>  = (dataInput) => {
      props.onAddCoach(dataInput);
      navigate("/coach");
  }
return (
  <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('name')} placeholder='Tên Huấn Luyện Viên' />
          <input type="number"  {...register('telephone')} placeholder='Số điện thoại' />
          <input type="text" {...register('address')} placeholder='Địa chỉ' />
          <input type="text" {...register('email')} placeholder='Email Huấn Luyện Viên' />
          <input type="text" {...register('subject')} placeholder='Bộ Môn' />
          <input type="text" {...register('stasus')} placeholder='Trạng thái' />
          <input type="text" {...register('action')} placeholder='Hành động' />
          <button>Thêm Huấn Luyện Viên</button>
      </form>
  </div>
)
}

export default AddCoach