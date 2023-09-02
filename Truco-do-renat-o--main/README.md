# Truco-do-renatão 
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=2.0">
        <link rel="stylesheet" href="/css/style.css"/>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="white" />
        <link rel="apple-touch-icon" href="imagens/pwa-icon-256.png" />
        <title>truco renato</title>


</head>
<body>
  <!-- select-box -->
  <div class="select-box">
  <header> Jogo da velha
  </header>
  <div class="title"> Qual voce  será? </div>
  <div class="options">
    <button class="playx" > Jogador X</button>
    <button class="playy"> Jogador Y</button>
  </div>
</div>
  </div>



 
 <!-- container -->
  <div class="container">
    <div class="details">
    <div class="player">
      <span class="Xturn on"> Vez do X  </span>
      <span class="Oturn"> Vez do Y</span>
      <div class="slider"></div>
  </div>
</div>

    <script src="js/main.js"></script>

</body>
</html>
/////////
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    background-color: aquamarine;
 }
.winner{
    display: none;
}

/*   select-box */
.select-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px 25px 25px;
    border-radius: 3px;
    max-width: 270px;
    width: 100%;
    box-shadow: 2px 2px 2px 2px rgb(116, 143, 152);
   transition: all 0.3s ease;
}
.select-box header{
    font-size: 23px;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.select-box .title{
    font-size: 17px;
    font-weight: 500;
    margin: 20px 0;
}
.select-box .options{
    display: flex;
    width: 100%;
}
.box{
    padding: 30px;
    background-color: white;
    margin-top: 15%;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 200px;
    text-align: center;
}
.result-box{
    text-align: center;
    justify-content: center;
    margin-left: 40%;
    display: none;
}
.select-box.hide{
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0.9);
}
.container, .select-box{
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
}
.won-text{
    font-size: 18px;
}
.btn button{
    background-color: rgb(182, 226, 240) ;
    padding: 10px;
    border: none;
    border-radius: 2px;
}

/*   options / select */
.options button{
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 0;
    border: none;
    background-color:rgb(170, 197, 224) ;
}
.options button.playx{
    margin: 5px;
}
.options button.playy{
    margin: 5px;
}
.options button.playy:hover{
    transform:scale(0.9);
  filter: brightness(0.9);
}
.btn button:hover{
    transform:scale(0.9);
    filter: brightness(0.9);
}
.options button.playx:hover{
    transform:scale(0.9);
    filter: brightness(0.9);
}
/* container */
.container .details{
 background-color: white;
 padding: 7px;
 border-radius: 5px;
}
.container section{
    display: flex;
}
.container section span{
    display: block;
    margin: 3px;
    height: 90px;
    width: 90px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    line-height: 80px;
    color: rgb(247, 164, 178);
    font-size: 40px;
    
}
.container-player{
     margin-top: 20px;
}
.container .details .player{
display: flex;
width: 100%;
justify-content: space-between;
position: relative;
}

.container{
opacity: 0;
   pointer-events: none;
   transform: translate(-50%, -50%) scale(0.9);
}
.container.show{
    opacity: 1;
pointer-events:auto;
transform: translate(-50%, -50%) scale(1); 
   }
.container .details span{
 
 width: 100%;
 padding: 7px;
 border-radius: 3px;
 font-size: 17px;
 font-weight: 500;
 text-align: center;
 cursor: default;
 position: relative;
 z-index: 5;
}
.details .slider{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background-color: pink;
 border-radius: 5px;
 z-index: 2;
}
 
