import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/api/v1"
})


export const createUser = async (nome, cpf, email,senha,dt_nascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tipo_sanguineo) =>{
    // const values = JSON.stringify({name, cpf, email,password,dataNascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tiposanguineo});
    // const user = await api.post('/usuario',values);   
    const user = await api.post('/usuario',{nome, cpf, email,senha,dt_nascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tipo_sanguineo});   
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

export const userLogin = async (email, senha) => {
;
    return  api.post('/login', {email,senha});
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//                  DELETE 
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

export const deleteUser = async (cpf, token) => {
    const delUser = await api.delete(`/usuario/:${cpf}`,{
        headers: {
            authorization: token
        }
    })
    return delUser.data;
}

export const deleteOrgao = async (id) => {
    const delOrgao = await api.delete(`/orgao/:${id}`);
    return delOrgao.data;
}