const initialState = {
    user : [],
    err : null
}

const crudReducer = (state=initialState , action) => {
    switch(action.type){
        case 'viewuser' : 
            return {
                ...state,
                user : action.payload,
                error : null
            }

        case 'viewusererr' :
            return {
                ...state,
                error : action.payload
            }

        case 'addrecord' :
             return {
                ...state,
                user : [...state.user],
                error : null
            }

        case 'deleteUser' :
            return {
                ...state,
                user : state.user.filter(val => val.id != action.payload),
                error : null
            }

            case 'edit':
                let up=state.user.map((val)=>{
                  if(val.id === action.payload.id){
                    val.email = action.payload.email,
                    val.task = action.payload.task,
                    val.status = action.payload.status
                  }
                  return val;
                })
                return{
                  ...state,
                  user:up,
                }

                case 'editerr':
                return{
                  ...state,
                  err:null
                }


        default :
            return state
    }
}


export default crudReducer