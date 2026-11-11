const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const action = form.action;
    const data = new FormData(form);
   
    try {
      const res = await fetch(action, {method:'POST',body:data,headers:{'Accept':'application/json'}});
      if(res.ok){
        alert('Thanks — message sent! I will reply soon.');
        form.reset();
      } else {
        alert('There was a problem sending your message. Please try emailing me directly.');
      }
    } catch(err){
      alert('Network error. Please try again or email farheenmasod304@gmail.com');
    }
  });
}
