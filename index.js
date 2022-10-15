fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams',{
    method : 'GET',
    headers : {'git-user': 'DouglasCarnevale'}
 })
 .then((response)=>response.json())
 .then((result)=>{
    console.log(result);
 })


 const verGrupos = () => {
   fetch('./selecao.json')
   .then(resposta => resposta.json())
   .then(dados => {
       console.log(dados)
       // manipular os dados da requisicao
       // mapear o array de dados
       dados.map(( name, index) => {
           criarCards()
           preencherDadosNosCards(name, index);
       }) // fim dados.map
   })};

 
   