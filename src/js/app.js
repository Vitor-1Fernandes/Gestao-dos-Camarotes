const contratos = [
  {
    id: 510,
    numero: 510,
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
    numero: 511,
    nome: "DI MILANO",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: 360000,
    precoCatering: 84000,
    precoTotal: 444000,
    parcelaCamarote: 30000,
    dataVencimento: 10,
    ingressos: 12,
    catering: "INTERMEDIARIO",
    status: "ASSINADO"
  },
  {
    id: 512,
    numero: 512,
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
    status: "USO INTERNO"
  },
  {
    id: 513,
    numero: 513,
    nome: "BETBR (EX B1.BET)",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: 432000,
    precoCatering: 72000,
    precoTotal: 504000,
    parcelaCamarote: 36000,
    dataVencimento: 10,
    ingressos: 15,
    catering: "BASICO",
    status: "NEGADO PELA COMPLIANCE"
  },
  {
    id: 514,
    numero: 514,
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
    id: 515,
    numero: 515,
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
    numero: 517,
    nome: "VOCE SEGURADORA",
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
    numero: 518,
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
    numero: 519,
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
    status: "RENOVACAO"
  }
];

function mostraTodos(){
  for (i = 0; i < contratos.length; i++) {
    document.getElementById(contratos[i].id).style.display = 'flex';
  }
}

let filtroClick = document.getElementById('btnsend');

filtroClick.addEventListener('click', function (event) {

  event.preventDefault();
  numeroinput = document.getElementById('suitnumber').value;
  numeroinput = Number(numeroinput)
  precoinput = document.getElementById('suitvalue').value;
  precoinput = Number(precoinput)

  // Exibe todos os itens
  for (i = 0; i < contratos.length; i++) {
    mostraTodos();
  }

  // Apaga os itens pelo numero
  if (!isNaN(numeroinput) && numeroinput != 0) {

    for (i = 0; i < contratos.length; i++) {
      if (contratos[i].numero != numeroinput) {
        document.getElementById(contratos[i].id).style.display = 'none';
      }
    }
  }
  else {
    mostraTodos();
  }

  alert(precoinput)

  if (!isNaN(precoinput) && precoinput != 0) {
    for (i = 0; i < contratos.length; i++) {
      if (contratos[i].precoTotal != precoinput) {
        document.getElementById(contratos[i].id).style.display = 'none';
      }
    }
  }
});