import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { add, list, remove, update } from './api/product'
import './App.css'
import AdminLayout from './layout/AdminLayout'
import WebsiteLayout from './layout/WebsiteLayout'
import Add from './page/admin/listProduct/Add'
import Edit from './page/admin/listProduct/Edit'
import ProductList from './page/admin/listProduct/List'
import HomePage from './page/HomePage'
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
