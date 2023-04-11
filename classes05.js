class Pessoa {
    constructor(jsonObj) {
        this.id = jsonObj.id
        this.nome= jsonObj.nome
        this.cargo = jsonObj.cargo
        this.unidade = jsonObj.unidade
        this.digital = jsonObj.digital
        this.sincrono = jsonObj.sincrono
    }
    descricao() {
        return this.nome + " ("+this.cargo+")"
    }
}

class TodoView {
    static toHTML(todo) {
        return  "<div completed="+todo?.completed+">"+
        "<h2><b>Tarefa</b></h2>"+
        "<p><b>ID: </b>"+todo?.id+"</p>"+
        "<p><b>Descrição: </b>"+todo?.title+"</p>"+
        "<p><b>Situação: </b>"+ (todo?.completed ? '<i>Finalizado</i>' : '<i>Aberto</i>') +"</p>"+
        "</div>"
    }
}

class PessoaView {
    static toHTML(pessoa) {
        return "<div>" +
        "<h2><b>Usuário</b></h2>"+
        "<p><b>ID</b>: "+pessoa?.id+"</p>"+
        "<p><b>Nome</b>: "+pessoa?.nome+"</p>"+
        "<p><b>Cargo</b>: "+ pessoa?.cargo +"</p>"+
        "<p><b>Unidade</b>: "+ pessoa?.unidade +"</p>"+
        "<p><b>Digital</b>: "+ (pessoa?.digital ? '<i>Sim</i>' : '<i>Não</i>') +"</p>"+
        "<p><b>Sincrono</b>: "+ (pessoa?.sincrono ? '<i>Sim</i>' : '<i>Não</i>')+"</p>"+
        "</div>"
    }
}

class Todo {
    constructor(json) {
        this.userId = json.userId
        this.id = json.id
        this.title = json.title
        this.completed = json.completed
    }

    


}


class Repo {
    constructor() {
        this.todos = new Map()
        this.pessoas = new Map()
    }

    addTodo(todo) {
        if (todo.id === 0) {
            todo.id = this.todos.size+1
        }
        if (todo.userId === 0 ) {
            todo.userId = 1
        }
        this.todos.set(todo.id, todo)
    }
    addPessoa(pessoa) {
        if (pessoa.id === 0) {
            pessoa.id = this.pessoas.size+1
        }
        this.pessoas.set(pessoa.id, pessoa)
    }
    getTodo(id) {
        return this.todos.get(Number(id))
    }
    getAllTodos(){
        return this.todos;
    }
    getPessoa(id) {
        return this.pessoas.get(Number(id))
    }
    getTodosByUserId(userId){
        const filtered = new Map(
            Array.from(this.todos).filter(([_key, value]) => {
              if (value.userId === userId) {
                return true;
              }
          
              return false;
            }),
          );
          
          console.log(filtered);
          return filtered;
    }
}