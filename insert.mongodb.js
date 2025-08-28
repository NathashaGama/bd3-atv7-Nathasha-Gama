const database = 'BD3-NoSQL-Produtos';
const collection = 'bd3-nosql-atv7';
use(database);
db.createCollection(collection)

db[{
    cod_produto: 1001,
    nome_produto: "Smartphone Android",
    desc_produto: "Smartphone com 128GB, 8GB RAM, câmera tripla 48MP",
    valor: 899.99
  },
  {
    cod_produto: 1002,
    nome_produto: "Tablet 10 Polegadas",
    desc_produto: "Tablet com tela Full HD, 64GB, processador octa-core",
    valor: 450.00
  },
  {
    cod_produto: 1003,
    nome_produto: "Notebook Ultrafino",
    desc_produto: "Notebook i5, 8GB RAM, SSD 256GB, tela 15.6\"",
    valor: 2499.00
  },
  {
    cod_produto: 1004,
    nome_produto: "Fone Bluetooth",
    desc_produto: "Fone de ouvido sem fio com cancelamento de ruído",
    valor: 299.90
  },
  {
    cod_produto: 1005,
    nome_produto: "Mouse Gamer",
    desc_produto: "Mouse óptico com RGB, 6400DPI, 6 botões programáveis",
    valor: 150.00
  },
  {
    cod_produto: 1006,
    nome_produto: "Teclado Mecânico",
    desc_produto: "Teclado mecânico switches blue, LED RGB, ABNT2",
    valor: 320.50
  },
  {
    cod_produto: 1007,
    nome_produto: "Monitor 24\"",
    desc_produto: "Monitor LED 24 polegadas, Full HD, 75Hz, HDMI/VGA",
    valor: 789.99
  },
  {
    cod_produto: 1008,
    nome_produto: "Webcam HD",
    desc_produto: "Webcam 1080p, microfone embutido, ajustável",
    valor: 189.90
  },
  {
    cod_produto: 1009,
    nome_produto: "Caixa de Som",
    desc_produto: "Caixa de som Bluetooth, à prova d'água, 20W RMS",
    valor: 350.00
  },
  {
    cod_produto: 1010,
    nome_produto: "Smartwatch",
    desc_produto: "Relógio inteligente com GPS, monitor cardíaco, iOS/Android",
    valor: 650.00
  }