
import AuthService from '../../services/authService'
export const LOGIN='LOGIN'
export const login = (params) => dispath =>{
   return AuthService.login(params).then(data =>{
       console.log(data)
       dispath({type:LOGIN,payload:data})
   }).catch(err =>{
       console.log(err)
   })

}