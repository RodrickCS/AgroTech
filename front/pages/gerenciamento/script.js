const uriCreateFrotas = "http://localhost:3000/frotas/create";
const uriGetFrotas = "http://localhost:3000/frotas/read";

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

const criarFrota = () => {
  if (document.getElementById("tipoFrota").value !== "") {
    let form = {
      tipo: document.getElementById("tipoFrota").value,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
            alert("Falha");
          }
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("Inválido");
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

        frotaInfo.querySelector(".idFrota").innerHTML = value.id_frota;
        frotaInfo.querySelector(".setorFrota").innerHTML = value.tipo;

        if (value.veiculos.length > 0) {
          for (var i = 0; i < value.veiculos.length; i++) {
            frotaInfo.querySelector(".veiculo").innerHTML +=
              " " + value.veiculos[i].id_veiculo;
              frotaInfo.querySelector(".veiculoCor").innerHTML +=
              " " + value.veiculos[i].cor;
              frotaInfo.querySelector(".veiculoMarca").innerHTML +=
              " " + value.veiculos[i].marca;
              frotaInfo.querySelector(".veiculoPlaca").innerHTML +=
              " " + value.veiculos[i].placa;
          }
        }

        document.querySelector(".clonenodeAppend").appendChild(frotaInfo);
      });
    });
};

listarFrotas();
