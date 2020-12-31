import {LOGIN} from '../actions/auth'


const initialState = {
    user:{},
    token:'',
    isLoggedIn:false
}
const authreducer = (state = initialState,action) =>{
        
      const {type,paylaod} = action

      switch(type){
         case LOGIN:
             return{
                 ...state,
                 user:paylaod,
                 token:paylaod.token,
                 isLoggedIn:true
             }
         default: {
             return state
         }
      }
}

export default authreducer