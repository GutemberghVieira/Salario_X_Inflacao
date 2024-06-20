
import RespostaUser from "readline-sync";
console.log()
let Apresentacao ="Salario X Inflação | 2008 - 2024";

//Apresentação do programa
console.log( `${'|_'.padStart(20, ".")} ${Apresentacao} ${'_|'.padEnd(20, ".")}`);

//Apresentação das funções do programa
console.log("\n(1) - Listar os salários mínimos de 2008 - 2024");
console.log("(2) - Listar o índice do IPCA de 2008 - 2024");
console.log("(3) - Comparação entre o percentual de aumento salarial e o IPCA");

//Qual ação o usuário escolhe
let escolhaUser = Number(RespostaUser.question("\nQual Opção você escolhe? \nObs:só pode números de 1 a 3 "));


//Menu porcentagem de salário por ano
let percentage_Aumento_Salario  ="415 ,465 ,510 ,545 ,622 ,678 ,724 ,788 ,880 ,937 ,954 ,998 ,1.045 ,1.100 ,1.212 ,1320 ,1412 ";

let Aumento_PorAno = "9.21% ,12.05% ,9.68% ,6.81% ,14.13% ,9.00% ,6.78% ,8.84% ,11.68% ,6.48% ,1.81% ,4.61% ,4.69% ,5.26%,10.18% ,7.43% ,1.38% ,6.97% ";

let Array_Salarial = percentage_Aumento_Salario.split(",")
let Array_Aumento  = Aumento_PorAno.split(",")


//Menu da inflação por ano
let inflacao = [
5.90,
4.31,
5.91,
6.50,
5.84,
5.91,
6.41,
10.67,
6.29,
2.95,
3.75,
4.31,
4.52,
10.06,
5.78,
4.62,
1.80
]

let PIB_Por_Ano = [
"R$3,110trilhões",
"R$3,333trilhões",
"R$3,886trilhões",
"R$4,376trilhões",
"R$4,815trilhões",
"R$5,332trilhões",
"R$5,779trilhões",
"R$5,996trilhões",
"R$6,269trilhões",
"R$6,585trilhões",
"R$7,004trilhões",
"R$7,389trilhões",
"R$7,610trilhões",
"R$9,012trilhões",
"R$10,080trilhões",
"R$10,856trilhões",
"R$2,714trilhões"
]

switch(escolhaUser)
{

//Aumento de salário de 2008 - 2024
case 1:

let anos = new Date("01-01-2008");

let getAno = anos.getFullYear()

for(let percorreAno = 0 ; percorreAno < 18; percorreAno++)
{

if(getAno <= 2024)
{
let pickAno = getAno - 1 

//Conta do salário mínimo


console.log(    
`
Aumento Salarial : ${"".padEnd(30,".")} ${Array_Salarial[percorreAno].replace(" ", ",00R$")}
Aumento por Ano  : ${"".padEnd(30, ".")} ${Array_Aumento[percorreAno].replace(".",",")} de ${pickAno} a ${getAno}
`
)

getAno += 1
}
}   

break;


//Inflação de 2008 até 2024
case 2:
console.log("Você escolheu - 2 Listar o índice do IPCA de 2008 - 2024")

let data = new Date("01-01-2008")

let AnoIPCA = data.getFullYear()

for(let percorreAno = 0; percorreAno < 17; percorreAno++){
console.log(`
Ano         : ${"".padEnd(30,".")}${AnoIPCA}
IPCA        : ${"".padEnd(30,".")}${inflacao[percorreAno].toFixed(2)}%
PIB do Ano  : ${"".padEnd(30,".")}${PIB_Por_Ano[percorreAno].replace("trilhões", "tri")}
`)

AnoIPCA += 1   

}

break;


//3 - Comparação entre o percentual de aumento salarial e o IPCA
case 3:
console.log("Você escolheu - 3 Comparação entre o percentual de aumento Salarial e o IPCA");

let data_IPCA_SALARIAL = new Date("01-01-2008")

let Data =  data_IPCA_SALARIAL.getFullYear() 
let contador = 0
let contadordois = -1

while(contador < 17)
{

let NumeroSalarialAnterior = Number(Array_Salarial[contadordois]) 
let NumeroSalarialAtual    = Number(Array_Salarial[contador])

let diferenca =  NumeroSalarialAtual - NumeroSalarialAnterior 

let Porcentagem_De_Aumento =  (diferenca / NumeroSalarialAnterior ) * 100

let Transformar_Porcentagem = String(Porcentagem_De_Aumento.toFixed(2)) + "%"

if(Data <= 2024)
{

console.log(`
Ano                             : ${"".padEnd(30,".")}${Data}
Aumento de Salario              : ${"".padEnd(30,".")}${Array_Salarial[contador].replace(" ", ",00R$")}
Porcentagem de aumento Salarial : ${"".padEnd(30,".")}${Transformar_Porcentagem.replace(NaN +"%", "-")} 
Inflação                        : ${"".padEnd(30,".")}${inflacao[contador]}%
`)    

Data++
}
    
contador++     
contadordois += 1
}

break;

default:
console.log("Escolha inválida")    
break;

}