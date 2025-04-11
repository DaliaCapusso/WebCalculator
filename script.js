//variaveis
let expressao = window.document.getElementById("expressao")
let expressao1 = ""
let caracteres = "%-+/.x^"
//Eventos
//Funçoes
function clicar(x){
    if(expressao1.length == 0 && (x== '+' || x== 'x' || x== '/' || x== '%' || x== '.' || x== '^')){

    }else{
        if("+/-x%.^".includes(expressao1.charAt(expressao1.length-1)) & "+x-/%.^".includes(x)){

        } else{ 
            expressao1 += x
            expressao.textContent = expressao1}
        }  
}
function apagar(){
    expressao1= ''
    expressao.textContent = '00'
}
function eliminar(){
    expressao1 = expressao1.replace(expressao1.charAt(expressao1.length-1),'')
    expressao.textContent = expressao1 
    if(expressao1.length == 0){
        expressao.textContent = '00'
    }
}
function igual(){
    expressao1 = expressao1.replaceAll('%', '*'+1/100)
                 .replaceAll('x', '*')
                 .replaceAll('^','**')
    expressao.textContent = eval(expressao1)
    expressao1 = ''
    
}