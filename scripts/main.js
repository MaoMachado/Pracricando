const modal = document.querySelector('dialog');
const btnRegistro = document.querySelector('.btn--registro');
const btnCerrar = document.querySelector('.modal_cancel');

btnRegistro.addEventListener('click', () => {
  modal.showModal();
});

btnCerrar.addEventListener('click', () => {
  modal.close();
});

// modal.addEventListener('click', function () {
//   modal.classList.add('closing');

//   setTimeout(() => {
//     modal.classList.remove('closing');
//     modal.close();
//   }, 300)
// })
