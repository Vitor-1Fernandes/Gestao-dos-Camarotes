const contratos = [
  {
    id: 510,
    numero: "510",
    nome: "FLEX AUTOMOTIVE",
    inicio: "01/03/2025",
    termino: "31/12/2025",
    precoCamarote: 360000,
    precoCatering: 80000,
    precoTotal: 440000,
    parcelaCamarote: 36000,
    dataVencimento: 10,
    ingressos: 15,
    catering: "BASICO",
    status: "ASSINADO"
  },
  {
    id: 511,
    numero: "511",
    nome: "DI MILANO",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: 360000,
    precoCatering: 84000,
    precoTotal: 444.000,
    parcelaCamarote: 30000,
    dataVencimento: 10,
    ingressos: 12,
    catering: "INTERMEDIARIO",
    status: "ASSINADO"
  },
  {
    id: 512,
    numero: "512",
    nome: "VICE PRESIDENCIA - OSMAR",
    inicio: "N/A",
    termino: "N/A",
    precoCamarote: "N/A",
    precoCatering: "N/A",
    precoTotal: "N/A",
    parcelaCamarote: "N/A",
    dataVencimento: "N/A",
    ingressos: 15,
    catering: "N/A",
    status: "USO-INTERNO"
  },
  {
    id: 513,
    numero: "513",
    nome: "USO INTERNO",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: 432000,
    precoCatering: 72000,
    precoTotal: 504000,
    parcelaCamarote: 36000,
    dataVencimento: 10,
    ingressos: 15,
    catering: "BASICO",
    status: "NEGADO"
  },
  {
    id: 514,
    numero: "514",
    nome: "GUERINO E LIMA",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: 324000,
    precoCatering: 84000,
    precoTotal: 408000,
    parcelaCamarote: 32400,
    dataVencimento: 10,
    ingressos: 12,
    catering: "INTERMEDIARIO",
    status: "ASSINADO"
  },
  {
    id: "515",
    numero: "515",
    nome: "PORTE ENGENHARIA",
    inicio: "28/06/2024",
    termino: "31/12/2025",
    precoCamarote: 540000,
    precoCatering: 170000,
    precoTotal: 710000,
    parcelaCamarote: 41750,
    dataVencimento: 10,
    ingressos: 15,
    catering: "INTERMEDIARIO",
    status: "ASSINADO"
  },
  {
    id: 516,
    numero: 516,
    nome: "ELRING KLINGER",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: 399000,
    precoCatering: 120000,
    precoTotal: 519000,
    parcelaCamarote: "UNICA",
    dataVencimento: 20,
    ingressos: 15,
    catering: "VIP",
    status: "ASSINADO"
  },
  {
    id: 517,
    numero: "517",
    nome: "VOCÊ SEGURADORA",
    inicio: "05/10/2024",
    termino: "31/12/2025",
    precoCamarote: 615000,
    precoCatering: 150000,
    precoTotal: 765000,
    parcelaCamarote: 51250,
    dataVencimento: 10,
    ingressos: 15,
    catering: "VIP",
    status: "ASSINADO"
  },
  {
    id: 518,
    numero: "518",
    nome: "TORTORO, MADUREIRA E RAGAZZI",
    inicio: "01/09/2024",
    termino: "31/08/2025",
    precoCamarote: 371000,
    precoCatering: 114000,
    precoTotal: 485000,
    parcelaCamarote: 31000,
    dataVencimento: 10,
    ingressos: 15,
    catering: "VIP",
    status: "ASSINADO"
  },
  {
    id: 519,
    numero: "519",
    nome: "KALUNGA",
    inicio: "01/04/2015",
    termino: "01/04/2025",
    precoCamarote: 4200000,
    precoCatering: 1200000,
    precoTotal: 5400000,
    parcelaCamarote: 35000,
    dataVencimento: "N/A",
    ingressos: 15,
    catering: "VIP",
    status: "RENOVACAO",
    posicao: "Escanteio"
  }
];

const itemcontainer = document.getElementById("itens");

function renderSuits(list) {
  list.forEach(camarote => {
    const div = document.createElement("div");
    div.className = "item";
    div.id = `${camarote.id}`;
    div.innerHTML = `
      <img src='${camarote.src}'> </img>
       <div class="boxh3">
                    <table class="tabela">
                        <h3>${camarote.nome}</h3>
                        <tr>
                            <th>Nº</th>
                            <th>Início</th>
                            <th>Término</th>
                            <th>Valor do Camarote</th>
                            <th>Valor do Catering</th>
                            <th>Valor Total</th>
                            <th>Parcela</th>
                        </tr>
                        <tr>
                            <td>${camarote.numero}</td>
                            <td>${camarote.inicio}</td>
                            <td>${camarote.termino}</td>
                            <td>${camarote.precoCamarote}</td>
                            <td>${camarote.precoCatering}</td>
                            <td>${camarote.precoTotal}</td>
                            <td>${camarote.parcelaCamarote}</td>
                        </tr>
                    </table>
                    <table class="tabela">
                        <tr>
                            <th>Vencimento</th>
                            <th>Ingressos</th>
                            <th>Catering</th>
                            <th>Status</th>
                            <th>Posição</th>
                        </tr>
                        <tr>
                            <td>${camarote.dataVencimento}</td>
                            <td>${camarote.ingressos} Ingressos</td>
                            <td>${camarote.catering}</td>
                            <td>${camarote.status}</td>
                            <td>{camarote.posicao}</td>

                        </tr>
                    </table>
                </div>
    `;
    itemcontainer.appendChild(div);
  });
}
renderSuits(contratos);

// Mostra todos os itens na tela e apaga as mensagens de erro
function mostraTodos() {
  for (i = 0; i < contratos.length; i++) {
    document.getElementById(contratos[i].id).style.display = 'flex';
  }
  document.getElementById('mensagem').style.display = 'none';
}

// Apaga todos os itens na tela
function apagaTodos() {
  for (i = 0; i < contratos.length; i++) {
    document.getElementById(contratos[i].id).style.display = 'none';
  }
}

// Filtra de acordo com as propriedadas recebidas na função
function filtrar(propriedade, infInput) {

  item = document.getElementById('itens');
  
  item.classList.remove('inputappear');
  item.classList.remove('animationappear');
  void item.offsetWidth;
  item.classList.add('animationappear');

  for (let i = 0; i < contratos.length; i++) {
    if (contratos[i][propriedade] != infInput) {
      document.getElementById(contratos[i].id).style.display = 'none';
    }
  }
  contaHidden();

}

function filtrarCaracteres(input) {

  document.getElementById('suitsize').value = 0;
  document.getElementById('suitcatering').value = 0;
  document.getElementById('suitstate').value = 0;

  item = document.getElementById('itens');
  item.classList.remove('inputappear');
  item.classList.remove('animationappear');
  void item.offsetWidth;
  item.classList.add('animationappear');

  contratos.forEach(function (camarote) {

    const nome = suitname.value.toLowerCase();
    const numeroCam = String(suitnumber.value);

    if (input == 'nome') {
      document.getElementById('suitnumber').value = "";
      if (camarote.nome.toLowerCase().includes(nome)) {
        document.getElementById(camarote.id).style.display = 'flex';
      }
      else {
        document.getElementById(camarote.id).style.display = 'none';
      }
    }
    if (input == 'num') {
      document.getElementById('suitname').value = "";
      if (Number(numeroCam) != 0) {
        if (String(camarote.numero).startsWith(numeroCam)) {
          document.getElementById(camarote.id).style.display = 'flex';
        }
        else {
          document.getElementById(camarote.id).style.display = 'none';
        }
      }
    }
  });
  contaHidden();
}

function contaHidden() {
  let total = 0
  for (i = 0; i < contratos.length; i++) {
    if (document.getElementById(contratos[i].id).style.display == 'none') {
      total = total + 1
    }
  }
  if (total == contratos.length) {
    document.getElementById("mensagem").style.display = "flex";
  }
  else { document.getElementById("mensagem").style.display = "none"; }
}

let apagarFiltro = document.getElementById('btnReset');
apagarFiltro.addEventListener('click', function (event) {

  event.preventDefault();
  item = document.getElementById('itens');

  item.classList.remove('inputappear');
  item.classList.remove('animationappear');
  void item.offsetWidth;
  item.classList.add('animationappear');

  let form = document.getElementById('form');
  form.reset();
  mostraTodos();

})

let filtroClick = document.getElementById('btnSend');
filtroClick.addEventListener('click', function (event) {

  event.preventDefault();

  document.getElementById('suitname').value = "";
  document.getElementById('suitnumber').value = "";

  item = document.getElementById('itens');
  item.classList.remove('inputappear');
  item.classList.remove('animationappear');
  void item.offsetWidth;
  item.classList.add('animationappear');

  // Colhe informação dos input
  numeroInput = document.getElementById('suitnumber').value;
  numeroInput = Number(numeroInput)
  suitcatering = document.getElementById('suitcatering').value
  suitsize = document.getElementById('suitsize').value
  suitstate = document.getElementById('suitstate').value
  suitposition = document.getElementById('suitposition').value

  // Exibe todos os itens
  mostraTodos();

  // Função para filtrar os itens
  if (suitsize != 0) {
    if (suitsize == 2) {
      filtrar('ingressos', 12)
    }
    if (suitsize == 3) {
      filtrar('ingressos', 15)
    }
    if (suitsize == 4) {
      filtrar('ingressos', 33)
    }
  }
  if (suitcatering != 0) {
    if (suitcatering == 2) {
      filtrar('catering', 'BASICO')
    }
    if (suitcatering == 3) {
      filtrar('catering', 'BASICO-JOGO')
    }
    if (suitcatering == 4) {
      filtrar('catering', 'INTERMEDIARIO')
    }
    if (suitcatering == 5) {
      filtrar('catering', 'VIP')
    }
  }
  if (suitstate != 0) {
    if (suitstate == 2) {
      filtrar('status', 'ASSINADO')
    }
    if (suitstate == 3) {
      filtrar('status', 'NEGADO')
    }
    if (suitstate == 4) {
      filtrar('status', 'RENOVACAO')
    }
    if (suitstate == 5) {
      filtrar('status', 'USO-INTERNO')
    }
  }
  if (suitposition != 0){
    if (suitposition == 2){
      filtrar('posicao', 'Escanteio')
    }
  }
  contaHidden();
});


let suitname = document.getElementById('suitname')
suitname.addEventListener('input', function () {
  filtrarCaracteres('nome')
});

let suitnumber = document.getElementById('suitnumber')
suitnumber.addEventListener('input', function () {
  filtrarCaracteres('num')
});


const inverte = { valor: true }
let btnOrdem = document.getElementById('btnOrdem')
btnOrdem.addEventListener('click', function (event) {
  event.preventDefault();
  item = document.getElementById('itens');

  item.classList.remove('inputappear');
  item.classList.remove('animationappear');
  void item.offsetWidth;
  item.classList.add('animationappear');

  if (inverte.valor == true) {
    item.style.flexDirection = "column-reverse";

    document.getElementById('btnOrdem').innerHTML = "Término do Contrato: do mais longe para o mais próximo";
    inverte.valor = false;
  }

  else {
    item.style.flexDirection = "column";

    document.getElementById('btnOrdem').innerHTML = "Término do Contrato: do mais próximo para o mais longe";
    inverte.valor = true;
  }
});