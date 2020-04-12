/*
 * @Author: liyh
 * @Date: 2020-03-21 19:52:42
 * @LastEditors: liyh
 * @LastEditTime: 2020-04-02 21:45:27
 */
import { post, get } from './baseService';
const baseUrl = 'https://task-centerapi.cx580.com';//需区分是否生产环境
// post提交    
export const getAd = (params) => {
    return post(`${baseUrl}/advert/getAd`, params);
}

export const getUser_node = (params) => {
    return get('http://node.test.com:8383/getAllUsers.json', params);
}


export const login = (params) => {
    return post('http://www.tzf-foryou.com:8080/backend/login.json', params);
}

export const logout = (params) => {
    return post('http://www.tzf-foryou.com:8080/backend/logout.json', params);
}
// export const getAd = (params) => {
//     return get(`/v1/getUnreadSystemNotificationNum`, params);
// }


