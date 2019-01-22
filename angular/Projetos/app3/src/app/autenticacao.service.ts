import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase'

export class AutenticacaoService{

    public cadastrarUsuario(usuario:Usuario):void{
        // console.log("chegamos ate o serviço: ", usuario)
        firebase.auth()
            .createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any)=>{

                //remover senha do atributo senha do objeto usuario
                delete usuario.senha

                //registrando dados complementares do usuario no path email na base 64
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
            })
            .catch((error:any)=>{
                console.log(error)
            })
    }

    public autenticar(email: string, senha: string): void{
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta:any)=>{
                console.log(resposta)
            })
            .catch((error: any)=>{
                console.log(error)
            })
    }
}