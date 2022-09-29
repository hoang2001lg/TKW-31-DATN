import React,{useEffect} from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { read } from '../../../api/receptionists';


type EditProps = {
    onUpdate:(reception:Input)=>void
  }
  
type Input = {
    name : string;
    code : number;
    img  : string;
    phone : number;
    age : number;
    address : string;
    job : string;
}


const Edit = (props: EditProps) => {
  
  const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
      const getReceptionists= async()=>{
          const{data}= await read(id);
          reset(data)
          
          
      }
      getReceptionists();
  },[])
  const onSubmit :SubmitHandler<Input> = data =>{
    props.onUpdate(data)
    navigate('/receptions')

  }
  // Call API
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
           <label htmlFor="">Name</label>
       <input className='border mt-10' type="text" {...register('name',{required:true})} /> <br />
         {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
         <label htmlFor="">Code</label>
         <input  className='border mt-10'type="number" {...register('code')} /> <br/>
         <label htmlFor="">Image</label>
         <input className='border mt-10' type="text" {...register('img',{required:true})} /> <br/>
         <label htmlFor="">Phone</label>
         <input className='border mt-10' type="text" {...register('phone',{required:true})} /> <br/>
         <label htmlFor="">Age</label>
         <input className='border mt-10' type="text" {...register('age',{required:true})} /> <br/>
         <label htmlFor="">Address</label>
         <input className='border mt-10' type="text" {...register('address',{required:true})} /> <br/>
         <label htmlFor="">Job</label>
         <input className='border mt-10' type="text" {...register('job',{required:true})} /> <br/>

          <button>Update</button>
         
         
        </form>


    </div>
  )
}

export default Edit