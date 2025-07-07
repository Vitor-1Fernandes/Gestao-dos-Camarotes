
//Array onde cada objeto representa um camarote
const contratos = [
  {
    id: "502",
    numero2: "",
    nome: "Disponível",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Disponível",
    posicao: "Escanteio",
    imagem: "src/assets/502.jpg"
  },
  {
    id: "503",
    numero2: "",
    nome: "GCS INTERMEDIAÇÃO",
    inicio: "04/04/2024",
    termino: "03/04/2025",
    precoCamarote: "R$233.000,00",
    precoCatering: "R$40.000,00",
    precoTotal: "R$273.000,00",
    parcelaCamarote: "ÚNICA",
    dataVencimento: "Quitado",
    ingressos: "15",
    catering: "Básico",
    status: "Sem contrato",
    posicao: "Escanteio",
    imagem: "src/assets/503.jpg"
  },
  {
    id: "504",
    numero2: "",
    nome: "DHB Consultoria",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$504.000,00",
    precoCatering: "R$168.000,00",
    precoTotal: "R$672.000,00",
    parcelaCamarote: "R$42.000,00",
    dataVencimento: "10",
    ingressos: "21",
    catering: "Básico",
    status: "Assinado",
    posicao: "Escanteio",
    imagem: "src/assets/504.jpg"
  },
  {
    id: "505",
    numero2: "",
    nome: "Lourival Panhozzi",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Disponível",
    posicao: "Grande área",
    imagem: "src/assets/505.jpg"
  },
  {
    id: "506",
    numero2: "",
    nome: "Disponível",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Disponível",
    posicao: "Grande área",
    imagem: "src/assets/506.jpg"
  },
  {
    id: "507",
    numero2: "",
    nome: "Arthur Oliveira",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$360.000,00",
    precoCatering: "R$72.000,00",
    precoTotal: "R$432.000,00",
    parcelaCamarote: "R$30.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Básico",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/507.jpg"
  },
  {
    id: "508",
    numero2: "",
    nome: "LS Import",
    inicio: "27/03/2025",
    termino: "31/12/2025",
    precoCamarote: "R$405.000,00",
    precoCatering: "R$80.000,00",
    precoTotal: "R$485.000,00",
    parcelaCamarote: "R$40.500,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Básico",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/508.jpg"
  },
  {
    id: "509",
    numero2: "",
    nome: "BR Auto Parts",
    inicio: "04/11/2024",
    termino: "31/12/2025",
    precoCamarote: "R$392.000,00",
    precoCatering: "R$84.000,00",
    precoTotal: "R$476.000,00",
    parcelaCamarote: "R$28.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/509.jpg"
  },
  {
    id: "510",
    numero2: "",
    nome: "Flex Automotive",
    inicio: "01/03/2025",
    termino: "31/12/2025",
    precoCamarote: "R$360.000,00",
    precoCatering: "R$80.000,00",
    precoTotal: "R$440.000,00",
    parcelaCamarote: "R$36.000,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Básico",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/510.jpg"
  },
  {
    id: "511",
    numero2: "",
    nome: "Di Milano",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$360.000,00",
    precoCatering: "R$84.000,00",
    precoTotal: "R$444.000,00",
    parcelaCamarote: "R$30.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/511.jpg"
  },
  {
    id: "512",
    numero2: "",
    nome: "Disponível",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "15",
    catering: "-",
    status: "Uso Interno",
    posicao: "Grande área",
    imagem: "src/assets/512.jpg"
  },
  {
    id: "513",
    numero2: "",
    nome: "Disponível",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$432.000,00",
    precoCatering: "R$72.000,00",
    precoTotal: "R$504.000,00",
    parcelaCamarote: "R$36.000,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Básico",
    status: "NEGADO PELA COMPLIANCE",
    posicao: "Grande área",
    imagem: "src/assets/513.jpg"
  },
  {
    id: "514",
    numero2: "",
    nome: "Guerino e Lima",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$324.000,00",
    precoCatering: "R$84.000,00",
    precoTotal: "R$408.000,00",
    parcelaCamarote: "R$32.400,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/514.jpg"
  },
  {
    id: "515",
    numero2: "",
    nome: "Porte Engenharia",
    inicio: "28/06/2024",
    termino: "31/12/2025",
    precoCamarote: "R$540.000,00",
    precoCatering: "R$170.000,00",
    precoTotal: "R$710.000,00",
    parcelaCamarote: "R$41.750,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/515.jpg"
  },
  {
    id: "516",
    numero2: "",
    nome: "Elring Klinger",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$399.000,00",
    precoCatering: "R$120.000,00",
    precoTotal: "R$519.000,00",
    parcelaCamarote: "ÚNICA",
    dataVencimento: "20",
    ingressos: "15",
    catering: "VIP",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/516.jpg"
  },
  {
    id: "517",
    numero2: "",
    nome: "Você Seguradora",
    inicio: "05/10/2024",
    termino: "31/12/2025",
    precoCamarote: "R$615.000,00",
    precoCatering: "R$150.000,00",
    precoTotal: "R$765.000,00",
    parcelaCamarote: "R$51.250,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "VIP",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/517.jpg"
  },
  {
    id: "518",
    numero2: "",
    nome: "Tortoro, Madureira e Ragazzi",
    inicio: "01/09/2024",
    termino: "31/08/2025",
    precoCamarote: "R$371.000,00",
    precoCatering: "R$114.000,00",
    precoTotal: "R$485.000,00",
    parcelaCamarote: "R$31.000,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "VIP",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/518.jpg"
  },
  {
    id: "519",
    numero2: "",
    nome: "Kalunga",
    inicio: "01/04/2015",
    termino: "01/04/2025",
    precoCamarote: "R$4.200.000,00",
    precoCatering: "R$1.200.000,00",
    precoTotal: "R$5.400.000,00",
    parcelaCamarote: "R$35.000,00",
    dataVencimento: "Indefinido",
    ingressos: "15",
    catering: "VIP",
    status: "Renovação",
    posicao: "Meio campo",
    imagem: "src/assets/519.jpg"
  },
  {
    id: "520",
    numero2: "",
    nome: "Crossfox",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$492.000,00",
    precoCatering: "R$84.000,00",
    precoTotal: "R$576.000,00",
    parcelaCamarote: "R$41.000,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/520.jpg"
  },
  {
    id: "521",
    numero2: "",
    nome: "Custom",
    inicio: "17/10/2024",
    termino: "31/12/2025",
    precoCamarote: "R$455.000,00",
    precoCatering: "R$117.000,00",
    precoTotal: "R$572.000,00",
    parcelaCamarote: "R$35.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "VIP",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/521.jpg"
  },
  {
    id: "522",
    numero2: "",
    nome: "Totvs",
    inicio: "04/04/2024",
    termino: "31/12/2026",
    precoCamarote: "R$600.000,00",
    precoCatering: "R$0,00",
    precoTotal: "R$600.000,00",
    parcelaCamarote: "Permuta",
    dataVencimento: "Sem contrato",
    ingressos: "12",
    catering: "VIP",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/522.jpg"
  },
  {
    id: "523",
    numero2: "524",
    nome: "FPF",
    inicio: "01/01/2020",
    termino: "31/12/2026",
    precoCamarote: "?",
    precoCatering: "?",
    precoTotal: "?",
    parcelaCamarote: "?",
    dataVencimento: "Sem contrato",
    ingressos: "24",
    catering: "VIP",
    status: "Sem contrato",
    posicao: "Meio campo",
    imagem: "src/assets/523.524.jpg"
  },
  {
    id: "525",
    numero2: "526",
    nome: "Heating Cooling",
    inicio: "05/10/2024",
    termino: "31/12/2025",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "15",
    catering: "VIP",
    status: "Assinando",
    posicao: "Meio campo",
    imagem: "src/assets/525.526.jpg"
  },
  {
    id: "527",
    numero2: "",
    nome: "Yun Ki Lee + Fernando Perino",
    inicio: "01/04/2024",
    termino: "31/12/2025",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "15",
    catering: "VIP",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/527.jpg"
  }
]  

//Renderiza um container para cada camarote, baseado nos dados do array
const itemcontainer = document.getElementById("itens");
function renderSuits(list) {
  list.forEach(camarote => {
    const div = document.createElement("div");
    div.className = "item";
    div.id = `${camarote.id}`;
    div.innerHTML = `
      <img src='${camarote.imagem}'> </img>
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
                            <td>${camarote.id}</td>
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
                            <td>${camarote.ingressos}</td>
                            <td>${camarote.catering}</td>
                            <td>${camarote.status}</td>
                            <td>${camarote.posicao}</td>

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

//Filtra a cada input de texto
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
        if (String(camarote.numero).startsWith(numeroCam) || String(camarote.numero2).startsWith(numeroCam)) {
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

//Prepara para ativar a função caso os campos recebam input
let suitname = document.getElementById('suitname')
suitname.addEventListener('input', function () {
  filtrarCaracteres('nome')
});
let suitnumber = document.getElementById('suitnumber')
suitnumber.addEventListener('input', function () {
  filtrarCaracteres('num')
});

// Conta os itens com display ="none"
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

//Restaura o form
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

//Envia os dados captados no input para a função filtrar
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

//Inverte a ordem dos displays (Para funcionar o array deve ser escrito na ordem "vencimento mais próximo para mais longe")
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