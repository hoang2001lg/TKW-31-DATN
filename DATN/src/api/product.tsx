import { ProductType } from "../types/Product";
import instance from "./instance";
export const addproduct = (product:ProductType)=>{
    const url = '/products';
    return instance.post(url,product);
}
export const listproduct = ()=>{
    const url = '/products';
    return instance.get(url);
}
export const readproduct = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}  
export const removeproduct = (id: number)=>{
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const updateproduct = (product: any) => {
    const url = `/products/${product.id}`;
    return instance.put(url,product);
}