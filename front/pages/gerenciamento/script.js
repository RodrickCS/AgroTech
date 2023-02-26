const uriCreateFrotas = "http://localhost:3000/frotas/create";
const uriGetFrotas = "http://localhost:3000/frotas/read";

const openFrotasEditor = () => {
  document.querySelector(".frotaMain").classList.remove("model");
  document.querySelector(".leftNavbar").classList.add("model");
};

const closeFrotasEditor = () => {
  document.querySelector(".frotaMain").classList.add("model");
  document.querySelector(".leftNavbar").classList.remove("model");
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
      console.log(data)
    });
};
listarFrotas()
