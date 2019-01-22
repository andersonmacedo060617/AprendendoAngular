import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase'

export class AutenticacaoService{

    public cadastrarUsuario(usuario:Usuario):void{
        // console.log("chegamos ate o serviço: ", usuario)
        firebase.auth()
            .createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any)=>{
                console.log(resposta)
            })
            .catch((error:any)=>{
                console.log(error)
            })
    }
}