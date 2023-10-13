//Let
const nome = "Samara"
const sobrenome = "Vitória"
const turma = "4NNB"
data = 'Sem data'

console.log(nome + " " + sobrenome)

nome = "Carla" //Vai dar erro

if(turma == "4NNA"){
    console.log("Sua nota ainda será publicada")
} else{
    let data = '12/10/2023'
    console.log("Turma não encontrada" + " " + data)
    turma = "Sem turma"
}

console.log(turma + " " + data)