function copyContent() {
    const email = "tran.doan@yale.edu";
    const button = document.getElementById('email-link-button');
    
    navigator.clipboard.writeText(email)
        .then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = 'copied to clipboard!';
            button.style.color = '#64864e'; 
            
            // rvert 'copied!' text after 1.5 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.color = ''; // back to og color
            }, 1500);
        })
        .catch(err => {
            console.error('Failed to copy text!!!!: ', err);
        });
}