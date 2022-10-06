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
import Add from './page/admin/listProduct/Add'
import Edit from './page/admin/listProduct/Edit'
import ProductList from './page/admin/listProduct/List'
import HomePage from './page/HomePage'
import {Receptionists} from '../src/type/receptionists'
import {add,list,remove,update} from '../src/api/receptionists'
import List from './page/admin/listReception/list'
import Add from './page/admin/listReception/add'
import Edit from './page/admin/listReception/edit'
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
import { ProductType } from './types/Product'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products,setProducts] = useState<ProductType[]>([])
  useEffect(()=>{
    const getProducts = async ()=>{
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  },[])
  //delete product
  const onHandleremove = async (id: number) => {
    remove(id)
    setProducts(products.filter(item => item.id !== id));
  }
  //add product
  const onhandlerAdd = async(product:ProductType)=>{
    const {data} = await add(product)
    setProducts([...products,data])
  }
  // update product
const onHandlerUpdate = async (product:ProductType)=>{
  try {
    const {data} = await update(product);
    setProducts(products.map(item => item.id === data.id ? data : item))
  } catch (error) {        
  }
}
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
    <div className='App'>
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
          <Route path='products/add' element={<Add onAdd={onhandlerAdd}/>}/>
          <Route path='products/:id/edit' element={<Edit onUpdate={onHandlerUpdate}/>}/> 
          <Route path="admin" element={< AdminLayout />}>
          <Route path='subject'>
            <Route index element={<ListSubject subjects={subjects} onRemovee={onHandleRemoveSubject} />} />
            <Route path='add' element={<Addsubject onAddSubject={onHandleAddSubject} subjects={subjects} />} />
            <Route path=':id/edit' element={<Editsubject onUpdateSubject={onHandleUpdateSubject} subjects={subjects} />} />
          </Route>
        </Route>
        </Routes>
    </div>
  )
}

export default App
