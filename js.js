

var btnEnviar = document.querySelectorAll('button')[0];
var tabela = document.querySelectorAll('#saida table');


var produto = new Object()
let array = []; 
let id;

btnEnviar.onclick = function(){


    let produto =  {};
    
    var seletor = document.getElementById('sem');
	var valor = seletor.options[seletor.selectedIndex].value;


    produto.nomeComida =  document.querySelectorAll('input')[0].value;
    produto.nomeSemana = valor
    produto.id = array.length;
    
   if(validaCampos(produto) == true ) {
    adicionar(produto);
    listarTabela();
    limpar();
   }

    console.log(produto);
 

}
function adicionar(produto){
    produto.id = array.length;
    array.push(produto);
    console.log(array);



}


function validaCampos(produto){
         let msg = '';
    if(produto.nomeComida == ''){
        msg += "Informe o nome da Comida";
    }

    if(msg != ''){
        alert(msg)
        return false;
    }

    return true;
 



}

function listarTabela(){

    var saida = document.getElementById('saida');
    var escolha = 0;


 
       var seletor = document.getElementById('sem');
       var valor = seletor.options[seletor.selectedIndex].value;
       produto.nomeSemana = valor
       produto.nomeComida =  document.querySelectorAll('input')[0].value;
       

       switch(seletor.options[seletor.selectedIndex].value){
        case 'segunda':
            
            escolha =2;
            break;
         case 'terça':

            escolha =3;
            break;
        case 'quarta':
            console.log("quarta");
            escolha =4;
            break;
        case 'quinta':
            console.log("quinta");
            escolha =5;
            break;
        case 'sexta':
            console.log("sexta");
            escolha =6;
            break;
        case 'sabado':
            console.log("sabado");
            escolha =7;
            break;
        case 'domingo':
            console.log("domingo");
            escolha =8;
            break;
       }
       let tr;

console.log(escolha)
produto.id = array.length;
    let div = document.createElement('div');
    switch(escolha){
        case 2:
            
        div.innerHTML = `<nav><span><button class="botaoExcluir" id="${produto.id}"><i class="edit fas fa-trash"></i></button>${produto.nomeComida}<button class="botaoEditar"><i class="edit fas fa-edit"></i></button></span><span></span><span></span><span></span><span></span><span></span><span></span></nav>`;
        saida.appendChild(div);
        break;
        case 3:
        div.innerHTML = `<nav><span></span><span><button class="botaoExcluir" id="${produto.id}"><i class="edit fas fa-trash"></i></button>${produto.nomeComida}<button class="botaoEditar"><i class="edit fas fa-edit"></i></button></span><span></span><span></span><span></span><span></span><span></span></nav>`;
         saida.appendChild(div);
        break;
         case 4:
        div.innerHTML = `<nav><span></span><span></span><span><button class="botaoExcluir" id="${produto.id}"><i class="edit fas fa-trash"></i></button>${produto.nomeComida}<button class="botaoEditar"><i class="edit fas fa-edit"></i></button></span><span></span><span></span><span></span><span></span></nav>`;
         saida.appendChild(div);
        break;
         case 5:
        div.innerHTML = `<nav><span></span><span></span><span></span><span><button class="botaoExcluir" id="${produto.id}"><i class="edit fas fa-trash"></i></button>${produto.nomeComida}<button class="botaoEditar"><i class="edit fas fa-edit"></i></button></span><span></span><span></span><span></span></nav>`;
         saida.appendChild(div);
        break;
         case 6:
        div.innerHTML = `<nav><span></span><span></span><span></span><span></span><span><button class="botaoExcluir" id="${produto.id}"><i class="edit fas fa-trash"></i></button>${produto.nomeComida}<button class="botaoEditar"><i class="edit fas fa-edit"></i></button></span><span></span><span></span></nav>`;
         saida.appendChild(div);
        break;
         case 7:
        div.innerHTML = `<nav><span></span><span></span><span></span><span></span><span></span><span><button class="botaoExcluir" id="${produto.id}"><i class="edit fas fa-trash"></i></button>${produto.nomeComida}<button class="botaoEditar"><i class="edit fas fa-edit"></i></button></span><span></span></nav>`;
         saida.appendChild(div);
        break;
         case 8:
        div.innerHTML = `<nav><span></span><span></span><span></span><span></span><span></span><span></span><span><button class="botaoExcluir" id="${produto.id}"><i class="edit fas fa-trash"></i></button>${produto.nomeComida}<button class="botaoEditar"><i class="edit fas fa-edit"></i></button></span></nav>`;
         saida.appendChild(div);
        break;
    }




for (let i = 0; i < array.length; i++) {
    let elemento = document.querySelectorAll('#saida nav span button')[i];
    let botaoExcluir = div.querySelector('.botaoExcluir');
    botaoExcluir.onclick = function() {
      array.splice(elemento.id, 1);
      div.innerHTML = '';
      let buttons = document.querySelectorAll('#saida nav span button');
      buttons.forEach(function(button) {
        button.onclick = function() {
          let index = button.id;
          array.splice(index, 1);
          let divPai = button.closest('div');
          divPai.remove();
          listarTabela();
        }
      });
    }
  }

let botaoEditar = div.querySelector('.botaoEditar');
botaoEditar.addEventListener('click', function() {
    editar();
  });





}

function limpar(){
    document.querySelectorAll('input')[0].value = ' ';
    document.getElementById('sem').value = 'segunda'
}



function editar(){
    let p1 = document.querySelectorAll('p')[0];
    let p2 = document.querySelectorAll('p')[1];
 let form = document.querySelector('#nomeDoIdDoFormulario');
    let novoLabel = document.createElement("label");
    novoLabel.textContent = "Insira o valor novo";
    form.appendChild(novoLabel);

    p1.classList.toggle("adicionar");


    let input = document.querySelector('#nomeDoIdInput');
    let novoinput = document.createElement("input");
    novoinput.classList.toggle("dados2");

    input.appendChild(novoinput);

 


}






