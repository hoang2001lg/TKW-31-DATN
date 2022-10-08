import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { addSubject, listSubject, removeSubject, updateSubject } from './api/subject'
import './App.css'
import AdminLayout from './layout/AdminLayout'
import WebsiteLayout from './layout/WebsiteLayout'
import Addsubject from './page/admin/subject/AddSubject'
import Editsubject from './page/admin/subject/EditSubject'
import ListSubject from './page/admin/subject/ListSubject'
import HomePage from './page/HomePage'
import { TypeSubject } from './Type/TypeSubject'
function App() {
  //Subject start
  const [subjects, setSubjects] = useState<TypeSubject[]>([]);
  useEffect(() => {
    const getSubject = async () => {
      const { data } = await listSubject();
      setSubjects(data);
    };
    getSubject();
  }, [])
  const onHandleRemoveSubject = (id: number) => {
    if (window.confirm('Are you sure you want to remove  ?')) {
      removeSubject(id);
      setSubjects(subjects.filter(item => item.id !== id));
    }
  }
  const onHandleAddSubject = async (subject: TypeSubject) => {
    const { data } = await addSubject(subject);
    setSubjects([...subjects, data]);
    alert("Success!");
  }
  const onHandleUpdateSubject = async (subject: TypeSubject) => {
    const { data } = await updateSubject(subject);
    setSubjects(subjects.map(item => item.id == data.id ? data : item));
  }
  //Subject End
  return (
    <>
      <Routes>
        <Route path='/' element={< WebsiteLayout />} >
          <Route index element={<HomePage />} />
        </Route>
        <Route path="admin" element={< AdminLayout />}>
          <Route path='subject'>
            <Route index element={<ListSubject subjects={subjects} onRemovee={onHandleRemoveSubject} />} />
            <Route path='add' element={<Addsubject onAddSubject={onHandleAddSubject} subjects={subjects} />} />
            <Route path=':id/edit' element={<Editsubject onUpdateSubject={onHandleUpdateSubject} subjects={subjects} />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
