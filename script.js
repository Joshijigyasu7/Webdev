let string = "";
let buttons = document.querySelectorAll('.column');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      if (string === undefined ) {
         
          string = eval(document.querySelector('input').value);
         
      }
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == '^'){
        e.target.innerHTML == '^';
        string = string + e.target.innerHTML;
         
      }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        string=eval(document.querySelector('input').value);
        document.querySelector('input').value=string;
    }
  });
