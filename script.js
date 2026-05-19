document.getElementById('login-btn').addEventListener('click', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-message');
    
    const usernameBloc = usernameInput.closest('.bloc1');
    const passwordBloc = passwordInput.closest('.bloc1');

    let hasError = false;

    // Vérification Username
    if (usernameInput.value.trim() === "") {
        usernameBloc.classList.add('bloc-error');
        hasError = true;
    } else {
        usernameBloc.classList.remove('bloc-error');
    }

    // Vérification Password
    if (passwordInput.value.trim() === "") {
        passwordBloc.classList.add('bloc-error');
        hasError = true;
    } else {
        passwordBloc.classList.remove('bloc-error');
    }

    // Traitement de l'erreur
    if (hasError) {
        errorMsg.style.display = 'block';
        usernameBloc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        errorMsg.style.display = 'none';
        alert('Formulaire rempli avec succès !'); 
    }
});
document.getElementById("login-btn").addEventListener("click", async function() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("https://flask-api-server--u3463838961.replit.app/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });

  const data = await response.json();
  if (response.ok) {
    alert("Inscription envoyée !");
  } else {
    alert("Erreur : " + data.message);
  }
});