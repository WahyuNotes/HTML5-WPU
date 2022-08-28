const mycanvas = document.getElementById("mycanvas");

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext("2d"); //untuk membuat objek 2D dengan canvas
// c.fillRect(25, 25, 100, 100); //(sumbu x, sumbu y, width, height)

//untuk mengatur onjek dari c caranya sama seperti styling sebelumnya yang di DOM
//dibawah ini pembuatan dengan cara manual
/*c.fillStyle = 'pink';
c.strokeStyle = '#333';
c.lineWidth = 5;

c.rect(50,50,300,400);
c.fill();
c.stroke();
*/
//membuat circle
/*
c.fillStyle = 'lightblue';
c.strokeStyle = '#000';
c.lineWidth = 2;

c.arc(200,300,150,0,2*Math.PI);//(sumbu x, sumbu y, radius awal, radius akhir)
c.fill();
c.stroke();
*/

//Path
/*
c.fillStyle = 'lightgreen';
c.strokeStyle = '#000';
c.lineWidth = 2;

c.beginPath();
c.moveTo(300,50);
c.lineTo(450,350);
c.lineTo(150,350);
c.lineTo(300,50);//bisa juga dengan c.closePath();
c.fill();
c.stroke();*/

const judul = document.querySelector(".teks");
let x = 300;
let y = 200;
let radius = 150;
let speedX = 10;
let speedY = 10;
let cuy = 0;
const draw = () => {
  window.requestAnimationFrame(draw);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    speedX = -speedX;
    c.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
  }
  if (y + radius > innerHeight || y - radius < 0) {
    speedY = -speedY;
    c.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
  }
  // cuy++;
  // if (cuy <= 50) {
  //   c.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
  // } else if (cuy > 51) {
  //   c.fillStyle = "green";
  // }
  // if (cuy == 100) {
  //   cuy = 0;
  // }
  x += speedX;
  y += speedY;
};

draw();
