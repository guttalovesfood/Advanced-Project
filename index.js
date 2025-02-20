



function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible"
  emailjs
  .semdForm(
    'service_l6nxstt',
    'template_88djwb8',
    event.target,
    'user_RDi9coNWEJ-pApL0x'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "the lkkkkkk"
    );
  })
}
//let isModalOpen = false;
//function toggleModal() {
    
  //  if (isModalOpen) {
   //     isModalOpen = false;
   //     return document.body.classList.remove("modal--open");
   // }
   // isModalOpen = true;
    //toggleModal
   // document.body.classList += " modal--open";
//}