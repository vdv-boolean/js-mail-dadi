// Request mail address
const requestMail = prompt("Inserire indirizzo mail");
//Array of accepted mail addres
const mailArray = ['vincenzo@gmail.com', 'gianluca@live.it', 'irene@libero.it', 'andrea@gmail.com'];

// Check user input and mail addres
console.log("User mail: " + requestMail)
console.log("Mail array: " + mailArray)

//Check if user mail is in the array
let check = false;

for (let i = 0; i < mailArray.length; i++){
if (requestMail == mailArray[i]) {
    check = true;
    console.log('%cMail accepted', 'color: green');
    const welcomeMsg = alert("Welcome");
}
}

if (check == false){
    console.log('%cMail not accepted', 'color: red');  
    const accessDeniedMsg = alert("Acces denied!");
}
