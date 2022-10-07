import React from 'react'
import { Link } from 'react-router-dom';
import { CoachType } from '../../../Type/CoachType';
type CoachManagerProps = {
  coachs: CoachType[];

  onRemoveCoach: (id: number) => void
}

const ListCoach = (props:CoachManagerProps) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <td>Check box</td>
          <td>STT</td>
          <td>Tên Huấn Luyện Viên</td>
          <td>Số Điện Thoại</td>
          <td>Địa Chỉ</td>
          <td>Email</td>
          <td>Bộ Môn</td>
          <td>Trạng Thái</td>
          <td>Hành Động</td>
        </thead>
        <tbody>
          {props.coachs.map((item :any , index) => {

            return <tr>
                <td></td>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.telephone}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.stasus}</td>
                <td>{item.action}</td>
                <td>
                <Link to={`${item.id}/edit`}>Edit</Link>
                <button onClick={() => props.onRemoveCoach(item.id)}>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
      <div className="">
            <button className=' bg-green-500 text-white ml-10' ><a href="coach/add">ADD NEW</a></button>
            </div>
    </div>
  )
}
export default ListCoach