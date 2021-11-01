const writeForm = document.querySelector("form")
const listUl = document.querySelector("ul")

writeForm.addEventListener("submit", e => {
    e.preventDefault()

    //create
    let writeInput = writeForm.querySelector("input")
    let listLi = document.createElement("li")
    listUl.appendChild(listLi)

    let listP = document.createElement("p")
    listP.textContent = writeInput.value
    listLi.appendChild(listP)

    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Clear"
    listLi.appendChild(deleteButton)

    let updateButton = document.createElement("button")
    updateButton.textContent = "Edit"
    listLi.appendChild(updateButton)

    writeInput.value = null

    //delete
    deleteButton.addEventListener("click", e => {
        listLi.remove()
    })

    //create update form
    updateButton.addEventListener("click", e => {
        let updateForm = document.createElement("form")
        listLi.appendChild(updateForm)

        let updateInput = document.createElement("input")
        updateInput.type = "text"
        updateForm.appendChild(updateInput)
        
        let updateButton2 = document.createElement("button")
        updateButton2.type = "submit"
        updateButton2.textContent = "Edit"
        updateForm.appendChild(updateButton2)

        //update
        updateForm.addEventListener("submit", e => {
            e.preventDefault()
            listP.textContent = updateInput.value
            updateForm.remove()
        })
    })
})
