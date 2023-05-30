function OnSobre() {
  document.querySelector('.Sobre').classList.add('On')
}

function OffSobre() {
  document.querySelector('.Sobre').classList.remove('On')
}

function OnResumo() {
  document.querySelector('.Resumo').classList.add('On')
}

function OffResumo() {
  document.querySelector('.Resumo').classList.remove('On')
}
function OnPortifolio() {
  document.querySelector('.Portifolio').classList.add('On')
}

function OffPortifolio() {
  document.querySelector('.Portifolio').classList.remove('On')
}
function OnContato() {
  document.querySelector('.Contato').classList.add('On')
}

function OffContato() {
  document.querySelector('.Contato').classList.remove('On')
}

function OnMenuMobile() {
  var elemento = document.getElementById('OK')
  if (elemento.className.indexOf('MenuMobile On') != -1) {
    document.querySelector('.MenuMobile').classList.remove('On')
    document.querySelector('.Nav').classList.remove('AnimationOn')
    document.querySelector('.Nav').classList.add('AnimationOff')
  } else {
    document.querySelector('.MenuMobile').classList.add('On')
    document.querySelector('.Nav').classList.remove('AnimationOff')
    document.querySelector('.Nav').classList.add('AnimationOn')
  }
}

function OnSobreMobile() {
    document.querySelector('.ReMo').classList.remove('On')
    document.querySelector('.PoMo').classList.remove('On')
    document.querySelector('.CoMo').classList.remove('On')

    document.querySelector('.SoMO').classList.add('On')
}

function OnResumoMobile() {
    document.querySelector('.SoMO').classList.remove('On')
    document.querySelector('.PoMo').classList.remove('On')
    document.querySelector('.CoMo').classList.remove('On')

    document.querySelector('.ReMo').classList.add('On')
}

function OnPortifolioMobile() {
  document.querySelector('.SoMO').classList.remove('On')
  document.querySelector('.CoMo').classList.remove('On')
  document.querySelector('.ReMo').classList.remove('On')

  document.querySelector('.PoMo').classList.add('On')
}

function OnDesenvolvimentoWeb() {
  document.querySelector('.DesenvolvimentoApp').classList.remove('On')
  document.querySelector('.Exercicios').classList.remove('On')
  document.querySelector('.DesenvolvimentoWeb').classList.add('On')
}

function OnExercicios() {
  document.querySelector('.DesenvolvimentoWeb').classList.remove('On')
  document.querySelector('.DesenvolvimentoApp').classList.remove('On')
  document.querySelector('.Exercicios').classList.add('On')
}

function OnDesenvolvimentoApp() {
  document.querySelector('.DesenvolvimentoWeb').classList.remove('On')
  document.querySelector('.Exercicios').classList.remove('On')
  document.querySelector('.DesenvolvimentoApp').classList.add('On')
}

function OnContatoMobile() {
  document.querySelector('.SoMO').classList.remove('On')
  document.querySelector('.ReMo').classList.remove('On')
  document.querySelector('.PoMo').classList.remove('On')

  document.querySelector('.CoMo').classList.add('On')
}


function OnHT() {
  document.querySelector('.HT').classList.add('On')
}

function OffHT() {
  document.querySelector('.HT').classList.remove('On')
}

function OnCS() {
  document.querySelector('.CS').classList.add('On')
}

function OffCS() {
  document.querySelector('.CS').classList.remove('On')
}

function OnJS() {
  document.querySelector('.JS').classList.add('On')
}

function OffJS() {
  document.querySelector('.JS').classList.remove('On')
}

function OnC() {
  document.querySelector('.C').classList.add('On')
}

function OffC() {
  document.querySelector('.C').classList.remove('On')
}

function OnCPlus() {
  document.querySelector('.CPlus').classList.add('On')
}

function OffCPlus() {
  document.querySelector('.CPlus').classList.remove('On')
}

function OnJava() {
  document.querySelector('.Java').classList.add('On')
}

function OffJava() {
  document.querySelector('.Java').classList.remove('On')
}

window.onresize = function () {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  if (w < 800) {
    document.querySelector('.Contato').classList.remove('On')
    document.querySelector('.Portifolio').classList.remove('On')
    document.querySelector('.Resumo').classList.remove('On')
    document.querySelector('.Sobre').classList.remove('On')
  } else {
    document.querySelector('.Sobre').classList.add('On')
  }
}
