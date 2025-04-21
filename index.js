let password = "";
function handleClick(el) {
   const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const passwordLength = 12;
   password = "";
   for (i = 0; i < passwordLength; i++) {
      let updatedpassword = Math.floor(Math.random() * chars.length);
      password += chars.substring(updatedpassword, updatedpassword + 1);
   }
   let resultBox = document.getElementById("input-result");
   resultBox.style.color = "black";
   resultBox.value = password;


}

function copyClick() {
   let resultBox = document.getElementById("input-result");
   let res = document.getElementById("password-display");

   navigator.clipboard.writeText(resultBox.value)
      .then(() => {
         res.textContent = password + "  Copied!";
         res.classList.add("active");
         setTimeout(() => {
            res.classList.remove("active");
         }, 2000);
      })
      .catch(err => {
         res.textContent = "Failed to copy!";
         res.classList.add("active");
         setTimeout(() => {
            res.classList.remove("active");
         }, 3000);
         console.error("Copy failed", err);
      });
}
