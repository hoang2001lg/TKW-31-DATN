import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import WebsiteLayout from './layout/WebsiteLayout'
import HomePage from './page/HomePage'
import {Receptionists} from '../src/type/receptionists'
import {add,list,remove,update} from '../src/api/receptionists'
import List from './page/admin/listReception/list'
import Add from './page/admin/listReception/add'
import Edit from './page/admin/listReception/edit'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [receptions,setReceptions] = useState<Receptionists[]>([])
  useEffect(()=>{
    const getReceptionists = async ()=>{
      const {data} = await list();
      setReceptions(data);
    }
    getReceptionists();
  },[])
  //delete receptionists
  const onHandleremove = async (id: number) => {
    remove(id)
    setReceptions(receptions.filter(item => item.id !== id));
  }
  //add receptionists
  const onhandlerAdd = async(receptionist:Receptionists)=>{
    const {data} = await add(receptionist)
    setReceptions([...receptions,data])
  }
  // update receptions
const onHandlerUpdate = async (receptionist:Receptionists)=>{
  try {
    const {data} = await update (receptionist);
    setReceptions(receptions.map(item => item.id === data.id ? data : item))
  } catch (error) {        
  }
}
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={< WebsiteLayout/>} >
              <Route index  element={<HomePage/>} />
          </Route>
          <Route path="/receptions">
          <Route index element={<List receptions={receptions} onRemove={onHandleremove} />} /> 
          </Route>
          <Route path='receptions/add' element={<Add onAdd={onhandlerAdd}/>}/> 
          <Route path='receptions/:id/edit' element={<Edit onUpdate={onHandlerUpdate}/>}/> 
        </Routes>
    </div>
  )
}

export default App
