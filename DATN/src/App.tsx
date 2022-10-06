import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './layout/AdminLayout'
import WebsiteLayout from './layout/WebsiteLayout'
import AddProduct from './page/admin/listProduct/Add'
import EditProduct from './page/admin/listProduct/Edit'
import ProductList from './page/admin/listProduct/List'
import HomePage from './page/HomePage'
import {add,list,remove,update} from '../src/api/receptionists'
import List from './page/admin/listReception/list'
import Add from './page/admin/listReception/add'
import Edit from './page/admin/listReception/edit'
import Addsubject from './page/admin/subject/AddSubject'
import Editsubject from './page/admin/subject/EditSubject'
import ListSubject from './page/admin/subject/ListSubject'
import { TypeSubject } from './Type/TypeSubject'
import { ProductType } from './types/Product'
import { addSubject, listSubject, removeSubject, updateSubject } from './api/subject'
import { addproduct, removeproduct, updateproduct } from './api/product'
import { Receptionists } from './Type/receptionists'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [receptions,setReceptions] = useState<Receptionists[]>([])
  const [products,setProducts] = useState<ProductType[]>([])
  const [subjects, setSubjects] = useState<TypeSubject[]>([]);
  useEffect(()=>{
    const getReceptionists = async ()=>{
      const {data} = await list();
      setReceptions(data);
    }
    getReceptionists();
  },[])
  //delete receptionists
  const onHandleremoveRep = async (id: number) => {
    remove(id)
    setReceptions(receptions.filter(item => item.id !== id));
  }
  //add receptionists
  const onhandlerAddRep = async(receptionist:Receptionists)=>{
    const {data} = await add(receptionist)
    setReceptions([...receptions,data])
  }
  // update receptions
const onHandlerUpdateRep = async (receptionist:Receptionists)=>{
  try {
    const {data} = await update (receptionist);
    setReceptions(receptions.map(item => item.id === data.id ? data : item))
  } catch (error) { 
  }
}
  useEffect(()=>{
    const getProducts = async ()=>{
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  },[])
  //delete product
  const onHandleremove = async (id: number) => {
    removeproduct(id)
    setProducts(products.filter(item => item.id !== id));
  }
  //add product
  const onhandlerAdd = async(product:ProductType)=>{
    const {data} = await addproduct(product)
    setProducts([...products,data])
  }
  // update product
const onHandlerUpdate = async (product:ProductType)=>{
  try {
    const {data} = await updateproduct(product);
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
          <Route path='/' element={< WebsiteLayout/>} >
              <Route index  element={<HomePage/>} />
          </Route>
          {/* receptionist in admin */}
          <Route path="admin/receptions">
          <Route index element={<List receptions={receptions} onRemoveRep={onHandleremoveRep} />} /> 
          </Route>
          <Route path='receptions/add' element={<Add onAddRep={onhandlerAddRep}/>}/> 
          <Route path='receptions/:id/edit' element={<Edit onUpdateRep={onHandlerUpdateRep}/>}/> 
          {/* product in admin */}
          <Route path="admin/products">
          <Route index element={<ProductList products={products} onRemove={onHandleremove} />} /> 
          <Route path='products/add' element={<AddProduct onAdd={onhandlerAdd}/>}/>
          <Route path='products/:id/edit' element={<EditProduct onUpdate={onHandlerUpdate}/>}/> 
          </Route> 
          {/* admin */}
          <Route path="admin" element={< AdminLayout />}>
        </Route>
        {/* subject in admin */}
        <Route path='admin/subject'>
            <Route index element={<ListSubject subjects={subjects} onRemove={onHandleRemoveSubject} />} />
            <Route path='add' element={<Addsubject onAddSubject={onHandleAddSubject}  />} />
            <Route path=':id/edit' element={<Editsubject onUpdateSubject={onHandleUpdateSubject} />} />
          </Route>
        </Routes>
    </div>
  )
  }


export default App
