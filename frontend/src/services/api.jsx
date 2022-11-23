import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/api/v1"
})


export const createUser = async (name, cpf, email,password,dataNascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tiposanguineo) =>{
    // const values = JSON.stringify({name, cpf, email,password,dataNascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tiposanguineo});
    // const user = await api.post('/usuario',values);   
    const user = await api.post('/usuario',{name, cpf, email,password,dataNascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tiposanguineo});   
    return user.data;
}

export const returnUser = async() => {
     const user = await api.get('/usuario');
     return user.data;
}

export const returnOrgao = async() => {
    const orgao = await api.get('/orgao');
    return orgao.data;
}

export const returnInstituicao = async() => {
    const instituicao = await api.get('/instituicao');
    return instituicao.data;
}
