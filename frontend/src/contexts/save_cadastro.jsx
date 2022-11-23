import React, {useState,createContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const CadastroContext = createContext();

const RegisterUser = () => {

    const navigate = useNavigate();
    const [nomeUser, setNameUser] = useState('');
    const [email, setEmail] = useState('');

    // // useEffect


    // return ( 

    //  );
}
 
export default RegisterUser;


