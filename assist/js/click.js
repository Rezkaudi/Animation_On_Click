let section = document.querySelectorAll(".item");

section.forEach((i) => {
    i.addEventListener('click', () => {
        i.classList.add(i.innerHTML)
        setTimeout(() => {
            section.forEach((j) => {
                j.classList.remove(j.innerHTML)
            })
        }, 2100)
    })
})