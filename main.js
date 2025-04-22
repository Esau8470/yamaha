const btnToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menuDesplegable');

btnToggle.addEventListener('click', () => {
  menu.classList.toggle('abrir_menu');       
  btnToggle.classList.toggle('colocar_x');  
});
