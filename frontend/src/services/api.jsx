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

export const returnUserCPF = async(cpfUser) => {
    const user = await api.get(`/usuario/${cpfUser}` );
    return user.data;
}

export const returnOrgao = async() => {
    const orgao = await api.get('/orgao');
    return orgao.data;
}

export const insertOrgao = async(nome) => {
    const create = await api.post('/orgao',{nome});
    return create.data;
}

export const returnInstituicao = async() => {
    const instituicao = await api.get('/instituicao');
    return instituicao.data;
}

export const cadastroInsit = async(nome, cnpj, email,cep,logradouro, numero ,complemento,bairro,cidade,estado,telefone) =>{
    const instituicao = await api.post('/instituicao',{ nome, cnpj, email,cep,logradouro, numero,complemento,bairro,cidade,estado,telefone});
    return instituicao.data;
}

export const userLogin = async (email, senha) => {
    return  api.post('/login', {email,senha});
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//                  DELETE 
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

export const deleteUser = async (cpf, token) => {
    const delUser = await api.delete(`/usuario/${cpf}?token=${JSON.parse(token)}`)
    return delUser.data;
}

export const deleteOrgao = async (id,token) => {
    const delOrgao = await api.delete(`/orgao/${id}?token=${JSON.parse(token)}`);
    return delOrgao.data;
}


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//                  EDIT 
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

export const editUser = async (cpfUser, token, nome, cpf, email,senha,dt_nascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tipo_sanguineo) => {
    const edit = await api.put(`/usuario/endereco/${cpfUser}?token=${JSON.parse(token)}`,{nome, cpf, email,senha,dt_nascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tipo_sanguineo})
    return edit.data;
}

