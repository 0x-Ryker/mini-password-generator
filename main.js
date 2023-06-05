let psswrd_link = document.getElementById("gen");

function generatePwd() {
    let pass = ``;
    let psd_string = `ABCDEFGHIJKLMNOPQRSTUVWXYZ` + 
    `abcdefghijklmnopqrstuvwxyz0123456789$+@#][`;

    for (let i = 1; i <= 12; i++) {
        let char = Math.floor(Math.random()*psd_string.length+1);

        pass += psd_string.charAt(char)
        
    }

    return pass;
}

function pwd_Run() {
    psswrd_link.innerHTML = generatePwd();
}

let button1 = document.getElementById("gen");

button1.addEventListener("click", function() {
  button1.style.display = "block";
});