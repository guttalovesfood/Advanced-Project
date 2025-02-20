



function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible"
  emailjs
  .sendForm(
    'service_l6nxstt',
    'template_baxs7fm',
    event.target,
    'Rrq5-RzNQ_0oboycc'
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