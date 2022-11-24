import React, {useState,createContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { api, userLogin } from '../services/api';

export const AuthContext = createContext();



const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);

    },[]);

    const login = async (email, senha) => {

        const response = await userLogin(email, senha);

        // API PARA CRIAR LOGIN
        const loggedUser = response.data.usuarioAutenticado.usuarioAutenticado.nome;

        // const loggedUser = {
        //     id: "123",
        //     senha
        // };
        const token = response.data.usuarioAutenticado.token;
        // Deixar as informações armazenadas
        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('token', JSON.stringify(token));

        // api.defaults.headers.Authorization = `Bearer ${token}`;

        
        setUser(loggedUser);
        navigate("/perfil");
        
      };

    const logout = () =>{
          console.log('logot')
            setUser(null);
            navigate('/');
        };

    return ( 
        <AuthContext.Provider value={{autenticado: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider ;