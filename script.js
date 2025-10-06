function copyContent() {
    const email = "tran.doan@yale.edu";
    const button = document.getElementById('email-link-button');
    
    navigator.clipboard.writeText(email)
        .then(() => {
            const originalText = button.innerHTML;
            button.textContent = 'copied to clipboard';
            button.style.color = '#64864e'; 
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.color = ''; 
            }, 1700);
        })
        .catch(err => {
            console.error('Failed to copy text!!!!: ', err);
        });
}

document.addEventListener('DOMContentLoaded', function() {
  const projectItems = document.querySelectorAll('.project-item');
  
  projectItems.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  });
});