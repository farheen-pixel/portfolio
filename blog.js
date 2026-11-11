document.querySelectorAll('.read-more').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const post = btn.closest('.post-body');
    const full = post.querySelector('.full');
    const short = post.querySelector('.short');
    if(full.style.display === 'block'){
      full.style.display = 'none';
      short.style.display = 'block';
      btn.textContent = 'Read More';
    } else {
      full.style.display = 'block';
      short.style.display = 'none';
      btn.textContent = 'Read Less';
    }
  });
});


