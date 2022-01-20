/* -------- Input do cabeçalho --------  */

function gerarpdf() {

    var input = document.getElementById('tecnico').value;
    document.getElementById("tecnico-resposta").innerHTML = input;

}

function gerarpdf2() {

    var input = document.getElementById('kminicial').value;
    document.getElementById("kminicial-resposta").innerHTML = input;
}

function gerarpdf3() {

    var input = document.getElementById('operador').value;
    document.getElementById("operador-resposta").innerHTML = input;
}

function gerarpdf4() {

    var input = document.getElementById('acompanhantes').value;
    document.getElementById("acompanhantes-resposta").innerHTML = input;
}

function gerarpdf5() {

    var input = document.getElementById('corredor').value;
    document.getElementById("corredor-resposta").innerHTML = input;
}

function gerarpdf6() {

    var input = document.getElementById('supervisao').value;
    document.getElementById("supervisao-resposta").innerHTML = input;
}

function gerarpdf7() {

    var input = document.getElementById('trechos').value;
    document.getElementById("trechos-resposta").innerHTML = input;
}

function gerarpdf8() {

    var input = document.getElementById('kmfinal').value;
    document.getElementById("kmfinal-resposta").innerHTML = input;
}

function gerarpdf9() {

    var input = document.getElementById('total').value;
    document.getElementById("total-resposta").innerHTML = input;
}

function gerarpdf16() {

    var e = document.getElementById("equipamento");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    document.getElementById("equipamento-resposta").innerHTML = text;
    
}

/* ------- Input de defeitos ------- */

function gerarpdf10() {

    var input = document.querySelector('#num-interdicoes').value;
    document.getElementById("interdicoes-resposta").innerHTML = input;
}

function gerarpdf11() {

    var input = document.querySelector('#num-restricoes').value;
    document.getElementById("restricoes-resposta").innerHTML = input;
}

function gerarpdf12() {

    var input = document.querySelector('#num-zonaquente').value;
    document.getElementById("zonaquente-resposta").innerHTML = input;
}

function gerarpdf13() {

    var input = document.querySelector('#num-p0').value;
    document.getElementById("p0-resposta").innerHTML = input;
}

function gerarpdf14() {

    var input = document.querySelector('#num-p1').value;
    document.getElementById("p1-resposta").innerHTML = input;
}

function gerarpdf15() {

    var input = document.querySelector('#num-p2').value;
    document.getElementById("p2-resposta").innerHTML = input;
}

/* ----- Input dos comentários ----- */

function gerarpdf17() {

    var input = document.querySelector('#obs-foto1').value;
    document.getElementById("obs-resposta1").innerHTML = input;
}

function gerarpdf18() {

    var input = document.querySelector('#obs-foto2').value;
    document.getElementById("obs-resposta2").innerHTML = input;
}

function gerarpdf19() {

    var input = document.querySelector('#obs-foto3').value;
    document.getElementById("obs-resposta3").innerHTML = input;
}

function gerarpdf20() {

    var input = document.querySelector('#obs-foto4').value;
    document.getElementById("obs-resposta4").innerHTML = input;
}

function gerarpdf21() {

    var input = document.querySelector('#obs-foto5').value;
    document.getElementById("obs-resposta5").innerHTML = input;
}

function gerarpdf22() {

    var input = document.querySelector('#obs-foto6').value;
    document.getElementById("obs-resposta6").innerHTML = input;
}
function gerarpdf23() {

    var input = document.querySelector('#obs-foto7').value;
    document.getElementById("obs-resposta7").innerHTML = input;
}

function gerarpdf24() {

    var input = document.querySelector('#obs-foto8').value;
    document.getElementById("obs-resposta8").innerHTML = input;
}

function gerarpdf25() {

    var input = document.querySelector('#obs-foto9').value;
    document.getElementById("obs-resposta9").innerHTML = input;
}

function gerarpdf26() {

    var input = document.querySelector('#obs-foto10').value;
    document.getElementById("obs-resposta10").innerHTML = input;
}

function gerarpdf27() {

    var input = document.querySelector('#obs-foto11').value;
    document.getElementById("obs-resposta11").innerHTML = input;
}

function gerarpdf28() {

    var input = document.querySelector('#obs-foto12').value;
    document.getElementById("obs-resposta12").innerHTML = input;
}

/* Macro 20 */

function gerarpdf29() {

    var input = document.querySelector('#tempo-hi').value;
    document.getElementById("resposta-hi").innerHTML = input;
}

function gerarpdf30() {

    var input = document.querySelector('#tempo-ht').value;
    document.getElementById("resposta-ht").innerHTML = input;
}

function gerarpdf31() {

    var input = document.querySelector('#tempo-hp').value;
    document.getElementById("resposta-hp").innerHTML = input;
}

function gerarpdf32() {

    var input = document.querySelector('#tempo-hd').value;
    document.getElementById("resposta-hd").innerHTML = input;
}

function gerarpdf33() {

    var input = document.querySelector('#tempo-fp').value;
    document.getElementById("resposta-fp").innerHTML = input;
}

function gerarpdf34() {

    var input = document.querySelector('#tempo-ff').value;
    document.getElementById("resposta-ff").innerHTML = input;
}

function gerarpdf35() {

    var input = document.querySelector('#tempo-pc').value;
    document.getElementById("resposta-pc").innerHTML = input;
}

function gerarpdf36() {

    var input = document.querySelector('#tempo-abs').value;
    document.getElementById("resposta-abs").innerHTML = input;
}

function gerarpdf37() {

    var input = document.querySelector('#tempo-av').value;
    document.getElementById("resposta-av").innerHTML = input;
}

function gerarpdf38() {

    var input = document.querySelector('#tempo-mns').value;
    document.getElementById("resposta-mns").innerHTML = input;
}

function gerarpdf39() {

    var input = document.querySelector('#tempo-mp').value;
    document.getElementById("resposta-mp").innerHTML = input;
}

function gerarpdf40() {

    var input = document.getElementById('motivo-av').value;
    document.getElementById("resposta-motivo-av").innerHTML = input;
}

function gerarpdf41() {

    var input = document.getElementById('motivo-mns').value;
    document.getElementById("resposta-motivo-mns").innerHTML = input;
}

function gerarpdf42() {

    var input = document.getElementById('motivo-mp').value;
    document.getElementById("resposta-motivo-mp").innerHTML = input;
}

/* parte das observações gerais */

function gerarpdf43() {

    var input = document.getElementById('texto-consideracoes').value;
    document.getElementById("resposta-observacoes").innerHTML = input;
}

function gerarpdf44() {

    var input = document.getElementById('programacao').value;
    document.getElementById("programacao-resposta").innerHTML = input;
}

/* gera uma nova página com as respostas  */
    
function criarpdf() {
    
    var relatorio = document.getElementById('relatorio').innerHTML;
    var win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head><title>relatório_ultrassom</title><link rel="stylesheet" type="text/css" href="style.css"></head><body>');
    win.document.write(relatorio).html();
    win.document.write('</body></html>');
    win.document.write(prints)
    win.document.close();
    win.print();
}




    


    

