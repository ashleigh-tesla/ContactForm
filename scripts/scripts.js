// let's get all required elements

const form = document.querySelector('form')
statusTxt = form.querySelector(".button-area span")

form.onsubmit = (e) => {
    e.preventDefault(); // preventing form from submitting
    statusTxt.style.color = "#0d6efd"
    statusTxt.style.display = 'block'

    let xhr = new XMLHttpRequest() // creating new xml object
    xhr.open("POST", 'message.php', true) //sending post request to message.php file
    xhr.onload = () => { // once ajax loaded
        if (xhr.readyState == 4 && xhr.status == 200) { // if ajax response status is 200 & ready status is 4 means there is no any error 
            let response = xhr.response // storing ajax response in a response variable
            console.log(response)
            if (response.indexOf("Email and Password are Required!") != -1 || response.indexOf("Enter A Valid Email Address!") != 1 || response.indexOf("Sorry, Failed To Send Your Message") != 1) {
                statusTxt.style.color = 'red'
            } else {
                form.reset() // reset
                setTimeout(() => {
                    statusTxt.style.display = 'none'
                }, 3000); //hide the statusTxt after 3 seconds if the message has been sent
            }
            statusTxt.innerText = response
        }
    }
    let formData = new FormData() // creating new Form Data obj. This obj is used to send form data
    xhr.send(formData) // sending form data
}