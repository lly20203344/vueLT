import axios from 'axios'
import { Message } from 'element-ui';
import router from '../../router';

var headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
var instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 50000,
  transformRequest: [function (data) {
     let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
     return ret
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'auth':sessionStorage.getItem('auth')
  }
});

instance.interceptors.response.use(function (response) {
	if(response.data.code !== '000000'){
		Message.error(response.data.msg);
    if(response.data.code == 'E100000' || response.data.code == 'E000015'){
      router.push({name:'Login'});
      sessionStorage.removeItem('auth')
    }
		return false;
	}
  if(!sessionStorage.getItem('auth')){
      sessionStorage.setItem('auth',response.data.body.token)
      instance.defaults.headers['auth'] = sessionStorage.getItem('auth');
  }
	return response.data.body || true;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance