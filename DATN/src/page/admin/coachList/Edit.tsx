import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readCoach } from '../../../api/Coach';
import { CoachType } from '../../../Type/CoachType';
type CoachEditProps = {
  onUpdateCoach: (coachs: CoachType) => void


}
type FormInputs = {
  name: string,
  telephone: number,
  address: string,
  email: string,
  subject: string,
  stasus: string,
  action: string
}

const EditCoach = (props: CoachEditProps) => {
  const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCoach = async () => {
            const { data } = await readCoach(id);
            reset(data);
        }
        getCoach();
    },[]);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdateCoach(data)
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
          <button>Edit Huấn Luyện Viên</button>
      </form>
  </div>
  )
}

export default EditCoach