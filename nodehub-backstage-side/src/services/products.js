import {get,post,put} from '../utils/request';

export function listApi(page=1){
    return get("/api/v1/admin/products",{page});
}

export function createApi(data){
    return get("/api/v1/admin/products",data);
}

export function modifyOne(id,data){
    return get(`/api/v1/admin/products/${id}`,data);
}

export function delApi(id,data){
    return get(`/api/v1/admin/products/${id}`);
}