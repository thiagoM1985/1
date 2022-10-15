/*
nosso objetivo: quando clicarmos na aba temos que mostrar 
o conteudo da aba que foi clicada pelo usuario e esconder
 o conteudo da aba anterior

1 passo: dar um jeito de pegar os elementro presentes na aba do html

2 passo: dar um jeito de identificar o clique no elemento da aba

3 passo: quando o usuario clicar, desmarcar a aba selecionada

4 passo: marcar a aba clicada como selecionado

5 passo: esconder o conteudo anterior

6 passo: mostrar  o conteudo da aba selecioanda 
*/

// 1 passo: dar um jeito de pegar os elemento presentes na aba do html
const abas = document.querySelectorAll(".aba");
//2 passo: dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba=>{
    aba.addEventListener("click",function(){

        if(aba.classList.contains("selecionado"))
            return;

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)
       
    });
});
function selecionarAba(aba){
        //3  passo: quando o usuario clicar, desmarcar a aba selecionada
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");
        //4 passo: marcar a aba clicada como selecionado
        aba.classList.add("selecionado")
}
function mostrarInformacoesDaAba(aba){
    //5 passo: esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    //6 passo: mostrar  o conteudo da aba selecioanda 
    const idDoElementoDeInformacoesDaAba = "informacao-"+aba.id; 
    const infAMostra = document.getElementById(idDoElementoDeInformacoesDaAba)
    infAMostra.classList.add("selecionado")
}


