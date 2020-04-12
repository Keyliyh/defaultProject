/*
 * @Author: liyh
 * @Date: 2020-03-21 20:05:44
 * @LastEditors: liyh
 * @LastEditTime: 2020-04-02 17:43:27
 */

import axios from './axios.config'; // 导入axios中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
import { Toast } from 'vant';

//get
export const get = (url, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            params,
        }).then(res => {
            if (res.data.code == 1000) {
                //成功，返回数据
                resolve(res.data);
            } else {
                //不成功，提示错误信息
                Toast({
                    message: res.data.msg,
                    duration: 1000,
                    forbidClick: true
                });
            }
        }).catch(error => {

        })
    })
}

//post
export const post = (url, params, otherParams) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data: params,
            ...otherParams
        }).then(res => {
            console.log('res', res);
            if (res.data.code == 1000) {
                //成功，返回数据
                resolve(res.data.data);
            } else {
                //不成功，提示错误信息
                Toast({
                    message: res.data.msg,
                    duration: 1000,
                    forbidClick: true
                });
            }
        }).catch(error => {

        })
    })
}