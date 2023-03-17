const uriCreateFrotas = "http://localhost:3000/frotas/create";
const uriCreateViagem = "http://localhost:3000/viagens/create";
const uriGetFrotas = "http://localhost:3000/frotas/read";
const uriGetVeiculos = "http://localhost:3000/veiculos/read";
const uriGetMotoristas = "http://localhost:3000/motoristas/read";
const uriGetViagens = "http://localhost:3000/viagens/read";
const uriViagemRetorno = "http://localhost:3000/viagens/update/";
const uriCreateVeiculos = "http://localhost:3000/veiculos/create";
const uriCreateMotorista = "http://localhost:3000/motoristas/create";
const uriVwGastoPorMes = "http://localhost:3000/manutencoes/readvwg";
const uriExcluirMotorista = "http://localhost:3000/motoristas/excluir/";
const uriCreateManutencao = "http://localhost:3000/manutencoes/create";
const uriUpdateManutencao = "http://localhost:3000/manutencoes/update/";
const uriCreateFuncionario = "http://localhost:3000/funcionarios/registrar";
const uriGetFuncionarios = "http://localhost:3000/funcionarios/read";
const uriExcluirFuncionario = "http://localhost:3000/funcionarios/excluir/";
const uriExcluirViagem = "http://localhost:3000/viagens/excluir/";
const uriExcluirVeiculo = "http://localhost:3000/veiculos/excluir/";
const uriVwTabelaManutencao = "http://localhost:3000/manutencoes/readvwm";

var dadosVeiculo = [];
var dadosChartManutencao = [];
var dadosChartVeiculosDisponiveis = [];
var dadosGastoPorMes = [];
var dadosMotorista = [];
var dadosTableManutencao = [];
var dadosTabelaFuncionarios = [];

const FECHAR_MODAL_TIMEOUT = 2000;

const card = document.querySelector(".card");
const cardToggle = document.querySelector(".toggle");

const openFrotasEditor = () => {
  document.querySelector(".frotaMain").classList.remove("model");
  document.querySelector(".ver").classList.remove("model");
  document.querySelector(".gerenciar").classList.add("model");
  document.querySelector(".criarFrotaCard").classList.remove("model");
  document.querySelector(".leftNavbar").classList.add("model");
  document.querySelector(".card").classList.add("model");
  document.querySelector(".graficosMain").classList.add("model");
};

const closeFrotasEditor = () => {
  document.querySelector(".frotaMain").classList.add("model");
  document.querySelector(".criarFrotaCard").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
  document.querySelector(".clonenodeAppend").classList.add("model");
  document.querySelector(".graficosMain").classList.remove("model");
};

const viewFrotas = () => {
  document.querySelector(".ver").classList.add("model");
  document.querySelector(".criarFrotaCard").classList.add("model");
  document.querySelector(".gerenciar").classList.remove("model");
  document.querySelector(".clonenodeAppend").classList.remove("model");
};

const gerenciarFrotas = () => {
  document.querySelector(".ver").classList.remove("model");
  document.querySelector(".criarFrotaCard").classList.remove("model");
  document.querySelector(".gerenciar").classList.add("model");
  document.querySelector(".clonenodeAppend").classList.add("model");
};

const openViagensEditor = () => {
  document.querySelector(".leftNavbar").classList.add("model");
  document.querySelector(".viagensMain").classList.remove("model");
  document.querySelector(".registrarViagemCard").classList.remove("model");
  document.querySelector(".verViagem").classList.remove("model");
  document.querySelector(".gerenciarViagem").classList.add("model");
  document.querySelector(".graficosMain").classList.add("model");
};

const closeViagensEditor = () => {
  document.querySelector(".viagensMain").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
  document.querySelector(".tableViagens").classList.add("model");
  document.querySelector(".graficosMain").classList.remove("model");
};

const viewViagens = () => {
  document.querySelector(".registrarViagemCard").classList.add("model");
  document.querySelector(".gerenciarViagem").classList.remove("model");
  document.querySelector(".verViagem").classList.add("model");
  document.querySelector(".tableViagens").classList.remove("model");
};

const gerenciarViagens = () => {
  document.querySelector(".registrarViagemCard").classList.remove("model");
  document.querySelector(".gerenciarViagem").classList.add("model");
  document.querySelector(".verViagem").classList.remove("model");
  document.querySelector(".tableViagens").classList.add("model");
};

const openVeiculosEditor = () => {
  document.querySelector(".leftNavbar").classList.add("model");
  document.querySelector(".veiculosMain").classList.remove("model");
  document.querySelector(".registrarVeiculoCard").classList.remove("model");
  document.querySelector(".verVeiculos").classList.remove("model");
  document.querySelector(".graficosMain").classList.add("model");
};

const closeVeiculosEditor = () => {
  document.querySelector(".leftNavbar").classList.remove("model");
  document.querySelector(".veiculosMain").classList.add("model");
  document.querySelector(".gerenciarVeiculos").classList.add("model");
  document.querySelector(".registrarVeiculoCard").classList.add("model");
  document.querySelector(".tableVeiculos").classList.add("model");
  document.querySelector(".graficosMain").classList.remove("model");
};

const viewVeiculos = () => {
  document.querySelector(".verVeiculos").classList.add("model");
  document.querySelector(".gerenciarVeiculos").classList.remove("model");
  document.querySelector(".registrarVeiculoCard").classList.add("model");
  document.querySelector(".tableVeiculos").classList.remove("model");
};

const gerenciarVeiculos = () => {
  document.querySelector(".verVeiculos").classList.remove("model");
  document.querySelector(".gerenciarVeiculos").classList.add("model");
  document.querySelector(".tableVeiculos").classList.add("model");
  document.querySelector(".registrarVeiculoCard").classList.remove("model");
};

const openMotoristaEditor = () => {
  document.querySelector(".leftNavbar").classList.add("model");
  document.querySelector(".motoristaMain").classList.remove("model");
  document.querySelector(".registrarMotoristaCard").classList.remove("model");
  document.querySelector(".graficosMain").classList.add("model");
  document.querySelector(".viewMotorista").classList.remove("model");
  document.querySelector(".gerenciarMotorista").classList.add("model");
};

const closeMotoristaEditor = () => {
  document.querySelector(".motoristaMain").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
  document.querySelector(".registrarMotoristaCard").classList.add("model");
  document.querySelector(".graficosMain").classList.remove("model");
  document.querySelector(".tableMotoristas").classList.add("model");
};

const viewMotorista = () => {
  document.querySelector(".tableMotoristas").classList.remove("model");
  document.querySelector(".registrarMotoristaCard").classList.add("model");
  document.querySelector(".viewMotorista").classList.add("model");
  document.querySelector(".gerenciarMotorista").classList.remove("model");
};

const gerenciarMotorista = () => {
  document.querySelector(".tableMotoristas").classList.add("model");
  document.querySelector(".registrarMotoristaCard").classList.remove("model");
  document.querySelector(".viewMotorista").classList.remove("model");
  document.querySelector(".gerenciarMotorista").classList.add("model");
};

const openManutencaoEditor = () => {
  document.querySelector(".graficosMain").classList.add("model");
  document.querySelector(".manutencaoMain").classList.remove("model");
  document.querySelector(".leftNavbar").classList.add("model");
  document.querySelector(".viewManutencao").classList.remove("model");
  document.querySelector(".registrarManutencaoCard").classList.remove("model");
  document.querySelector(".gerenciarManutencao").classList.add("model");
  document.querySelector(".tableManutencao").classList.add("model");
};

const closeManutencaoEditor = () => {
  document.querySelector(".graficosMain").classList.remove("model");
  document.querySelector(".manutencaoMain").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
};

const viewManutencao = () => {
  document.querySelector(".registrarManutencaoCard").classList.add("model");
  document.querySelector(".viewManutencao").classList.add("model");
  document.querySelector(".gerenciarManutencao").classList.remove("model");
  document.querySelector(".tableManutencao").classList.remove("model");
};
const gerenciarManutencao = () => {
  document.querySelector(".gerenciarManutencao").classList.add("model");
  document.querySelector(".registrarManutencaoCard").classList.remove("model");
  document.querySelector(".viewManutencao").classList.remove("model");
  document.querySelector(".tableManutencao").classList.add("model");
};

const openFuncionariosEditor = () => {
  document.querySelector(".funcionarioMain").classList.remove("model");
  document.querySelector(".graficosMain").classList.add("model");
  document.querySelector(".registrarFuncionarioCard").classList.remove("model");
  document.querySelector(".leftNavbar").classList.add("model");
  document.querySelector(".gerenciarFuncionario").classList.add("model");
};

const closeFuncionariosEditor = () => {
  document.querySelector(".funcionarioMain").classList.add("model");
  document.querySelector(".graficosMain").classList.remove("model");
  document.querySelector(".registrarFuncionarioCard").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
  document.querySelector(".gerenciarFuncionario").classList.add("model");
  document.querySelector(".tableFuncionarios").classList.add("model");
  document.querySelector(".viewFuncionario").classList.remove("model");
};

const viewFuncionarios = () => {
  document.querySelector(".registrarFuncionarioCard").classList.add("model");
  document.querySelector(".tableFuncionarios").classList.remove("model");
  document.querySelector(".viewFuncionario").classList.add("model");
  document.querySelector(".gerenciarFuncionario").classList.remove("model");
};

const gerenciarFuncionarios = () => {
  document.querySelector(".registrarFuncionarioCard").classList.remove("model");
  document.querySelector(".tableFuncionarios").classList.add("model");
  document.querySelector(".viewFuncionario").classList.remove("model");
  document.querySelector(".gerenciarFuncionario").classList.add("model");
};

const openModalResult = () => {
  document.querySelector(".modalBlock").classList.remove("model");
  document.querySelector(".modalResult").classList.remove("model");
};

const closeModalResult = () => {
  document.querySelector(".modalResult").classList.add("model");
  document.querySelector(".modalBlock").classList.add("model");
};

const preencherTabelaViagens = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetViagens, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector(".conteudoTabelaViagens").innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        const tr = document.createElement("tr");
        const tdViagem = document.createElement("td");
        const tdVeiculo = document.createElement("td");
        const tdPlaca = document.createElement("td");
        const tdNomeMotorista = document.createElement("td");
        const tdDescricao = document.createElement("td");
        const tdHoraSaida = document.createElement("td");
        const tdHoraRetorno = document.createElement("td");
        const tdButtonRetorna = document.createElement("td");
        const btRetorna = document.createElement("button");
        const imgRetorna = document.createElement("img");
        const tdButtonExcluir = document.createElement("td");
        const imgExclui = document.createElement("img");
        const btExclui = document.createElement("button");

        imgRetorna.src = "../../assets/check.png";
        imgRetorna.style.width = "30px";

        btRetorna.style.width = "100%";
        btRetorna.style.background = "none";
        btRetorna.style.border = "none";
        btRetorna.style.cursor = "pointer";
        btRetorna.setAttribute(
          "onclick",
          "registrarRetorno('" + data[i].id_viagem + "')"
        );

        if (data[i].hora_retorno === null) {
          imgExclui.src = "../../assets/excluirBt.png";
          imgExclui.style.width = "30px";
          btExclui.style.width = "100%";
          btExclui.style.background = "none";
          btExclui.style.border = "none";
          btExclui.style.cursor = "pointer";
          document.querySelector(".textResult").innerHTML =
            "Motorista ainda não retornou!";
          btExclui.setAttribute(
            "onclick",
            "exibirMensagem('Motorista ainda não retornou!')"
          );
        } else {
          imgExclui.src = "../../assets/excluirBt.png";
          imgExclui.style.width = "30px";
          btExclui.style.width = "100%";
          btExclui.style.background = "none";
          btExclui.style.border = "none";
          btExclui.style.cursor = "pointer";
          btExclui.setAttribute(
            "onclick",
            "excluirViagem('" + data[i].id_viagem + "')"
          );
        }

        tdButtonRetorna.appendChild(btRetorna);
        btRetorna.appendChild(imgRetorna);

        tdButtonExcluir.appendChild(btExclui);
        btExclui.appendChild(imgExclui);

        tr.setAttribute("id", i + 1);

        tdViagem.innerHTML = data[i].id_viagem;
        tdDescricao.innerHTML = data[i].descricao;

        if (data[i].veiculos !== null) {
          tdVeiculo.innerHTML = data[i].veiculos.marca;
          tdPlaca.innerHTML = data[i].veiculos.placa;
        } else {
          tr.innerHTML = "";
        }

        if (data[i].motorista !== null) {
          tdNomeMotorista.innerHTML = data[i].motorista.nome;
          tdHoraSaida.innerHTML = data[i].hora_saida
            .split("T")[1]
            .split(".")[0];
        }

        if ((tdHoraRetorno.innerHTML = data[i].hora_retorno == null)) {
          tdHoraRetorno.innerHTML = data[i].hora_retorno;
        } else {
          tdHoraRetorno.innerHTML = data[i].hora_retorno
            .split("T")[1]
            .split(".")[0];
          btRetorna.setAttribute("disabled", true);
          btRetorna.style.visibility = "hidden";
        }

        tr.appendChild(tdViagem);
        tr.appendChild(tdVeiculo);
        tr.appendChild(tdPlaca);
        tr.appendChild(tdNomeMotorista);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdHoraSaida);
        tr.appendChild(tdHoraRetorno);
        tr.appendChild(tdButtonRetorna);
        tr.appendChild(tdButtonExcluir);

        document.querySelector(".conteudoTabelaViagens").appendChild(tr);
      }
    });
};

const excluirViagem = (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
  };
  fetch(uriExcluirViagem + id, options)
    .then((resp) => {
      return resp.status;
    })
    .then((data) => {
      if (data === 204) {
        exibirMensagem("Viagem excluída!");
      } else {
        exibirMensagem("Ocorreu um erro :(");
      }
    });
};

const fetchTabelaVeiculos = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetVeiculos, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dadosVeiculo = data;
      preencherTabelaVeiculos();
    });
};

const preencherTabelaVeiculos = () => {
  document.querySelector(".conteudoTabelaVeiculos").innerHTML = "";
  for (var i = 0; i < dadosVeiculo.length; i++) {
    const tr = document.createElement("tr");
    const tdIdVeiculo = document.createElement("td");
    const tdIdFrota = document.createElement("td");
    const tdMarca = document.createElement("td");
    const tdPlaca = document.createElement("td");
    const tdCor = document.createElement("td");
    const tdDisponibilidade = document.createElement("td");
    const tdMotorista = document.createElement("td");
    const tdButton = document.createElement("td");
    const button = document.createElement("button");
    const imageButton = document.createElement("img");

    imageButton.src = "../../assets/excluirBt.png";
    imageButton.style.width = "30px";

    button.style.width = "100%";
    button.style.background = "none";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.setAttribute(
      "onclick",
      `excluirVeiculo('${dadosVeiculo[i].id_veiculo}')`
    );

    tdIdVeiculo.innerHTML = dadosVeiculo[i].id_veiculo;
    tdIdFrota.innerHTML = dadosVeiculo[i].idFrota;
    tdMarca.innerHTML = dadosVeiculo[i].marca;
    tdPlaca.innerHTML = dadosVeiculo[i].placa;
    tdCor.innerHTML = dadosVeiculo[i].cor;
    tdDisponibilidade.innerHTML =
      dadosVeiculo[i].disponivel === true ? "Disponível" : "Indisponível";
    if (dadosVeiculo[i].motorista !== null) {
      tdMotorista.innerHTML = dadosVeiculo[i].motorista.nome;
    }

    tr.appendChild(tdIdVeiculo);
    tr.appendChild(tdIdFrota);
    tr.appendChild(tdMarca);
    tr.appendChild(tdPlaca);
    tr.appendChild(tdCor);
    tr.appendChild(tdDisponibilidade);
    tr.appendChild(tdMotorista);
    tr.appendChild(tdButton);
    tdButton.appendChild(button);
    button.appendChild(imageButton);

    document.querySelector(".conteudoTabelaVeiculos").appendChild(tr);
  }
};
const fetchTabelaMotorista = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetMotoristas, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dadosMotorista = data;
      preencherTabelaMotoristas();
    });
};

const preencherTabelaMotoristas = () => {
  document.querySelector(".conteudoTabelaMotoristas").innerHTML = "";
  for (var i = 0; i < dadosMotorista.length; i++) {
    const tr = document.createElement("tr");
    const tdIdMotorista = document.createElement("td");
    const tdNome = document.createElement("td");
    const tdDisponivel = document.createElement("td");
    const tdTelefone = document.createElement("td");
    const tdCpf = document.createElement("td");
    const tdCnh = document.createElement("td");
    const tdEndereco = document.createElement("td");
    const tdButton = document.createElement("td");
    const button = document.createElement("button");
    const imageExclui = document.createElement("img");

    tdIdMotorista.innerHTML = dadosMotorista[i].id_motorista;
    tdNome.innerHTML = dadosMotorista[i].nome;
    tdCpf.innerHTML = dadosMotorista[i].cpf;
    tdCnh.innerHTML = dadosMotorista[i].cnh;
    tdTelefone.innerHTML = dadosMotorista[i].telefone;
    tdEndereco.innerHTML = dadosMotorista[i].endereco;
    tdDisponivel.innerHTML =
      dadosMotorista[i].disponivel === true ? "Disponível" : "Indisponível";
    imageExclui.src = "../../assets/excluirBt.png";
    imageExclui.style.width = "40px";
    button.style.width = "100%";
    button.style.background = "none";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.setAttribute(
      "onclick",
      "excluirMotorista('" + dadosMotorista[i].id_motorista + "')"
    );

    tdButton.appendChild(button);
    button.appendChild(imageExclui);
    tr.appendChild(tdIdMotorista);
    tr.appendChild(tdNome);
    tr.appendChild(tdDisponivel);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdCpf);
    tr.appendChild(tdCnh);
    tr.appendChild(tdEndereco);
    tr.appendChild(tdButton);

    document.querySelector(".conteudoTabelaMotoristas").appendChild(tr);
  }
};
const fetchTabelaManutencao = () => {
  const options = {
    method: "GET",
  };
  fetch(uriVwTabelaManutencao, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dadosTableManutencao = data;
      preencherTabelaManutencao();
    });
};

const preencherTabelaManutencao = () => {
  document.querySelector(".conteudoTabelaManutencao").innerHTML = "";
  for (var i = 0; i < dadosTableManutencao.length; i++) {
    const tr = document.createElement("tr");
    const tdIdManutencao = document.createElement("td");
    const tdIdVeiculo = document.createElement("td");
    const tdMarca = document.createElement("td");
    const tdPlaca = document.createElement("td");
    const tdDataInicio = document.createElement("td");
    const tdDataFim = document.createElement("td");
    const tdValorGasto = document.createElement("td");
    const tdDescricao = document.createElement("td");
    const tdButton = document.createElement("td");
    const button = document.createElement("button");
    const imageButton = document.createElement("img");

    imageButton.src = "../../assets/check.png";
    imageButton.style.width = "30px";

    tdIdManutencao.innerHTML = dadosTableManutencao[i].id_manutencao;
    tdIdVeiculo.innerHTML = dadosTableManutencao[i].id_veiculo;
    tdMarca.innerHTML = dadosTableManutencao[i].marca;
    tdPlaca.innerHTML = dadosTableManutencao[i].placa;
    tdDataInicio.innerHTML = dadosTableManutencao[i].data_inicio
      .split("T")[1]
      .split(".")[0];
    tdDataFim.innerHTML = dadosTableManutencao[i].data_fim;
    tdValorGasto.innerHTML = "R$" + dadosTableManutencao[i].valor_gasto;
    tdDescricao.innerHTML = dadosTableManutencao[i].descricao;

    if ((tdDataFim.innerHTML = dadosTableManutencao[i].data_fim == null)) {
      tdDataFim.innerHTML = dadosTableManutencao[i].data_fim;
    } else {
      tdDataFim.innerHTML = dadosTableManutencao[i].data_fim
        .split("T")[1]
        .split(".")[0];
      button.setAttribute("disabled", true);
      button.style.visibility = "hidden";
    }

    tdButton.appendChild(button);
    button.appendChild(imageButton);
    tr.appendChild(tdIdManutencao);
    tr.appendChild(tdIdVeiculo);
    tr.appendChild(tdMarca);
    tr.appendChild(tdPlaca);
    tr.appendChild(tdDataInicio);
    tr.appendChild(tdDataFim);
    tr.appendChild(tdValorGasto);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdButton);

    button.style.width = "100%";
    button.style.background = "none";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.setAttribute(
      "onclick",
      `updateManutencao('${dadosTableManutencao[i].id_manutencao}')`
    );

    document.querySelector(".conteudoTabelaManutencao").appendChild(tr);
  }
};

const fetchTabelaFuncionaios = () => {
  const options = {
    methot: "GET",
  };
  fetch(uriGetFuncionarios, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dadosTabelaFuncionarios = data;
      preencherTabelaFuncionarios();
    });
};

const preencherTabelaFuncionarios = () => {
  document.querySelector(".conteudoTabelaFuncionario").innerHTML = "";
  for (var i = 0; i < dadosTabelaFuncionarios.length; i++) {
    const tr = document.createElement("tr");
    const tdIdFuncionario = document.createElement("td");
    const tdNomeFunc = document.createElement("td");
    const tdTelefoneFunc = document.createElement("td");
    const tdCpfFunc = document.createElement("td");
    const tdEnderecoFunc = document.createElement("td");
    const tdButton = document.createElement("td");
    const button = document.createElement("button");
    const imageButton = document.createElement("img");

    imageButton.src = "../../assets/excluirBt.png";
    imageButton.style.width = "30px";

    button.style.width = "100%";
    button.style.background = "none";
    button.style.border = "none";
    button.style.cursor = "pointer";
    if (dadosTabelaFuncionarios[i].email === "admin@agrotech.com") {
      button.setAttribute(
        "onclick",
        `exibirMensagem('Este usuário é essencial')`
      );
    } else {
      button.setAttribute(
        "onclick",
        `excluirFunc('${dadosTabelaFuncionarios[i].id_funcionario}')`
      );
    }

    tdIdFuncionario.innerHTML = dadosTabelaFuncionarios[i].id_funcionario;
    tdNomeFunc.innerHTML = dadosTabelaFuncionarios[i].nome;
    tdTelefoneFunc.innerHTML = dadosTabelaFuncionarios[i].telefone;
    tdCpfFunc.innerHTML = dadosTabelaFuncionarios[i].cpf;
    tdEnderecoFunc.innerHTML = dadosTabelaFuncionarios[i].endereco;

    tr.appendChild(tdIdFuncionario);
    tr.appendChild(tdNomeFunc);
    tr.appendChild(tdTelefoneFunc);
    tr.appendChild(tdCpfFunc);
    tr.appendChild(tdEnderecoFunc);
    tr.appendChild(tdButton);
    tdButton.appendChild(button);
    button.appendChild(imageButton);

    document.querySelector(".conteudoTabelaFuncionario").appendChild(tr);
  }
};

const excluirVeiculo = (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
  };
  fetch(uriExcluirVeiculo + id, options)
    .then((resp) => {
      return resp.status;
    })
    .then((data) => {
      if (data == 204) {
        exibirMensagem("Veículo excluído!");
      } else {
        exibirMensagem("Ocorreu um erro :(");
      }
    });
};

const excluirFunc = (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
  };
  fetch(uriExcluirFuncionario + id, options)
    .then((resp) => {
      return resp.status;
    })
    .then((data) => {
      if (data == 204) {
        exibirMensagem("Funcionario excluído!");
      } else {
        exibirMensagem("Ocorreu um erro :(");
      }
    });
};

const updateManutencao = (id) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
  };
  fetch(uriUpdateManutencao + id, options)
    .then((res) => {
      return res.status;
    })
    .then((data) => {
      if (data == 200) {
        exibirMensagem("Veículo pronto!");
      } else {
        exibirMensagem("Ocorreu um erro :(");
      }
    });
};

const excluirMotorista = (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
  };
  fetch(uriExcluirMotorista + id, options)
    .then((resp) => {
      return resp.status;
    })
    .then((data) => {
      if (data == 204) {
        exibirMensagem("Motorista excluído!");
      } else {
        exibirMensagem("Ocorreu um erro :(");
      }
    });
};

const criarFrota = () => {
  if (document.getElementById("tipoFrota").value !== "") {
    const form = {
      tipo: document.getElementById("tipoFrota").value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
      },
      body: JSON.stringify(form),
    };

    fetch(uriCreateFrotas, options)
      .then((res) => {
        return res.status;
      })
      .then((data) => {
        if (data == 201) {
          exibirMensagem("Frota criada!");
        } else {
          exibirMensagem("Ocorreu um erro :(");
        }
      });
  }
};

const listarFrotas = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetFrotas, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        const frotaInfo = document.querySelector(".card").cloneNode(true);

        frotaInfo.classList.remove("model");

        frotaInfo.querySelector("#idFrota").innerHTML = value.id_frota;

        frotaInfo.querySelector(".setorFrota").innerHTML = value.tipo;

        if (value.veiculos.length > 0) {
          for (var i = 0; i < value.veiculos.length; i++) {
            const veiculoInfo = document.createElement("div");

            veiculoInfo.classList.add("veiculoInfo");
            veiculoInfo.innerHTML = `
              <p class="veiculo">${value.veiculos[i].id_veiculo}</p>
              <p class="veiculoMarca">${value.veiculos[i].marca}</p>
              <p class="veiculoCor">${value.veiculos[i].cor}</p>
              <p class="veiculoPlaca">${value.veiculos[i].placa}</p>
            `;
            frotaInfo.querySelector(".nav").appendChild(veiculoInfo);
          }
        }

        document.querySelector(".clonenodeAppend").appendChild(frotaInfo);
      });
    });
};

const listarVeiculosSelectViagens = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetVeiculos, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("veiculo").innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        if (data[i].disponivel === true) {
          option.setAttribute("value", data[i].marca);
          option.setAttribute("id", "vid" + data[i].id_veiculo);
          option.innerHTML =
            data[i].marca + " " + data[i].cor + " " + data[i].placa;

          let select = document.getElementById("veiculo");

          select.add(option);
        }
      }
    });
};

const listarMotoristasSelectVeiculo = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetMotoristas, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("motoristaResponsavel").innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].length !== 0 && data[i].disponivel === true) {
          let option = document.createElement("option");
          option.setAttribute("id", "midve" + data[i].id_motorista);
          option.innerHTML = data[i].nome;
          let select = document.getElementById("motoristaResponsavel");

          select.add(option);
        }
      }
    });
};

const listarFrotasSelectVeiculo = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetFrotas, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("frotaVeiculo").innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("id", "idfrota" + data[i].id_frota);
        option.innerHTML = data[i].tipo;
        let select = document.getElementById("frotaVeiculo");

        select.add(option);
      }
    });
};

const listarMotoristasSelectViagens = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetMotoristas, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("motorista").innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].length !== 0) {
          if (data[i].disponivel === true) {
            let option = document.createElement("option");
            option.setAttribute("value", "mid" + data[i].id_motorista);
            option.innerHTML = data[i].nome;
            let select = document.getElementById("motorista");

            select.add(option);
          }
        }
      }
    });
};

const listarVeiculosSelectManutencao = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetVeiculos, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("manutencaoVeiculo").innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        if (data[i].disponivel === true) {
          option.setAttribute("value", data[i].marca);
          option.setAttribute("id", "vidm" + data[i].id_veiculo);
          option.innerHTML =
            data[i].marca + " " + data[i].cor + " " + data[i].placa;

          let select = document.getElementById("manutencaoVeiculo");

          select.add(option);
        }
      }
    });
};

const regisTrarViagem = () => {
  let selectVeiculo = document.getElementById("veiculo");
  let selectMotorista = document.getElementById("motorista");
  let descricao = document.getElementById("descricao");

  let form = {
    id_veiculo: Number(selectVeiculo.selectedOptions[0].id.split("d")[1]),
    id_motorista: Number(
      selectMotorista.selectedOptions[0].value.split("d")[1]
    ),
    descricao: descricao.value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
    body: JSON.stringify(form),
  };
  fetch(uriCreateViagem, options)
    .then((res) => {
      return res.status;
    })
    .then((data) => {
      if (data == 201) {
        exibirMensagem("Viagem registrada!");
      } else {
        exibirMensagem("Ocorreu um erro :(");
      }
    });
};

const registrarRetorno = (id) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
  };
  fetch(uriViagemRetorno + id, options)
    .then((res) => {
      return res.status;
    })
    .then((data) => {
      if (data == 200) {
        exibirMensagem("Motorista retornou!");
      } else {
        openModalResult();
        document.querySelector(".textResult").innerHTML = "Ocorreu um erro!";
        setTimeout(() => {
          closeModalResult();
        }, 2000);
      }
    });
};

const adicionarVeiculo = () => {
  let inpMarca = document.getElementById("inpMarca");
  let inpPlaca = document.getElementById("inpPlaca");
  let inpCor = document.getElementById("inpCor");
  let selectMotorista = document.getElementById("motoristaResponsavel");
  let selectFrota = document.getElementById("frotaVeiculo");

  let placaValidada = validarPlaca(inpPlaca.value);

  if (inpPlaca.value !== "" && inpMarca.value !== "" && inpCor.value !== "")
    if (placaValidada !== "placa inválida") {
      const form = {
        marca: inpMarca.value,
        placa: inpPlaca.value,
        cor: inpCor.value,
        idMotorista: Number(
          selectMotorista.selectedOptions[0].id.split("e")[1]
        ),
        idFrota: Number(selectFrota.selectedOptions[0].id.split("a")[1]),
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer " + localStorage.getItem("token").split('"')[1],
        },
        body: JSON.stringify(form),
      };

      fetch(uriCreateVeiculos, options)
        .then((res) => {
          return res.status;
        })
        .then((data) => {
          if (data == 201) {
            exibirMensagem("Veículo Criado");
          } else {
            exibirMensagem("Ocorreu um erro :(");
          }
        });
    } else {
      exibirMensagem("Placa inválida");
    }
  else {
    exibirMensagem("Preencha todos os campos");
  }
};

const validarCamposDeEntradaMoto = (form) => {
  if (!validarCPF(form.cpf)) {
    exibirMensagem("CPF inválido!");
    return false;
  }

  if (!validarCNH(form.cnh)) {
    exibirMensagem("CNH inválido!");
    return false;
  }

  if (!validarTelefone(form.telefone)) {
    exibirMensagem("Telefone inválido!");
    return false;
  }

  return true;
};

const adicionarMotorista = () => {
  let inpNome = document.querySelector("#inpNomeMotorista");
  let inpTelefoneMotorista = document.querySelector("#inpTelefoneMotorista");
  let inpCpfMotorista = document.querySelector("#inpCpfMotorista");
  let inpCnhMotorista = document.querySelector("#inpCnhMotorista");
  let inpEnderecoMotorista = document.querySelector("#inpEnderecoMotorista");
  if (
    inpNome.value !== "" &&
    inpTelefoneMotorista.value !== "" &&
    inpCnhMotorista.value !== "" &&
    inpCpfMotorista.value !== "" &&
    inpEnderecoMotorista.value !== ""
  ) {
    let form = {
      nome: inpNome.value,
      telefone: inpTelefoneMotorista.value,
      cpf: inpCpfMotorista.value,
      cnh: inpCnhMotorista.value,
      endereco: inpEnderecoMotorista.value,
    };
    if (validarCamposDeEntradaMoto(form) === true) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer " + localStorage.getItem("token").split('"')[1],
        },
        body: JSON.stringify(form),
      };

      fetch(uriCreateMotorista, options)
        .then((resp) => {
          return resp.status;
        })
        .then((data) => {
          if (data == 201) {
            exibirMensagem("Motorista registrado");
          } else {
            exibirMensagem("Ocorreu um erro :(");
          }
        });
    } else {
      exibirMensagem("Preencha todos os campos!");
    }
  }
};

const adicionarManutencao = () => {
  let selectVeiculo = document.querySelector("#manutencaoVeiculo");
  let inpValorGasto = document.querySelector("#inpValorGastoManutencao");
  let inpDescricao = document.querySelector("#inpDescricaoManutencao");

  let form = {
    id_veiculo: Number(selectVeiculo.selectedOptions[0].id.split("m")[1]),
    valor_gasto: Number(inpValorGasto.value),
    descricao: inpDescricao.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
    body: JSON.stringify(form),
  };
  fetch(uriCreateManutencao, options)
    .then((resp) => {
      return resp.status;
    })
    .then((data) => {
      if (data == 201) {
        exibirMensagem("Manutenção registrada!");
      } else {
        exibirMensagem("Ocorreu um erro :(");
      }
    });
};

const validarCamposDeEntradaFunc = (form) => {
  if (!validarCPF(form.cpf)) {
    exibirMensagem("CPF inválido!");
    return false;
  }

  if (validarEmail(form.email) === "Inválido") {
    exibirMensagem("Email inválido!");
    return false;
  }

  if (!validarTelefone(form.telefone)) {
    exibirMensagem("Telefone inválido!");
    return false;
  }

  return true;
};

const adicionarFuncionario = () => {
  let inpFuncNome = document.querySelector("#inpFuncNome");
  let inpFuncEmail = document.querySelector("#inpFuncEmail");
  let inpFuncSenha = document.querySelector("#inpFuncSenha");
  let inpFuncTelefone = document.querySelector("#inpFuncTelefone");
  let inpFuncCpf = document.querySelector("#inpFuncCpf");
  let inpFuncEndereco = document.querySelector("#inpFuncEndereco");
  let form = {
    nome: inpFuncNome.value,
    email: inpFuncEmail.value,
    senha: inpFuncSenha.value,
    telefone: inpFuncTelefone.value,
    cpf: inpFuncCpf.value,
    endereco: inpFuncEndereco.value,
  };
  if (document.getElementById("checkboxGerenciador").checked) {
    form.role = "Gerenciador";
  }
  if (validarCamposDeEntradaFunc(form) === true) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
      },
      body: JSON.stringify(form),
    };
    fetch(uriCreateFuncionario, options)
      .then((resp) => {
        return resp.status;
      })
      .then((data) => {
        if (data == 201) {
          exibirMensagem("Funcionário registrado!");
        } else {
          exibirMensagem("Ocorreu um erro :(");
        }
      });
  }
};

const activeCard = (card) => {
  card.parentNode.classList.toggle("active");
};

const checkUser = () => {
  document.querySelector("#nomeUser").innerHTML = localStorage
    .getItem("nome")
    .split('"')[1];
  document.querySelector("#nomeUser").style.color = "white";
  document.querySelector("#nomeUser").style.fontSize = "30px";

  let role = localStorage.getItem("role");

  if (role === '"Comum"') {
    console.log(localStorage.getItem("nome"));

    document.querySelector(".leftNavbar").classList.add("model");
    document.querySelector(".btLogoutTop").classList.remove("model");
  }
  if (localStorage.getItem("token") !== null) {
    const tokenJWT = localStorage.getItem("token").split('"')[1];

    try {
      const payload = JSON.parse(atob(tokenJWT.split(".")[1]));
      const expiracao = payload.exp;
      const agora = Math.floor(Date.now() / 1000);

      if (agora >= expiracao) {
        logout();
        return false;
      }

      return true;
    } catch (err) {
      logout();
      return false;
    }
  } else {
    window.location.href = "../login/index.html";
  }
};

const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("pt-BR", { month: "long" });
};

const validarEmail = (email) => {
  regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(.*))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(email)) {
    console.log("Válido");
  } else {
    console.log("Inválido");
  }
};

const validarPlaca = (placa) => {
  var resposta = "placa inválida";
  const regexPlaca = /^([A-Z]{3}\-\d{4})|([A-Z]{3}\d{4})$/;
  const regexPlacaMercosul =
    /^([A-Z]{3}\-\d{1}[A-Z]{1}\d{2})|([A-Z]{3}\d{1}[A-Z]{1}\d{2})|([A-Z]{3}\d{2}[A-Z]{1})$/;
  if (regexPlaca.test(placa)) {
    resposta = "Placa válida no formato atual";
  }
  if (regexPlacaMercosul.test(placa)) {
    resposta = "Placa válida padrão Mercosul";
  }
  return resposta;
};

const validarTelefone = (telefone) => {
  var resposta = false;
  const regexTelefone =
    /^(\+55)?\s?(?:\(?(?:0?[1-9][1-9]|[1-9][0-9])\)?\s?)?(?:9[1-9][0-9]{3}\-?[0-9]{4})$/;
  if (regexTelefone.test(telefone)) {
    resposta = true;
  }
  return resposta;
};

const validarCNH = (cnh) => {
  var char1 = cnh.charAt(0);

  if (cnh.replace(/[^\d]/g, "").length !== 11 || char1.repeat(11) === cnh) {
    return false;
  }

  for (var i = 0, j = 9, v = 0; i < 9; ++i, --j) {
    v += +(cnh.charAt(i) * j);
  }

  var dsc = 0,
    vl1 = v % 11;

  if (vl1 >= 10) {
    vl1 = 0;
    dsc = 2;
  }

  for (i = 0, j = 1, v = 0; i < 9; ++i, ++j) {
    v += +(cnh.charAt(i) * j);
  }

  var x = v % 11;
  var vl2 = x >= 10 ? 0 : x - dsc;

  return "" + vl1 + vl2 === cnh.substr(-2);
};

const validarCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf == "") return false;

  if (
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  )
    return false;

  add = 0;
  for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;

  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  return true;
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "../Login/index.html";
};

const chartManutencaoGetData = () => {
  const options = {
    method: "GET",
  };

  fetch(uriGetVeiculos, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dadosChartManutencao = data;
      chartManutencaoVeiculo();
    });
};

const chartGastoPorMesGetData = () => {
  const options = {
    method: "GET",
  };
  fetch(uriVwGastoPorMes, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dadosGastoPorMes = data;
      chartTotalGastoNoMes();
    });
};

const chartVeiculosDisponiveisGetData = () => {
  const options = {
    method: "GET",
  };

  fetch(uriGetFrotas, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dadosChartVeiculosDisponiveis = data;
      chartVeiculosDisponiveis();
    });
};

const chartManutencaoVeiculo = () => {
  const ctx = document.getElementById("manutencaoVeiculoChart");
  var labelsChart = [];
  var dataChart = [];

  for (let i = 0; i < dadosChartManutencao.length; i++) {
    labelsChart.push(
      dadosChartManutencao[i].marca + " " + dadosChartManutencao[i].placa
    );
    dataChart.push(
      dadosChartManutencao[i].manutencoes.length === 0
        ? 0
        : dadosChartManutencao[i].manutencoes.length
    );
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labelsChart,
      datasets: [
        {
          label: "Qtd.",
          data: dataChart,
          borderWidth: 1,
          backgroundColor: "#007f5f",
          borderColor: "#000",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Quantidade de manutençoes de um veículo",
        },
      },
    },
  });
};

const chartVeiculosDisponiveis = () => {
  const ctx = document.getElementById("veiculosDisponiveisChart");
  var labelsChart = [];
  var dataChart = [];

  for (let i = 0; i < dadosChartVeiculosDisponiveis.length; i++) {
    labelsChart.push(dadosChartVeiculosDisponiveis[i].tipo);
    dataChart.push(dadosChartVeiculosDisponiveis[i].veiculos.length);
  }

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labelsChart,
      datasets: [
        {
          label: "Total",
          data: dataChart,
          borderWidth: 1,
          backgroundColor: [
            "#007f5f",
            "#80b918",
            "#aacc00",
            "#d3d70063",
            "#379237",
            "#54B435",
            "#82CD47",
          ],
          borderColor: "#000",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Total de veículos na frota",
        },
      },
    },
  });
};

const chartTotalGastoNoMes = () => {
  const ctx = document.getElementById("gastoPorMes");
  var labelsChart = [];
  var dataChart = [];

  for (let i = 0; i < dadosGastoPorMes.length; i++) {
    labelsChart.push(getMonthName(dadosGastoPorMes[i].mes));
    dataChart.push(dadosGastoPorMes[i].total);
  }
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labelsChart,
      datasets: [
        {
          label: "Total",
          data: dataChart,
          borderWidth: 1,
          borderColor: "#000",
          ticks: {
            stepSize: 1,
          },
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Total gasto com manutenção no mês em R$",
        },
      },
    },
  });
};

const exibirMensagem = (mensagem) => {
  openModalResult();
  document.querySelector(".textResult").innerHTML = mensagem;
  setTimeout(() => {
    closeModalResult();
  }, FECHAR_MODAL_TIMEOUT);
};

listarFrotas();
chartManutencaoGetData();
chartVeiculosDisponiveisGetData();
chartGastoPorMesGetData();
preencherTabelaViagens();
fetchTabelaVeiculos();
fetchTabelaMotorista();
fetchTabelaManutencao();
fetchTabelaFuncionaios();
listarFrotasSelectVeiculo();
listarMotoristasSelectVeiculo();
listarMotoristasSelectViagens();
listarVeiculosSelectViagens();
listarVeiculosSelectManutencao();
setInterval(() => {
  preencherTabelaViagens();
}, 3000);
setInterval(() => {
  fetchTabelaVeiculos();
}, 3000);
setInterval(() => {
  fetchTabelaMotorista();
}, 3000);
setInterval(() => {
  fetchTabelaFuncionaios();
}, 3000);
setInterval(() => {
  fetchTabelaManutencao();
}, 3000);
setInterval(() => {
  listarFrotasSelectVeiculo();
}, 3000);
setInterval(() => {
  listarMotoristasSelectVeiculo();
}, 3000);
setInterval(() => {
  listarMotoristasSelectViagens();
}, 3000);
setInterval(() => {
  listarVeiculosSelectViagens();
}, 3000);
setInterval(() => {
  listarVeiculosSelectManutencao();
}, 3000);
setInterval(() => {
  checkUser();
}, 10000);
