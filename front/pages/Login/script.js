const inpEmail = document.getElementById("inpEmail");
const inpPasswd = document.getElementById("inpPasswd");
uriLogin = "http://localhost:3000/funcionarios/login";

const login = () => {
  if (inpEmail.value != "" && inpPasswd.value != "") {
    let form = {
      email: inpEmail.value,
      senha: inpPasswd.value,
    };

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
          alert("redirecting...");
          localStorage.setItem("token", JSON.stringify(data[0].token));
          localStorage.setItem("role", JSON.stringify(data[1].role));

          window.location.href = "../home/index.html";
        }
      });
  } else {
    alert("Preencha todos os campos!");

  }
};
