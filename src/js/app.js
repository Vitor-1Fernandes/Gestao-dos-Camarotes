
//Array onde cada objeto representa um camarote
const contratos = [
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
  },
  {
    id: "528",
    numero2: "",
    nome: "NCR Cenografia",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$396.000,00",
    precoCatering: "R$72.000,00",
    precoTotal: "R$468.000,00",
    parcelaCamarote: "R$33.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/528.jpg"
  },
  {
    id: "529",
    numero2: "",
    nome: "Acesso Business",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$500.000,00",
    precoCatering: "R$96.000,00",
    precoTotal: "R$596.000,00",
    parcelaCamarote: "ÚNICA",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/529.jpg"
  },
  {
    id: "530",
    numero2: "",
    nome: "Grupo Allcor",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$408.000,00",
    precoCatering: "R$48.000,00",
    precoTotal: "R$456.000,00",
    parcelaCamarote: "R$34.000,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Básico",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/530.jpg"
  },
  {
    id: "531",
    numero2: "532",
    nome: "Quavo / Redfit",
    inicio: "02/02/2024",
    termino: "31/12/2026",
    precoCamarote: "R$372.000,00",
    precoCatering: "R$78.000,00",
    precoTotal: "R$450.000,00",
    parcelaCamarote: "R$37.200,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/531.532.jpg"
  },
  {
    id: "533",
    numero2: "",
    nome: "Disponível",
    inicio: "14/02/2023",
    termino: "31/12/2025",
    precoCamarote: "R$640.000,00",
    precoCatering: "R$0,00",
    precoTotal: "R$640.000,00",
    parcelaCamarote: "Permuta",
    dataVencimento: "Sem contrato",
    ingressos: "24",
    catering: "-",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/533.jpg"
  },
  {
    id: "534",
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
    imagem: "src/assets/534.jpg"
  },
  {
    id: "535",
    numero2: "",
    nome: "APPGAS",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "PATROCÍNIO",
    dataVencimento: "Patrocínio",
    ingressos: "15",
    catering: "Patrocinador",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/535.jpg"
  },
  {
    id: "536",
    numero2: "",
    nome: "Disponível",
    inicio: "26/02/2025",
    termino: "25/02/2026",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "PATROCÍNIO",
    dataVencimento: "Patrocínio",
    ingressos: "15",
    catering: "Patrocinador",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/536.jpg"
  },
  {
    id: "537",
    numero2: "",
    nome: "Casa Soccer",
    inicio: "23/02/2024",
    termino: "22/02/2025",
    precoCamarote: "R$300.000,00",
    precoCatering: "R$43.200,00",
    precoTotal: "R$343.200,00",
    parcelaCamarote: "R$25.000,00",
    dataVencimento: "Indefinido",
    ingressos: "12",
    catering: "Básico",
    status: "Sem contrato",
    posicao: "Grande área",
    imagem: "src/assets/537.jpg"
  },
  {
    id: "538",
    numero2: "",
    nome: "Elétrica Area",
    inicio: "01/01/2024",
    termino: "31/12/2025",
    precoCamarote: "R$420.000,00",
    precoCatering: "R$130.200,00",
    precoTotal: "R$550.200,00",
    parcelaCamarote: "R$35.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/538.jpg"
  },
  {
    id: "539",
    numero2: "",
    nome: "Cartão de Todos",
    inicio: "27/09/2024",
    termino: "31/12/2025",
    precoCamarote: "R$450.000,00",
    precoCatering: "R$84.000,00",
    precoTotal: "R$534.000,00",
    parcelaCamarote: "PATROCÍNIO",
    dataVencimento: "Patrocínio",
    ingressos: "12",
    catering: "Básico",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/539.jpg"
  },
  {
    id: "540",
    numero2: "",
    nome: "Kasinski",
    inicio: "02/06/2024",
    termino: "30/06/2026",
    precoCamarote: "R$720.000,00",
    precoCatering: "R$168.000,00",
    precoTotal: "R$888.000,00",
    parcelaCamarote: "PATROCÍNIO",
    dataVencimento: "Patrocínio",
    ingressos: "12",
    catering: "Básico",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/540.jpg"
  },
  {
    id: "541",
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
    imagem: "src/assets/541.jpg"
  },
  {
    id: "542",
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
    imagem: "src/assets/542.jpg"
  },
  {
    id: "543",
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
    imagem: "src/assets/543.jpg"
  },
  {
    id: "544",
    numero2: "",
    nome: "Print Comunicação",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "21",
    catering: "-",
    status: "Uso Interno",
    posicao: "Escanteio",
    imagem: "src/assets/544.jpg"
  },
  {
    id: "545",
    numero2: "",
    nome: "Disponível",
    inicio: "30/01/2024",
    termino: "29/01/2025",
    precoCamarote: "R$280.000,00",
    precoCatering: "R$62.400,00",
    precoTotal: "R$342.400,00",
    parcelaCamarote: "R$28.000,00",
    dataVencimento: "Indefinido",
    ingressos: "12",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Escanteio",
    imagem: "src/assets/545.jpg"
  },
  {
    id: "602",
    numero2: "",
    nome: "Disponível",
    inicio: "17/01/2024",
    termino: "31/12/2026",
    precoCamarote: "R$994.000,00",
    precoCatering: "R$206.000,00",
    precoTotal: "R$1.200.000,00",
    parcelaCamarote: "R$27.600,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Escanteio",
    imagem: "src/assets/602.jpg"
  },
  {
    id: "603",
    numero2: "",
    nome: "Integra Vita",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "33",
    catering: "VIP",
    status: "Uso Interno",
    posicao: "Escanteio",
    imagem: "src/assets/603.jpg"
  },
  {
    id: "604",
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
    catering: "Básico Jogo",
    status: "Uso Interno",
    posicao: "Escanteio",
    imagem: "src/assets/604.jpg"
  },
  {
    id: "605",
    numero2: "",
    nome: "Disponível",
    inicio: "01/02/2025",
    termino: "31/12/2025",
    precoCamarote: "R$300.000,00",
    precoCatering: "R$0,00",
    precoTotal: "-",
    parcelaCamarote: "R$30.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "-",
    status: "Assinando",
    posicao: "Grande área",
    imagem: "src/assets/605.jpg"
  },
  {
    id: "606",
    numero2: "",
    nome: "Atleta",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$320.000,00",
    precoCatering: "R$0,00",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "Indefinido",
    ingressos: "12",
    catering: "-",
    status: "Assinando",
    posicao: "Grande área",
    imagem: "src/assets/606.jpg"
  },
  {
    id: "607",
    numero2: "",
    nome: "Atleta",
    inicio: "22/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$341.000,00",
    precoCatering: "R$0,00",
    precoTotal: "-",
    parcelaCamarote: "R$34.100,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "-",
    status: "Assinando",
    posicao: "Grande área",
    imagem: "src/assets/607.jpg"
  },
  {
    id: "608",
    numero2: "",
    nome: "Atleta",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$360.000,00",
    precoCatering: "R$72.000,00",
    precoTotal: "R$432.000,00",
    parcelaCamarote: "R$30.000,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "Básico",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/608.jpg"
  },
  {
    id: "609",
    numero2: "",
    nome: "Guilherme Silveira",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "15",
    catering: "VIP",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/609.jpg"
  },
  {
    id: "610",
    numero2: "",
    nome: "Ezze Seguros",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "15",
    catering: "VIP",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/610.jpg"
  },
  {
    id: "611",
    numero2: "",
    nome: "Ezze Seguros",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$353.000,00",
    precoCatering: "R$0,00",
    precoTotal: "R$353.000,00",
    parcelaCamarote: "-",
    dataVencimento: "Cortesia",
    ingressos: "15",
    catering: "-",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/611.jpg"
  },
  {
    id: "612",
    numero2: "",
    nome: "Atleta",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$353.000,00",
    precoCatering: "R$0,00",
    precoTotal: "R$353.000,00",
    parcelaCamarote: "-",
    dataVencimento: "Indefinido",
    ingressos: "15",
    catering: "-",
    status: "Assinando",
    posicao: "Grande área",
    imagem: "src/assets/612.jpg"
  },
  {
    id: "613",
    numero2: "",
    nome: "Atleta",
    inicio: "01/01/2025",
    termino: "30/06/2025",
    precoCamarote: "R$176.500,00",
    precoCatering: "R$0,00",
    precoTotal: "R$176.500,00",
    parcelaCamarote: "R$58.833,33",
    dataVencimento: "Indefinido",
    ingressos: "15",
    catering: "-",
    status: "Assinando",
    posicao: "Grande área",
    imagem: "src/assets/613.jpg"
  },
  {
    id: "614",
    numero2: "",
    nome: "Atleta",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$320.000,00",
    precoCatering: "R$0,00",
    precoTotal: "R$320.000,00",
    parcelaCamarote: "-",
    dataVencimento: "Indefinido",
    ingressos: "12",
    catering: "-",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/614.jpg"
  },
  {
    id: "615",
    numero2: "",
    nome: "Atleta",
    inicio: "30/07/2024",
    termino: "29/07/2025",
    precoCamarote: "R$399.000,00",
    precoCatering: "R$96.000,00",
    precoTotal: "R$495.000,00",
    parcelaCamarote: "ÚNICA",
    dataVencimento: "Indefinido",
    ingressos: "12",
    catering: "VIP",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/615.jpg"
  },
  {
    id: "616",
    numero2: "",
    nome: "Bradesco",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "Indefinido",
    ingressos: "12",
    catering: "Intermediário",
    status: "Sem contrato",
    posicao: "Grande área",
    imagem: "src/assets/616.jpg"
  },
  {
    id: "617",
    numero2: "",
    nome: "Talents Sports",
    inicio: "27/03/2025",
    termino: "31/12/2025",
    precoCamarote: "R$500.000,00",
    precoCatering: "R$120.000,00",
    precoTotal: "R$620.000,00",
    parcelaCamarote: "R$62.500,00",
    dataVencimento: "10",
    ingressos: "15",
    catering: "VIP",
    status: "Assinando",
    posicao: "Meio campo",
    imagem: "src/assets/617.jpg"
  },
  {
    id: "618",
    numero2: "",
    nome: "Arthur Ferradás Chaklian",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "Indefinido",
    ingressos: "15",
    catering: "Básico",
    status: "Sem contrato",
    posicao: "Meio campo",
    imagem: "src/assets/618.jpg"
  },
  {
    id: "619",
    numero2: "",
    nome: "Mega Loja",
    inicio: "16/04/2024",
    termino: "31/12/2025",
    precoCamarote: "R$700.000,00",
    precoCatering: "R$0,00",
    precoTotal: "R$700.000,00",
    parcelaCamarote: "R$35.000,00",
    dataVencimento: "20",
    ingressos: "12",
    catering: "Sem Catering",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/619.jpg"
  },
  {
    id: "620",
    numero2: "",
    nome: "Macam Asset",
    inicio: "31/08/2020",
    termino: "30/08/2040",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "R$300.000.000,00",
    parcelaCamarote: "-",
    dataVencimento: "Indefinido",
    ingressos: "33",
    catering: "Básico",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/620.jpg"
  },
  {
    id: "621",
    numero2: "622",
    nome: "Neo Química",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "33",
    catering: "SERVIÇO PRESIDÊNCIA",
    status: "Uso Interno",
    posicao: "Meio campo",
    imagem: "src/assets/621.622.jpg"
  },
  {
    id: "623",
    numero2: "624",
    nome: "Presidência",
    inicio: "24/07/2024",
    termino: "23/07/2027",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "R$213.000.000,00",
    parcelaCamarote: "-",
    dataVencimento: "Patrocínio",
    ingressos: "33",
    catering: "Básico",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/623.624.jpg"
  },
  {
    id: "625",
    numero2: "626",
    nome: "Esportes da Sorte",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "Patrocínio",
    dataVencimento: "Patrocínio",
    ingressos: "20",
    catering: "VIP",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/625.626.jpg"
  },
  {
    id: "627",
    numero2: "",
    nome: "Nike",
    inicio: "22/07/2020",
    termino: "21/07/2025",
    precoCamarote: "R$2.100.000,00",
    precoCatering: "-",
    precoTotal: "R$2.100.000,00",
    parcelaCamarote: "Permuta",
    dataVencimento: "Permuta",
    ingressos: "12",
    catering: "Pontual",
    status: "Sem contrato",
    posicao: "Meio campo",
    imagem: "src/assets/627.jpg"
  },
  {
    id: "628",
    numero2: "",
    nome: "Anixter | Leyard",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$350.000,00",
    precoCatering: "R$100.800,00",
    precoTotal: "R$450.800,00",
    parcelaCamarote: "R$35.000,00",
    dataVencimento: "Indefinido",
    ingressos: "15",
    catering: "VIP",
    status: "Sem contrato",
    posicao: "Meio campo",
    imagem: "src/assets/628.jpg"
  },
  {
    id: "629",
    numero2: "",
    nome: "Igor Zveibrucker",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$350.000,00",
    precoCatering: "R$100.800,00",
    precoTotal: "R$450.800,00",
    parcelaCamarote: "R$35.000,00",
    dataVencimento: "Indefinido",
    ingressos: "15",
    catering: "VIP",
    status: "Sem contrato",
    posicao: "Meio campo",
    imagem: "src/assets/629.jpg"
  },
  {
    id: "630",
    numero2: "",
    nome: "Igor Zveibrucker",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "Patrocínio",
    dataVencimento: "Patrocínio",
    ingressos: "17",
    catering: "Básico",
    status: "Assinado",
    posicao: "Meio campo",
    imagem: "src/assets/630.jpg"
  },
  {
    id: "631",
    numero2: "",
    nome: "BMG",
    inicio: "02/05/2023",
    termino: "01/05/2026",
    precoCamarote: "R$1.160.000,00",
    precoCatering: "R$600.000,00",
    precoTotal: "R$1.760.000,00",
    parcelaCamarote: "R$36.250,00",
    dataVencimento: "30",
    ingressos: "15",
    catering: "Intermediário",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/631.jpg"
  },
  {
    id: "632",
    numero2: "",
    nome: "Nasser Fares",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$396.000,00",
    precoCatering: "R$108.000,00",
    precoTotal: "R$504.000,00",
    parcelaCamarote: "R$33.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "VIP",
    status: "Assinado",
    posicao: "Grande área",
    imagem: "src/assets/632.jpg"
  },
  {
    id: "633",
    numero2: "",
    nome: "Silvio Iamamura",
    inicio: "23/02/2025",
    termino: "31/12/2025",
    precoCamarote: "R$300.000,00",
    precoCatering: "R$0,00",
    precoTotal: "R$300.000,00",
    parcelaCamarote: "CORTESIA",
    dataVencimento: "Cortesia",
    ingressos: "15",
    catering: "VIP",
    status: "Disponível",
    posicao: "Grande área",
    imagem: "src/assets/633.jpg"
  },
  {
    id: "634",
    numero2: "",
    nome: "Atleta",
    inicio: "23/02/2025",
    termino: "31/12/2025",
    precoCamarote: "R$300.000,00",
    precoCatering: "R$0,00",
    precoTotal: "R$300.000,00",
    parcelaCamarote: "R$30.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Sem Catering",
    status: "Disponível",
    posicao: "Grande área",
    imagem: "src/assets/634.jpg"
  },
  {
    id: "635",
    numero2: "",
    nome: "Atleta",
    inicio: "01/01/2025",
    termino: "31/12/2025",
    precoCamarote: "R$360.000,00",
    precoCatering: "R$70.000,00",
    precoTotal: "R$430.000,00",
    parcelaCamarote: "R$36.000,00",
    dataVencimento: "10",
    ingressos: "12",
    catering: "Intermediário",
    status: "Em formalização",
    posicao: "Grande área",
    imagem: "src/assets/635.jpg"
  },
  {
    id: "636",
    numero2: "",
    nome: "GR6",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Uso Interno",
    posicao: "Grande área",
    imagem: "src/assets/636.jpg"
  },
  {
    id: "637",
    numero2: "",
    nome: "Margem de segurança",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Uso Interno",
    posicao: "Grande área",
    imagem: "src/assets/637.jpg"
  },
  {
    id: "638",
    numero2: "",
    nome: "Visitante",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Uso Interno",
    posicao: "Grande área",
    imagem: "src/assets/638.jpg"
  },
  {
    id: "639",
    numero2: "",
    nome: "Visitante",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Uso Interno",
    posicao: "Grande área",
    imagem: "src/assets/639.jpg"
  },
  {
    id: "640",
    numero2: "",
    nome: "Visitante",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Uso Interno",
    posicao: "Grande área",
    imagem: "src/assets/640.jpg"
  },
  {
    id: "641",
    numero2: "",
    nome: "Visitante",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "-",
    catering: "-",
    status: "Uso Interno",
    posicao: "Grande área",
    imagem: "src/assets/641.jpg"
  },
  {
    id: "642",
    numero2: "",
    nome: "Margem de segurança",
    inicio: "-",
    termino: "-",
    precoCamarote: "-",
    precoCatering: "-",
    precoTotal: "-",
    parcelaCamarote: "-",
    dataVencimento: "-",
    ingressos: "33",
    catering: "-",
    status: "Uso Interno",
    posicao: "Grande área",
    imagem: "src/assets/642.jpg"
  },
  {
    id: "643",
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
    imagem: "src/assets/643.jpg"
  },
  {
    id: "644",
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
    imagem: "src/assets/644.jpg"
  },
  {
    id: "645",
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
    status: "-",
    posicao: "Escanteio",
    imagem: "src/assets/645.jpg"
  }
];

function ordenarPorTermino(contratos) {
  return [...contratos].sort((a, b) => {
    const parseDate = (str) => {
      if (!str || str === "-") return Infinity;
      const [day, month, year] = str.split('/').map(Number);
      return new Date(year, month - 1, day).getTime();
    };
    return parseDate(a.termino) - parseDate(b.termino);
  });
}
const contratosOrdenados = ordenarPorTermino(contratos);

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
                            
                        </tr>
                        <tr>
                            <td>${camarote.id}</td>
                            <td>${camarote.inicio}</td>
                            <td>${camarote.termino}</td>
                            <td>${camarote.precoCamarote}</td>
                            <td>${camarote.precoCatering}</td>
                            <td>${camarote.precoTotal}</td>
                            
                        </tr>
                    </table>
                    <table class="tabela">
                        <tr>
                            <th>Parcela</th>
                            <th>Vencimento</th>
                            <th>Ingressos</th>
                            <th>Catering</th>
                            <th>Status</th>
                            <th>Posição</th>
                        </tr>
                        <tr>
                            <td>${camarote.parcelaCamarote}</td>
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
renderSuits(contratosOrdenados);

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
        if (String(camarote.id).startsWith(numeroCam) || String(camarote.numero2).startsWith(numeroCam)) {
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
      filtrar('ingressos', 21)
    }
    if (suitsize == 5) {
      filtrar('ingressos', 33)
    }
  }
  if (suitcatering != 0) {
    if (suitcatering == 2) {
      filtrar('catering', 'Básico')
    }
    if (suitcatering == 3) {
      filtrar('catering', 'Básico Jogo')
    }
    if (suitcatering == 4) {
      filtrar('catering', 'Intermediário')
    }
    if (suitcatering == 5) {
      filtrar('catering', 'VIP')
    }
    if (suitcatering == 6) {
      filtrar('catering', 'Patrocinador')
    }
    if (suitcatering == 7) {
      filtrar('catering', 'Sem Catering')
    }
  }
  if (suitstate != 0) {
    if (suitstate == 2) {
      filtrar('status', 'Assinado')
    }
    if (suitstate == 3) {
      filtrar('status', 'NEGADO PELA COMPLIANCE')
    }
    if (suitstate == 4) {
      filtrar('status', 'Renovação')
    }
    if (suitstate == 5) {
      filtrar('status', 'Uso Interno')
    }
    if (suitstate == 6) {
      filtrar('status', 'Disponível')
    }
     if (suitstate == 7) {
      filtrar('status', 'Assinando')
    }
    if (suitstate == 8) {
      filtrar('status', 'Em formalização')
    }
    if (suitstate == 9) {
      filtrar('status', 'Sem contrato')
    }
  }
  if (suitposition != 0){
    if (suitposition == 2){
      filtrar('posicao', 'Escanteio')
    }
    if (suitposition == 3){
      filtrar('posicao', 'Meio campo')
    }
     if (suitposition == 4){
      filtrar('posicao', 'Grande área')
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

