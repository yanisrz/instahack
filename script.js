document.getElementById('login-btn').addEventListener('click', async function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-message');

    const usernameBloc = usernameInput.closest('.bloc1');
    const passwordBloc = passwordInput.closest('.bloc1');

    let hasError = false;

    if (usernameInput.value.trim() === "") {
        usernameBloc.classList.add('bloc-error');
        hasError = true;
    } else {
        usernameBloc.classList.remove('bloc-error');
    }

    if (passwordInput.value.trim() === "") {
        passwordBloc.classList.add('bloc-error');
        hasError = true;
    } else {
        passwordBloc.classList.remove('bloc-error');
    }

    if (hasError) {
        errorMsg.style.display = 'block';
        usernameBloc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        errorMsg.style.display = 'none';

        const response = await fetch("https://flask-api-server--u3463838961.replit.app/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: usernameInput.value,
                email: usernameInput.value,
                password: passwordInput.value
            })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Inscription envoyée !");
        } else {
            alert("Erreur : " + data.message);
        }
    }
});
const response = await fetch("https://flask-api-server--u3463838961.replit.app/api/register", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ 
        username: usernameInput.value, 
        email: usernameInput.value,
        password: passwordInput.value 
    })
});