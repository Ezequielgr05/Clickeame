piano = document.querySelector("#Piano")
contenido = document.querySelector("#contenido")

piano.addEventListener("click", (e) => {
    e.preventDefault()
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = e.target.href;
    }, 500);
})