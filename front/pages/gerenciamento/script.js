const uriCreateFrotas = "http://localhost:3000/frotas/create";
const uriGetFrotas = "http://localhost:3000/frotas/read";
const uriGetVeiculos = "http://localhost:3000/veiculos/read";
const uriGetMotoristas = "http://localhost:3000/motoristas/read";

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
};

const closeViagensEditor = () => {
  document.querySelector(".viagensMain").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
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
        var option = document.createElement("option");
        if (data[i].disponivel !== false) {
          option.setAttribute("value", data[i].marca);
          option.innerHTML =
            data[i].marca + " " + data[i].cor + " " + data[i].placa;

          var select = document.getElementById("veiculo");

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
          console.log(data[i].veiculos[i].disponivel);
          if (data[i].veiculos[i].disponivel === true) {
            var option = document.createElement("option");
            option.value = data[i].id_motorista;
            option.innerHTML = data[i].nome;

            var select = document.getElementById("motorista");

            select.add(option);
          }
        }
      }
    });
};

listarFrotas();
listarVeiculosSelect();
listarMotoristasSelect();
