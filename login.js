const traducao = {
    pt: {
        welcome: "Bem-Vindo",
        subtitle: "Ao Futuro dos Web Players de Música",
        password: "Senha",
        buttonText: "Entrar",
        forgotPassword: "Esqueceu a senha?",
        email: "Digite seu email",
        password: "Digite sua senha",
        quickLogin: "Ou entre rapidamente com:",
        googleLogin: "Entrar com Google"
    },
    en: {
        welcome: "Welcome",
        subtitle: "To the Future of Web Music Players",
        password: "Password",
        buttonText: "Login",
        forgotPassword: "Forgot your password?",
        email: "Enter your email",
        password: "Enter your password",
        quickLogin: "Or quickly log in with:",
        googleLogin: "Login with Google"
    }
};

// Função para trocar o idioma da página
function trocaridioma(traduzir) {
    document.getElementById("welcome").innerText = traducao[traduzir].welcome;
    document.getElementById("subtitle").innerText = traducao[traduzir].subtitle;
    document.getElementById("password-label").innerText = traducao[traduzir].password;
    document.getElementById("login-button").innerText = traducao[traduzir].buttonText;
    document.getElementById("forgot-password").innerText = traducao[traduzir].forgotPassword;
    document.getElementById("quick-login-text").innerText = traducao[traduzir].quickLogin;
    document.getElementById("google-login").innerText = traducao[traduzir].googleLogin;
    document.getElementById("email").placeholder = traducao[traduzir].email;
    document.getElementById("password").placeholder = traducao[traduzir].password;
}

// Alternância do idioma ao clicar na bandeira
document.getElementById("language-button").addEventListener("click", () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "pt" ? "en" : "pt";
    document.documentElement.lang = newLang;
    trocaridioma(newLang);
    const languageButton = document.getElementById("language-button");
    languageButton.innerText = newLang === "pt" ? "🇧🇷" : "🇺🇸";
});

// Lógica de validação e simulação de login
document.querySelector(".login").addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores de e-mail e senha
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Verificação básica
    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    // Validação do formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Simulação de login bem-sucedido
    if (email === "usuario@exemplo.com" && password === "senha123") {
        alert("Login bem-sucedido!");
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
