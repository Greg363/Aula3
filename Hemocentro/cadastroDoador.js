
// Um array para armazenar os doadores
let doadores = [];

// Função para cadastrar um doador
function cadastrarDoador() {
    let nome = prompt("Qual o seu nome?")
    let idade = prompt("Qual é a sua idade?")
    let peso = prompt("Qual é o seu peso?")
    let tipoSanguineo = prompt("Qual o seu tipo sanguíneo")
    let ultimaDoacao = prompt("Quando foi sua ultima doaçâo de sangue?")
    
    
    
    //As informações de cada usuário vão ser armazenadas neste objeto
    const doador = {
     nome: nome,
     idade: idade,
     peso: peso,
     tipoSanguineo: tipoSanguineo,
     ultimaDoacao: ultimaDoacao,
    };
    
    //Crie um código que adiciona o objeto doador ao array doadores
    doadores.push(doador)
    //Este código retorna uma mensagem. Deixe inalterado
    alert("Doador cadastrado com sucesso!");
  }
  
  // Função para listar os doadores
  function listarDoadores() {
    let resultado = "===== LISTAGEM DE DOADORES =====";
    
    //Aqui vai o código que lista todos os doadores
    console.log(resultado);
    console.log(doadores)
  }
  
  // Função para buscar doadores por tipo sanguíneo
  function buscarPorTipoSanguineo() {
    const tipoSanguineo = prompt("Digite o tipo sanguíneo desejado: ");
    let resultado = `Digite o tipo sanguíneo desejado: ${tipoSanguineo}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
    
    //Aqui vai o código que busca doadores por tipo sanguíneo

    console.log(resultado);
    const doadorTipoSanguineo = doadores.find(sangue => sangue.tipoSanguineo === tipoSanguineo)
    console.log(doadorTipoSanguineo)
    }
  
  // Função para buscar doadores por data da última doação
  function buscarPorDataUltimaDoacao() {
    const dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
    let resultado = `Digite a data desejada: ${dataDesejada}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
  
    //Aqui vai o código que busca os doadores por data da última doação
  
    console.log(resultado);
    const doadorUltimaDoacao = doadores.find(dataDoacao => dataDoacao.ultimaDoacao === dataDesejada)
    console.log(doadorUltimaDoacao)
  }
  
  // Função para executar a ação com base na opção selecionada no menu suspenso
  function executarAcao() {
    const opcoes = document.getElementById("opcoes");
    const opcaoSelecionada = opcoes.value;
  
    switch (opcaoSelecionada) {
      case "cadastrar":
        cadastrarDoador();
        break;
      case "listar":
        listarDoadores();
        break;
      case "buscarTipo":
        buscarPorTipoSanguineo();
        break;
      case "buscarData":
        buscarPorDataUltimaDoacao();
        break;
      case "sair":
        console.log("Encerrando o programa.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
  
 
  