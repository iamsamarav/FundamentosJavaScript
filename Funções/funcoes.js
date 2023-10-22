let detetive = ""
console.log(detetive)
detetive = "Miss Marple"

//Primeiro momento -> Declaração

function agathaChristie (detetive){
    console.log(detetive)
}

//Segundo momento -> Execução

agathaChristie(`No livro Convite para um homícidio a detetive é a ${detetive}`)

//Formas de escrever função 

function name(params) {
    
}

const livros = () => {

}

function* generatorFunction(){
    yield "Hello"
    yield "Tudo bem?"
    yield "Tchau"
}

const generator = generatorFunction()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

