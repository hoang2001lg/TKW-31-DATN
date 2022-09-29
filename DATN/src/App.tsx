import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { add, list, remove, update } from './api/product'
import './App.css'
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
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={< WebsiteLayout/>} >
              <Route index  element={<HomePage/>} />
          </Route>
          <Route path="/products">
          <Route index element={<ProductList products={products} onRemove={onHandleremove} />} /> 
          </Route>
          <Route path='products/add' element={<Add onAdd={onhandlerAdd}/>}/>
          <Route path='products/:id/edit' element={<Edit onUpdate={onHandlerUpdate}/>}/> 
        </Routes>
    </div>
  )
}

export default App
