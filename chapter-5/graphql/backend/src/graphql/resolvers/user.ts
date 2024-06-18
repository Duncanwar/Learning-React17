//Lib
import {getUserData} from '../../lib/jwt'

// Interfaces 
import {
    IUser,
    ICreateUserInput,
    IModels,
    ILoginInput,
    IAuthPayLoad
} from '../../types';

// Utils
import {doLogin, getUserBy} from '../../lib/auth'

export default{
    Query:{
        getUsers:(  _:any,
            args:any,
            {models}:{models:IModels}): IUser[]=>models.User.findAll(),
        getUserData:()=>{},
    },
    Mutation:{
        createUser:()=>{},
        login:()=>{},
    }
}