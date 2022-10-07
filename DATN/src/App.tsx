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
import { add, list, remove, update } from './api/product'
import './App.css'
import AdminLayout from './layout/AdminLayout'
import WebsiteLayout from './layout/WebsiteLayout'
import AddProduct from './page/admin/listProduct/Add'
import EditProduct from './page/admin/listProduct/Edit'
import HomePage from './page/HomePage'
import { add, list, remove, update } from '../src/api/receptionists'
import List from './page/admin/listReception/list'
import Add from './page/admin/listReception/add'
import Edit from './page/admin/listReception/edit'
import Addsubject from './page/admin/subject/AddSubject'
import Editsubject from './page/admin/subject/EditSubject'
import ListSubject from './page/admin/subject/ListSubject'
import { TypeSubject } from './Type/TypeSubject'
import { ProductType } from './Type/Product'
import { addSubject, listSubject, removeSubject, updateSubject } from './api/subject'
import { addproduct, listproduct, removeproduct, updateproduct } from './api/product'
import { Receptionists } from './Type/receptionists'
import ListProduct from './page/admin/listProduct/List'
import { CoachType } from './Type/CoachType'
import { addCoach, listCoach, removeCoach, updateCoach } from './api/Coach'
import ListCoach from './page/admin/coachList/List'
import AddCoach from './page/admin/coachList/Add'
import EditCoach from './page/admin/coachList/Edit'
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


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [receptions, setReceptions] = useState<Receptionists[]>([])
  const [products, setProducts] = useState<ProductType[]>([])
  const [subjects, setSubjects] = useState<TypeSubject[]>([]);
  const [Coachs, setCoachs] = useState<CoachType[]>([])
  useEffect(() => {
    const getCoachs = async () => {
      const { data } = await listCoach();
      setCoachs(data);
    }
    getCoachs();
  }, []);

  const onHandleAddCoach = async (coach: any) => {
    const { data } = await addCoach(coach);
    setCoachs([...Coachs, data]);
  }
  const onHandleRemoveCoach = async (id: number) => {
    removeCoach(id);
    setCoachs(Coachs.filter(item => item.id !== id));
  }
  const onHandleUpdateCoach = async (coachs: CoachType) => {
    try {
      const { data } = await updateCoach(coachs);
      setCoachs(Coachs.map(item => item.id === data.id ? coachs : item))
    } catch (error) {

    }
  }
  useEffect(() => {
    const getReceptionists = async () => {
      const { data } = await list();
      setReceptions(data);
    }
    getReceptionists();
  }, [])
  //delete receptionists
  const onHandleremoveRep = async (id: number) => {
    remove(id)
    setReceptions(receptions.filter(item => item.id !== id));
  }
  //add receptionists
  const onhandlerAddRep = async (receptionist: Receptionists) => {
    const { data } = await add(receptionist)
    setReceptions([...receptions, data])
  }
  // update receptions
  const onHandlerUpdateRep = async (receptionist: Receptionists) => {
    try {
      const { data } = await update(receptionist);
      setReceptions(receptions.map(item => item.id === data.id ? data : item))
    } catch (error) {
    }
  }
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await listproduct();
      setProducts(data);
    }
    getProducts();
  }, [])
  //delete product
  const onHandleremove = async (id: number) => {
    removeproduct(id)
    setProducts(products.filter(item => item.id !== id));
  }
  //add product
  const onhandlerAdd = async (product: ProductType) => {
    const { data } = await addproduct(product)
    setProducts([...products, data])
  }
  // update product
  const onHandlerUpdate = async (product: ProductType) => {
    try {
      const { data } = await updateproduct(product);
      setProducts(products.map(item => item.id === data.id ? data : item))
    } catch (error) {
    }
  }
  //Subject start

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
    <div className='App'>
      <Routes>
        <Route path='/' element={< WebsiteLayout />} >
          <Route index element={<HomePage />} />
        </Route>
        {/* admin */}
        <Route path="admin" element={< AdminLayout />}>
          {/* receptionist in admin */}
          <Route path="receptions">
            <Route index element={<List receptions={receptions} onRemoveRep={onHandleremoveRep} />} />
            <Route path='add' element={<Add onAddRep={onhandlerAddRep} />} />
            <Route path=':id/edit' element={<Edit onUpdateRep={onHandlerUpdateRep} />} />
          </Route>
          {/* product in admin */}
          <Route path="products">
            <Route index element={<ListProduct products={products} onRemove={onHandleremove} />} />
            <Route path='add' element={<AddProduct onAdd={onhandlerAdd} />} />
            <Route path=':id/edit' element={<EditProduct onUpdate={onHandlerUpdate} />} />
        <Routes>
          <Route path='/' element={< WebsiteLayout/>} >
              <Route index  element={<HomePage/>} />
          </Route>
          <Route path="/admin" element={< AdminLayout />}>
              <Route index element = {< DashBoard />} />
              <Route path='/admin/coach/list' element={<List onRemove={onHandleRemove} products={[]} />}/>
              <Route path='/admin/coach/add' element={<Add onAdd={onHandleAdd} />}/>
              <Route path='/admin/coach/:id/edit' element={<Edit onUpdate={onHandleUpdate} />}/>
          </Route>
          <Route path="/receptions">
          <Route index element={<List receptions={receptions} onRemove={onHandleremove} />} /> 
          </Route>
          <Route path='receptions/add' element={<Add onAdd={onhandlerAdd}/>}/> 
          <Route path='receptions/:id/edit' element={<Edit onUpdate={onHandlerUpdate}/>}/> 
          <Route path="/products">
          <Route path='/admin' element={ <AdminLayout />}> 

          </Route>
          <Route index element={<ProductList products={products} onRemove={onHandleremove} />} /> 
          </Route>
          {/* subject in admin */}
          <Route path='subject'>
            <Route index element={<ListSubject subjects={subjects} onRemove={onHandleRemoveSubject} />} />
            <Route path='add' element={<Addsubject onAddSubject={onHandleAddSubject} />} />
            <Route path=':id/edit' element={<Editsubject onUpdateSubject={onHandleUpdateSubject} />} />
          </Route>
          {/* coach in admin */}
          <Route path='coach'>
            <Route index element={<ListCoach coachs={Coachs} onRemoveCoach={onHandleRemoveCoach} />} />
            <Route path='add' element={<AddCoach onAddCoach={onHandleAddCoach} />} />
            <Route path=':id/edit' element={<EditCoach onUpdateCoach={onHandleUpdateCoach} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}


export default App
