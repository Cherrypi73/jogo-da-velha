const { Pool } = require('pg'); //um cache de conexões de banco de dados mantido de forma que as conexões possam ser reutilizadas quando requisições futuras ao banco de dados forem requeridas

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);// retorna resposta colocando na mesma api cliente e servidor
    }

    const pool = new Pool({
     connectionString:'postgres://dcfxefmr:InKsqLt_twa31O1IkLOBiC6gq98z-BL8@silly.db.elephantsql.com/dcfxefmr'
    }); //conecta o banco de dados 

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
