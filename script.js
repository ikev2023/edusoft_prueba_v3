let avance = 0;
let punteo = 0;
let player;
let player2;
//variables para confeti
const canvas = document.getElementById("fallingLeavesCanvas");
const ctx = canvas.getContext("2d");
const leaves = [];
const numLeaves = 100;
const modal = document.getElementById("modalxd");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*createLeaves();
  animate();*/

//funciones confeti
function createLeaf() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * 18 + 2,
    size: Math.random() * 22 + 3, // Random size between 3 and 25
    speed: Math.random() * 3 + 1, // Random speed between 1 and 4
    color: `rgba(${Math.random() * 200 + 50}, ${Math.random() * 200 + 50}, ${Math.random() * 200 + 50}, ${Math.random() * 0.8 + 0.2})`, // Random color
    //color: `rgba(255, ${Math.random() * 100 + 100}, 0, ${Math.random() * 0.8 + 0.2})`, // Random orange-ish color
    //color: '#000A',
    rotation: Math.random() * 360 // Random initial rotation
  };
}

function createLeaves() {
  for (let i = 0; i < numLeaves; i++) {
    leaves.push(createLeaf());
  }
}

function updateLeaves() {
  for (let i = 0; i < leaves.length; i++) {
    const leaf = leaves[i];
    leaf.y += leaf.speed;
    leaf.x += 1.0 * Math.sin(leaf.y / leaf.size);

    if (leaf.y > canvas.height) {
      // Reset the leaf when it goes below the canvas
      leaf.y = -20;
      leaf.x = Math.random() * canvas.width;
    }
  }
}

function drawLeaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < leaves.length; i++) {
    const leaf = leaves[i];
    ctx.save();
    ctx.translate(leaf.x + leaf.size / 2, leaf.y + leaf.size / 2);
    ctx.rotate((leaf.rotation * Math.PI) / 180);
    ctx.fillStyle = leaf.color;
    ctx.fillRect(-leaf.size / 2, -leaf.size / 2, leaf.size, leaf.size);
    ctx.restore();
  }
}

function animate() {
  updateLeaves();
  drawLeaves();
  requestAnimationFrame(animate);
}

function onWindowResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

//para los comentarios pagina principal  
function toggleDivs() {
  const div1 = document.getElementById('opin1');
  const div2 = document.getElementById('opin2');

  div1.style.display = "none"
  div2.style.display = "block"
}
function toggleDivs2() {
  const div1 = document.getElementById('opin1');
  const div2 = document.getElementById('opin2');

  div1.style.display = "block"
  div2.style.display = "none"
}

//funcion de pausar video en pagina acvitidades ww1 (encargate de los demas videos xd)
function pausarVideo() {
  player.pauseVideo();
}
function pausarVideo2()
{
  player2.pauseVideo();
}
function borrar()
{
  localStorage.clear();
}
//funcion para indicar q se acabo la actividad
function mostrarAlerta() {
  let video = document.getElementById('player').style.display = "none";
  document.getElementById("continuar1").style.display = "block";
  document.getElementById("msj1").style.display = "block";
}
function mostrarAlerta2() {
  let video = document.getElementById('player2').style.display = "none";
  document.getElementById("continuar2").style.display = "block";
  document.getElementById("msj2").style.display = "block";
}
function mostrarAlerta3() {
  let video = document.getElementById('player3').style.display = "none";
  document.getElementById("continuar3").style.display = "block";
  document.getElementById("msj3").style.display = "block";
}
function mostrarAlerta4() {
  let video = document.getElementById('player4').style.display = "none";
  document.getElementById("continuar4").style.display = "block";
  document.getElementById("msj4").style.display = "block";
}
//Funcion para videos yutu
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'GXD0ySQFxRQ',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
    player2 = new YT.Player('player2', {
      height: '315',
      width: '560',
      videoId: 'GXD0ySQFxRQ',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange2
      }
    });
  }

  function onPlayerReady(event) {
    // El reproductor está listo
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      mostrarAlerta();
    }
  }
  function onPlayerStateChange2(event) {
    if (event.data == YT.PlayerState.ENDED) {
      mostrarAlerta2();
    }
  }
  

//Funcion para actulizar el marcador
function seguir1() {
  avance = 1;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir2() {
  avance = 2;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir3() {
  avance = 3;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}
function seguir4() {
  avance = 4;
  localStorage.setItem("av_ww1", avance.toString());
  console.log(avance);
  location.reload();
}

//verificar progreso pagina ww1
function verificarww1() {
  let objeto = localStorage.getItem("av_ww1");
  if (objeto) {
    avance = parseInt(objeto);
    if (avance >= 1) {
      console.log("Actividad 1 completada");
      document.getElementById('btn1').disabled = true;
      document.getElementById('btn2').disabled = false;
    }

    if (avance >= 2) {
      console.log("Actividad 2 completada");
      document.getElementById('btn3').disabled = false;
      document.getElementById('btn2').disabled = true;
    }

    if (avance >= 3) {
      console.log("Actividad 3 completada");
      document.getElementById('btn4').disabled = false;
      document.getElementById('btn3').disabled = true;
    }

    if (avance >= 4) {
      console.log("Actividad 4 completada");
      document.getElementById('btn5').disabled = false;
      document.getElementById('btn4').disabled = true;
    }

    if (avance >= 5) {
      console.log("Actividad 5 completada");
      document.getElementById('btn5').disabled = true;
      document.getElementById('botones').style.display = "none";
      createLeaves();
      animate();
    }
  }
}

//verificar quizz sociales
function responder1()
{
  let rdb_res1 = document.getElementById("correcta1");
    //pregunta 1
    if (rdb_res1.checked)
    {
        punteo++;
        alert("respuesta correcta :D")
        document.getElementById("pregunta1").style.display = 'none';
    }
    else
    {
        alert("respuesta Incocrrecta :C")
        document.getElementById("pregunta1").style.display = 'none';
    }
}