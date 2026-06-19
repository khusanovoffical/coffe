
  function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const container = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #bc8a6f;"></i> Rahmat ${name}, xabaringiz yuborildi!`;
    
    container.appendChild(toast);
    event.target.reset();
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }