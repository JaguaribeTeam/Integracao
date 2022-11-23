import React, {useState,createContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


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

    const login = (email, password) => {

        console.log('login', email,password);

        // API PARA CRIAR LOGIN
        const loggedUser = {
            id:'123',
            email
        };
        // Deixar as informações armazenadas
        localStorage.setItem('user', JSON.stringify(loggedUser));

        if(password === '12345'){
        setUser({loggedUser });
        navigate("/perfil");
        }
        // else{
        //     console.log('foi n')
        // }
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