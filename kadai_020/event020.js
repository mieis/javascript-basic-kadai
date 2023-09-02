const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const text = document.getElementById('text');
        text.style.display = 'none';    
        
        const newText = document.createElement('h2');
        newText.textContent = 'ボタンをクリックしました';
        document.querySelector('div').appendChild(newText);    
    }, 2000);
});