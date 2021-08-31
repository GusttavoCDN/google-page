function darkMode() {
    let body = document.querySelector("body");
    let footer = document.querySelector("footer");
    let tagsA = document.querySelectorAll("a");
    let buttons = document.querySelectorAll("button")

    console.log(tagsA)


    footer.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")
    
    tagsA.forEach(a => {
        a.classList.toggle("dark-mode")
    })
    
    buttons.forEach(a => {
        a.classList.toggle("button-dark");
    })
}