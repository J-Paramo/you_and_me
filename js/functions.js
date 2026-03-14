
    function mostrar(){
        document.querySelector("#inicio h2").style.display = "none";
        document.querySelector("#inicio h5").style.display = "none";
        document.querySelector(".heart-btn").style.display = "none";

        document.getElementById("mensaje").style.display = "block";

        setTimeout(() => {
            document.getElementById("mensaje").style.display = "none";
            document.getElementById("formulario").style.display = "block";
        }, 2000); 
    }

    let peliculasElegidas = ['Pelicula 1 mensaje','Pelicula 2 mensaje','Pelicula 3 mensaje','Pelicula 4 mensaje'];

    function mostrar() {
        document.querySelector("#inicio h2").style.display = "none";
        document.querySelector("#inicio h5").style.display = "none";
        document.querySelector(".heart-btn").style.display = "none";
        document.getElementById("mensaje").style.display = "block";

        setTimeout(() => {
            document.getElementById("mensaje").style.display = "none";
            document.getElementById("formulario").style.display = "block";
            document.getElementById("resultado").innerHTML = peliculasElegidas.join('<br>');
        }, 2000);
    }

    function girar() {
        let resultado = document.getElementById("resultado");
        let botonDiv = document.getElementById("boton-div");
        botonDiv.style.display = "none";

        let tituloH4 = document.querySelector("#formulario h4");
        let tituloH5 = document.querySelector("#formulario h5");
        tituloH4.style.display = "none";
        tituloH5.style.display = "none";

        let mensajeRuleta = document.getElementById("mensaje-ruleta");
        mensajeRuleta.style.display = "block";

        let mensajeCompartir = document.getElementById("mensaje-compartir");
        mensajeCompartir.style.display = "block";

        let ciclos = 30;
        let delay = 200;
        let contador = 0;
        let copia = [...peliculasElegidas];

        let intervalo = setInterval(() => {
            let aleatorios = [];
            for(let i=0; i<2; i++){
                let index = Math.floor(Math.random() * copia.length);
                aleatorios.push(copia[index]);
            }
            resultado.innerHTML = `🎬 ${aleatorios[0]} | ${aleatorios[1]} ❤️`;
            contador++;
            if(contador >= ciclos){
            
                clearInterval(intervalo);
                mensajeRuleta.style.display = "none";

                let final = [];
                let tmp = [...copia];
                for(let i=0; i<2; i++){
                    let index = Math.floor(Math.random() * tmp.length);
                    final.push(tmp[index]);
                    tmp.splice(index,1);
                }

                resultado.innerHTML = `<div class="resaltado">🎉 Ganadoras: <br>1️⃣ ${final[0]} <br>2️⃣ ${final[1]}</div>`;


                let contadorCuenta = 10;
                let cuenta = setInterval(() => {
                    mensajeCompartir.innerHTML = `Comparte este screenshot con tu mujer 💌 <br> AUTODESTRUCCIÓN EN 💥 <span class="palpitar">${contadorCuenta}</span> 💥`;
                    contadorCuenta--;
                    if(contadorCuenta < 0){
                        clearInterval(cuenta);
                        let mensajeDiv = resultado.querySelector(".resaltado");
                        explotarDiv(mensajeDiv);
                        explotarDiv(mensajeCompartir);

                        setTimeout(() => {
                            resultado.innerHTML = "<strong>MENSAJE DESTRUIDO... TE VEO EN LA CITA BABY 💌</strong>";
                        }, 1000);
                    }
                }, 1000);
            }
        }, delay);
    }


    function explotarDiv(div) {
        let rect = div.getBoundingClientRect();
        let particulas = [];

        for(let i=0; i<20; i++){
            let span = document.createElement("span");
            span.classList.add("particula");
            span.style.left = rect.left + rect.width/2 + "px";
            span.style.top = rect.top + rect.height/2 + "px";

            let x = (Math.random() - 0.5) * 200 + "px";
            let y = (Math.random() - 0.5) * 200 + "px";
            span.style.setProperty("--x", x);
            span.style.setProperty("--y", y);

            span.innerHTML = "💥"; 
            document.body.appendChild(span);

            particulas.push(span);

            setTimeout(() => span.remove(), 1000);
        }
        div.style.display = "none";
    }