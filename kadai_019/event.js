 const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.style.display = 'none';
    btn.style.display = 'none';

    const newText = document.createElement('h2');
    newText.textContent = '頑張ったので今日は(も)自分にご褒美あげていい日ですよね';
    document.querySelector('main').appendChild(newText);
});