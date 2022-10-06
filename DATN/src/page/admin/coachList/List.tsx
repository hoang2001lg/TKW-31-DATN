import React from 'react'
import { Link } from 'react-router-dom';
import { CoachType } from '../../../Type/CoachType';
type CoachManagerProps = {
  products: CoachType[];
  onRemove: (id: number) => void
}

const List = (props:CoachManagerProps) => {
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
          {props.products.map((item :any , index) => {
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
                <Link to={`/admin/coach/${item.id}/edit`}>Edit</Link>
                <button onClick={() => props.onRemove(item.id)}>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
export default List