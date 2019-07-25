import {Module} from 'vuex';


const module: Module<any, any> = {
    namespaced: true,
    state:{
        snackbar:{
            message: '',
            show:false,
            color: ''
        }
        
    },

    
    mutations:{
      mutationOpenSnackbar(state, payload){
            state.snackbar.message = payload.message
            state.snackbar.color = payload.color
            state.snackbar.show = true

    },
    mutatiionCloseSnackbar(state, payload){
        state.snackbar.show = false
    },

},
    actions:{
        showSnackbar(context: any, payload){
            context.commit('mutationOpenSnackbar', payload)

        },
        showSuccessSnackbar(context, message){
            context.commit('mutationOpenSnackbar',{
                message: message, 
                color: 'success'
            })
        },
        showErrosSnackbar(context, message){
            context.commit('mutationOpenSnackbar',{
                message: message, 
                color: 'error'
            })
        },
        showWarningSnackbar(context, message){
            context.commit('mutationOpenSnackbar',{
                message: message, 
                color: 'warning'
            })
        },
        showInfoSnackbar(context, message){
            context.commit('mutationOpenSnackbar',{
                message: message, 
                color: 'info'
            })
        },


        closeSnackbar(context){
            context.commit('mutationCloseSnackbar')
        }
    }
    
}

export default module;