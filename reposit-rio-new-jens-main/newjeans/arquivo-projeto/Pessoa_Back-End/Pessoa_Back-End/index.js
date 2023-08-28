 const express = require('express');
const path = require('path');
const Produto = require("./models/produto");
const cors= require('cors');
const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
//permite que uma função assíncrona e sem bloqueio seja estruturada de maneira semelhante a uma função síncrona comum
app.get('/produto', async function(req, res){ //O get é usado apenas para exibir/retornar valor, nunca pra alterar. Já o Set é usado quando você quer alterar o valor/conteúdo de um atributo
  try {
    var produtos = await Produto.select();
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produto' });
  }
});

app.post('/produto', async function(req, res){ // é usado quando o cliente deseja enviar dados para processamento ao servidor
  try {
    var produto = await Produto.selectOne(req.body.id);
    res.json(produto.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.post('/produtos', async function(req,res){ // é usado quando o cliente deseja enviar dados para processamento ao servidor
  try{
    var produto = req.body
    var produto = await Produto.insert(produto);
    res.json(produto.rows)
  }catch(error){
    console.log("error")
  }
})

app.delete('/produto', async function(req, res){
  try {
    console.log(req.body.id)
    var produto = await Produto.delete(req.body.id);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar produto' });
  }
});


app.listen(3003, function() { //lincar com a porta
  console.log(`app de Exemplo escutando na porta! ${3003}`)
});
