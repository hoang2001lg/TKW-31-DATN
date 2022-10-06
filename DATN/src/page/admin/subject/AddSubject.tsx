import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm,SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TypeSubject } from '../../../Type/TypeSubject'
type AddSubjectProps = {
  onAddSubject: (subject: TypeSubject) => void,
}
type formInput = {
  name: string,
  description: string
}
const Addsubject = (props: AddSubjectProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<formInput>();
  const navitage = useNavigate();
  const onSubmit: SubmitHandler<formInput> = (data: TypeSubject) => {
    props.onAddSubject(data)
    navitage("/admin/subject");
  }
  return (
    <Form action='' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1200px', margin: 'auto' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h4>Thêm Mới</h4></Form.Label>
        <Form.Group>
          <Form.Label>Nhập Tên</Form.Label>
          <Form.Control type="text" {...register('name', { required: true })} />
          {errors.name && errors.name.type === "required" && <span className="validate">Tên danh mục không được để trốnggggg</span>}
          <br />
        </Form.Group>
      </Form.Group>
      <button type="submit">
        Submit
      </button>
    </Form>
  )
}

export default Addsubject