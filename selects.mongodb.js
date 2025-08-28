const datadabase = 'BD3-NoSQL-Produtos';
const collection = 'bd3-nosql-atv7';
use(datadabase);

// SELECT MAIORES DE 700 REAIS
//db['bd3-nosql-atv7'].find({"valor":{$gt: NumberDecimal("700")}});

// SELECT MENORES DE 500 REAIS
//db['bd3-nosql-atv7'].find({"valor":{$lt: NumberDecimal("450")}});

// SELECT MAIOR OU IGUAL 500 REAIS E MENOR OU IGAUL A 950 REAIS
//db['bd3-nosql-atv7'].find({"valor":{$gte: NumberDecimal("500"),$lte: NumberDecimal("950")}});