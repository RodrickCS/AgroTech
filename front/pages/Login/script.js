const inpEmail = document.getElementById("inpEmail");
const inpPasswd = document.getElementById("inpPasswd");
uriLogin = "http://localhost:3000/funcionarios/login";

const login = () => {
  if (inpEmail.value != "" && inpPasswd.value != "") {
    let form = {
      email: inpEmail.value,
      senha: inpPasswd.value,
    };

    let emailValidado = validarEmail(inpEmail.value)

    if(!emailValidado) return alert("Email inválido!")

    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    fetch(uriLogin, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length == 2) {  
          localStorage.setItem("token", JSON.stringify(data[0].token));
          localStorage.setItem("role", JSON.stringify(data[1].role));
          localStorage.setItem("nome", JSON.stringify(data[1].nome));

          window.location.href = "../home/index.html";
        }
      });
  } else {
    alert("Preencha todos os campos!");

  }
};

const validarEmail = (email) => {
  regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(.*))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(email)) {
      console.log("Válido")
    } else {
      console.log("Inválido")
    }
};