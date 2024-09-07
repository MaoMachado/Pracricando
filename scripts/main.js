const modal = document.querySelector('dialog');
const btnRegistro = document.querySelector('.btn--registro');
const btnCerrar = document.querySelector('.modal_cancel');

btnRegistro.addEventListener('click', () => {
  modal.showModal();
});

btnCerrar.addEventListener('click', () => {
  modal.close();
});
