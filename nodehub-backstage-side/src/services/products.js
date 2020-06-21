import {get,post,put} from '../utils/request';

export function listApi(page=1){
    return get("/getSubareaData",{page});
}
export function createApi(title,imgUrl,suffix){
    return post(`/admin/addSubarea`,{title,imgUrl,suffix});
}

export function modifyOne(id,data){
    return get(`/getSubareaData/${id}`,data);
}

export function delApi(id,data){
    return get(`/admin/removeSubarea?id=${id}`);
}
export function UserApi(page=1){
    return get("/admin/getAllUsers",{page});
}
export function UserdelApi(id,data){
    return get(`/admin/removeUser?id=${id}`);
}
export function ChartsoneAPI(){
    return get("/admin/userAnswerTop20");
}

export function ChartstwoAPI(){
    return get("/admin/subareaImagesTop20");
}
export function ChartsthreeAPI(){
    return get("/admin/goodAnswerTop20");
}