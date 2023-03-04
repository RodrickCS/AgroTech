const uriCreateFrotas = "http://localhost:3000/frotas/create";
const uriCreateViagem = "http://localhost:3000/viagens/create";
const uriGetFrotas = "http://localhost:3000/frotas/read";
const uriGetVeiculos = "http://localhost:3000/veiculos/read";
const uriGetMotoristas = "http://localhost:3000/motoristas/read";
const uriGetViagens = "http://localhost:3000/viagens/read";
const uriViagemRetorno = "http://localhost:3000/viagens/update/";

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
  document.querySelector(".motoristRretornouCard").classList.remove("model");
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
  document.querySelector(".motoristRretornouCard").classList.add("model");
  document.querySelector(".gerenciarViagem").classList.remove("model");
  document.querySelector(".verViagem").classList.add("model");
  document.querySelector(".tableViagens").classList.remove("model");
};
const gerenciarViagens = () => {
  document.querySelector(".registrarViagemCard").classList.remove("model");
  document.querySelector(".motoristRretornouCard").classList.remove("model");
  document.querySelector(".gerenciarViagem").classList.add("model");
  document.querySelector(".verViagem").classList.remove("model");
  document.querySelector(".tableViagens").classList.add("model");
};

const preencherTabela = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetViagens, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        const tr = document.createElement("tr");
        const tdViagem = document.createElement("td");
        const tdVeiculo = document.createElement("td");
        const tdPlaca = document.createElement("td");
        const tdDescricao = document.createElement("td");
        const tdHoraSaida = document.createElement("td");
        const tdHoraRetorno = document.createElement("td");
        tr.setAttribute("id", i + 1);

        tdViagem.innerHTML = data[i].id_viagem;
        tdVeiculo.innerHTML = data[i].veiculos.marca;
        tdPlaca.innerHTML = data[i].veiculos.placa;
        tdDescricao.innerHTML = data[i].descricao;
        tdHoraSaida.innerHTML = data[i].hora_saida.split("T")[1].split(".")[0];
        if (tdHoraRetorno.innerHTML != "")
          tdHoraRetorno.innerHTML = data[i].hora_retorno
            .split("T")[1]
            .split(".")[0];

        tr.appendChild(tdViagem);
        tr.appendChild(tdVeiculo);
        tr.appendChild(tdPlaca);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdHoraSaida);
        tr.appendChild(tdHoraRetorno);

        document.querySelector(".conteudoTabela").appendChild(tr);
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

const listarVeiculosSelect = () => {
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
        if (data[i].disponivel !== false) {
          option.setAttribute("value", data[i].marca);
          option.setAttribute("id", "vid" + data[i].id_veiculo);
          option.innerHTML =
            data[i].marca + " " + data[i].cor + " " + data[i].placa;

          let select = document.getElementById("veiculo");
          select.remove(0);
          select.add(option);

          document.getElementById("veiculo").appendChild(option);
        }
      }
    });
};

const listarMotoristasSelect = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetMotoristas, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].veiculos.length !== 0) {
          if (data[i].veiculos[0].disponivel === true) {
            let option = document.createElement("option");
            option.setAttribute("id", "mid" + data[i].id_motorista);
            option.innerHTML = data[i].nome;
            let select = document.getElementById("motorista");
           
            select.add(option);
          }
        }
      }
    });
};

const listarMotoristasSelectRetorno = () => {
  const options = {
    method: "GET",
  };
  fetch(uriGetMotoristas, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].veiculos.length !== 0) {
          if (data[i].veiculos[0].disponivel === false) {
            let select = document.getElementById("motoristaRetorno");
            select.remove(0);
            var option = document.createElement("option");
            option.setAttribute("id", "mrid" + data[i].id_motorista);
            option.innerHTML = data[i].nome;
            select.add(option);
            console.log(select.selectedOptions[0])
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
    id_motorista: Number(selectMotorista.selectedOptions[0].id.split("d")[1]),
    descricao: descricao.value,
  };
  console.log(form);
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

const regisTrarRetorno = () => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token").split('"')[1],
    },
  };
  let id_viagem = document.getElementById("motoristaRetorno").selectedOptions[0].id;
  fetch(uriViagemRetorno, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};


listarFrotas();
listarVeiculosSelect();
listarMotoristasSelect();
listarMotoristasSelectRetorno();
preencherTabela();
