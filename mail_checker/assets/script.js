// Request mail address
const requestMail = prompt("Inserire indirizzo mail");
//Array of accepted mail addres
const mailArray = ['vincenzo@gmail.com', 'gianluca@live.it', 'irene@libero.it', 'andrea@gmail.com']

// Check user input and mail addres
console.log("User mail: " + requestMail)
console.log("Mail array: " + mailArray)

//Check if user mail is in the array
if (mailArray.includes(requestMail)) {
    console.log('%cMail accepted', 'color: green')
} else {
    console.log('%cMail not accepted', 'color: red');  
}