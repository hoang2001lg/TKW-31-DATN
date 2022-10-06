import { Receptionists } from "../type/receptionists";
import instance from "./instance";
export const add = (reception:Receptionists)=>{
    const url = '/receptions';
    return instance.post(url,reception);
}
export const list = ()=>{
    const url = '/receptions';
    return instance.get(url);
}
export const read = (id: any) => {
    const url = `/receptions/${id}`;
    return instance.get(url);
}  
export const remove = (id: number)=>{
    const url = `/receptions/${id}`;
    return instance.delete(url);
}
export const update= (reception: any) => {
    const url = `/receptions/${reception.id}`;
    return instance.put(url,reception);
}
