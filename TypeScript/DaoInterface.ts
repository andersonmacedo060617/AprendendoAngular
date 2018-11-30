export default interface DaoInterface{
    nomeTabela: string

    inserir(object: any): boolean
    atualizar(object: any): boolean
    remover(id: number): any
    selecionar(object: any): any
    selecionarTodos(): [any]


}