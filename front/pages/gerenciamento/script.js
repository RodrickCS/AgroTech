const uriCreateFrotas = "http://localhost:3000/frotas/create";
const uriCreateViagem = "http://localhost:3000/viagens/create";
const uriGetFrotas = "http://localhost:3000/frotas/read";
const uriGetVeiculos = "http://localhost:3000/veiculos/read";
const uriGetMotoristas = "http://localhost:3000/motoristas/read";
const uriGetViagens = "http://localhost:3000/viagens/read";
const uriViagemRetorno = "http://localhost:3000/viagens/update/";
const uriCreateVeiculos = "http://localhost:3000/veiculos/create";

var dadosVeiculo = [];

const card = document.querySelector(".card");
const cardToggle = document.querySelector(".toggle");

const activeCard = (card) => {
  card.parentNode.classList.toggle("active");
};

const openFrotasEditor = () => {
  document.querySelector(".frotaMain").classList.remove("model");
  document.querySelector(".ver").classList.remove("model");
  document.querySelector(".gerenciar").classList.add("model");
  document.querySelector(".criarFrotaCard").classList.remove("model");
  document.querySelector(".leftNavbar").classList.add("model");
  document.querySelector(".card").classList.add("model");
};

const closeFrotasEditor = () => {
  document.querySelector(".frotaMain").classList.add("model");
  document.querySelector(".criarFrotaCard").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
  document.querySelector(".clonenodeAppend").classList.add("model");
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
};

const closeViagensEditor = () => {
  document.querySelector(".viagensMain").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
  document.querySelector(".tableViagens").classList.add("model");
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
};
const closeVeiculosEditor = () => {
  document.querySelector(".leftNavbar").classList.remove("model");
  document.querySelector(".veiculosMain").classList.add("model");
  document.querySelector(".gerenciarVeiculos").classList.add("model");
  document.querySelector(".registrarVeiculoCard").classList.add("model");
  document.querySelector(".tableVeiculos").classList.add("model");
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
        const tdButton = document.createElement("td");
        const btRetorna = document.createElement("button");
        const imgRetorna = document.createElement("img");

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

        tdButton.appendChild(btRetorna);
        btRetorna.appendChild(imgRetorna);
        tr.setAttribute("id", i + 1);

        tdViagem.innerHTML = data[i].id_viagem;
        tdVeiculo.innerHTML = data[i].veiculos.marca;
        tdPlaca.innerHTML = data[i].veiculos.placa;
        tdDescricao.innerHTML = data[i].descricao;
        tdNomeMotorista.innerHTML = data[i].motorista.nome;
        tdHoraSaida.innerHTML = data[i].hora_saida.split("T")[1].split(".")[0];

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
        tr.appendChild(tdButton);

        document.querySelector(".conteudoTabelaViagens").appendChild(tr);
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

    tdIdVeiculo.innerHTML = dadosVeiculo[i].id_veiculo;
    tdIdFrota.innerHTML = dadosVeiculo[i].idFrota;
    tdMarca.innerHTML = dadosVeiculo[i].marca;
    tdPlaca.innerHTML = dadosVeiculo[i].placa;
    tdCor.innerHTML = dadosVeiculo[i].cor;
    tdDisponibilidade.innerHTML =
      dadosVeiculo[i].disponivel === true ? "Disponível" : "Indisponível";
    tdMotorista.innerHTML = dadosVeiculo[i].motorista.nome;

    tr.appendChild(tdIdVeiculo);
    tr.appendChild(tdIdFrota);
    tr.appendChild(tdMarca);
    tr.appendChild(tdPlaca);
    tr.appendChild(tdCor);
    tr.appendChild(tdDisponibilidade);
    tr.appendChild(tdMotorista);

    document.querySelector(".conteudoTabelaVeiculos").appendChild(tr);
  }
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

    try {
      fetch(uriCreateFrotas, options)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.id_frota) {
            alert("Criado");
            window.location.reload();
          } else {
            alert("Falha, Não autorizado");
          }
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("Preencha o campo Tipo de frota");
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
      for (var i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        if (data[i].disponivel === true) {
          option.setAttribute("value", data[i].marca);
          option.setAttribute("id", "vid" + data[i].id_veiculo);
          option.innerHTML =
            data[i].marca + " " + data[i].cor + " " + data[i].placa;

          let select = document.getElementById("veiculo");

          select.add(option);

          document.getElementById("veiculo").appendChild(option);
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
      return res.json();
    })
    .then((data) => {
      if (data.code === "P2009") {
        alert("Erro dados faltando");
      } else {
        alert("Registrado");
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
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const adicionarVeiculo = () => {
  let inpMarca = document.getElementById("inpMarca");
  let inpPlaca = document.getElementById("inpPlaca");
  let inpCor = document.getElementById("inpCor");
  let selectMotorista = document.getElementById("motoristaResponsavel");
  let selectFrota = document.getElementById("frotaVeiculo");

  let placaValidada = validarPlaca(inpPlaca.value);

  if (placaValidada !== "placa inválida") {
    const form = {
      marca: inpMarca.value,
      placa: inpPlaca.value,
      cor: inpCor.value,
      idMotorista: Number(selectMotorista.selectedOptions[0].id.split("e")[1]),
      idFrota: Number(selectFrota.selectedOptions[0].id.split("a")[1]),
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
      },
      body: JSON.stringify(form),
    };

    fetch(uriCreateVeiculos, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } else {
    alert("Placa inválida");
  }
};

listarFrotas();
listarVeiculosSelectViagens();
listarMotoristasSelectViagens();
listarMotoristasSelectVeiculo();
listarFrotasSelectVeiculo();
setInterval(() => {
  preencherTabelaViagens();
}, 2000);
setInterval(() => {
  fetchTabelaVeiculos();
}, 2000);



function validarPlaca(placa) {
  var resposta = "placa inválida";
  const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
  const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
  const regexPlacaMercosulMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
  if (regexPlaca.test(placa)) {
    resposta = "Placa válida no formato atual";
  }
  if (regexPlacaMercosulCarro.test(placa)) {
    resposta = "Placa válida (padrão Mercosul - carro)";
  }
  if (regexPlacaMercosulMoto.test(placa)) {
    resposta = "Placa válida (padrão Mercosul - moto)";
  }
  return resposta;
}
