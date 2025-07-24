
        function carregar() {
          
            const usuario = {
                nome: "Usuário Exemplo",
                logado: true
            };

            if (usuario.logado) {
                document.getElementById("userName").innerText = usuario.nome;
                document.getElementById("login").style.display = "none";
                document.getElementById("userInfo").style.display = "block";
            }
        }

        function pesquisar() {
            const query = document.getElementById("searchInput").value;
            alert("Você pesquisou por: " + query);
        }

        function logout() {
            alert("Você saiu da sua conta.");
        }