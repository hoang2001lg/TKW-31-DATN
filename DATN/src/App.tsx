import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { add, list, remove, update } from './api/Coach'
import './App.css'
import AdminLayout from './layout/AdminLayout'
import WebsiteLayout from './layout/WebsiteLayout'
import DashBoard from './page/admin/DashBoard'
import List from './page/admin/coachList/List'
import Add from './page/admin/coachList/Add'
import Edit from './page/admin/coachList/Edit'
import HomePage from './page/HomePage'
import { CoachType } from './Type/CoachType'

function App() {
  const [Coachs, setProducts] = useState<CoachType[]>([])
  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    }
    getProducts();
  }, []);

  const onHandleAdd = async (product: any) => {
    const {data} = await add(product);
    setProducts([...Coachs, data]);
  }
  const onHandleRemove = async (id: number) => {
    remove(id);
    setProducts(Coachs.filter(item => item.id !== id));
  }
  const onHandleUpdate = async (coachs: CoachType) => {
    try {
       const {data} = await update(coachs);
       setProducts(Coachs.map(item => item.id === data.id ? coachs : item))
    } catch (error) {
      
    }
  }
  return (
    <>
        <Routes>
          <Route path='/' element={< WebsiteLayout/>} >
              <Route index  element={<HomePage/>} />
          </Route>
          <Route path="/admin" element={< AdminLayout />}>
              <Route index element = {< DashBoard />} />
              <Route path='/admin/coach/list' element={<List onRemove={onHandleRemove} products={[]} />}/>
              <Route path='/admin/coach/add' element={<Add onAdd={onHandleAdd} />}/>
              <Route path='/admin/coach/edit' element={<Edit onUpdate={onHandleUpdate} />}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
