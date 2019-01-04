import {PipeTransform, Pipe} from '@angular/core'
import { text } from '@angular/core/src/render3';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
    transform(texto: string, truncarEm: number, iniciarEm: number):string {
        if(texto.length > truncarEm){
            return texto.substr(iniciarEm, truncarEm) + '...'
        }

        return texto
    }
    
}