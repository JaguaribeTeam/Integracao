import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";


// Importação das pages
import LoginPage from "./pages/login";
import Cadastro from "./pages/cadastro";
import MainPage from "./pages/main";
import ContinuarCadastro from "./pages/continuar_cadastro";
import ViewPainelDoadores from "./pages/private_pages/view_candidatos_doacao";
import ViewListOrgaos from "./pages/private_pages/view_orgao/view_orgaos";
import UserPerfil from "./pages/private_pages/perfil/perfil";
// fim das pages


import AuthProvider,{ AuthContext } from "./contexts/auth";
import { useContext } from "react";
import ViewReceptores from "./pages/private_pages/view_receptores/view_receptores";
import ViewInstituicoes from "./pages/private_pages/view_insituicao/view_instituicoes";

// Aqui será realizado controle das rotas do login
const AppRouts = () => {
    // Definição da função que restringe as páginas caso usuário não esteja logado
    const Private = ({children}) =>{
        const {autenticado, loading} = useContext(AuthContext);
        
    if(loading){
        return <div className="loading">Carregando....+</div>
    }

    if(!autenticado){
                return <Navigate to={"/login"}/>
                
    };
    return children;
}

    return(
        <Router>
          
          <AuthProvider>

            <Routes>
                 <Route exact path='/' element={<MainPage/>} />
                 <Route exact path='/login' element={<LoginPage/>} />
                 <Route exact path='/cadastro' element={<Cadastro/>}/>
                 <Route exact path='/continuar_cadastro' element={<ContinuarCadastro/>} />

                 <Route exact path="/view-receptores" element= {<ViewReceptores />}/>
                 <Route exact path='/painel-doadores' element={ <ViewPainelDoadores/> } />
                 <Route exact path="/view-instituicao" element= {<ViewInstituicoes />}/>
                 <Route exact path="/view-orgaos" element= {<ViewListOrgaos/>}/>

                 <Route exact path="/perfil" element= { <Private> <UserPerfil/> </Private> }/>

                 

            </Routes>

            </AuthProvider>

        </Router>
    )
}

export default AppRouts;


