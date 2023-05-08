const inputStr = document.getElementById("input");
const namesArr = document.getElementsByTagName("div")

// console.log(nameArr);
document.getElementById("input").addEventListener("input", find); 

function find() {
        const inputStr = this.value.trim() ;    
        // console.log(inputStr);
    for (let i = 0; i < namesArr.length; i++) 
    {
        const name = namesArr[i].textContent ; 
        if (name.includes(inputStr)) 
        {
            namesArr[i].innerHTML = colorChar(name, inputStr);
            namesArr[i].style.display = "";
        } 
        else 
        {
            namesArr[i].style.display = "none";
        }
     }
}

function colorChar(name, inputStr) 
{
  const NamecharArr = name.split(inputStr);
  let coloredChar = "";
  for (let i = 0; i < NamecharArr.length; i++)
  {
    coloredChar += NamecharArr[i];
    if (i !== NamecharArr.length - 1)
    {
      coloredChar += `<strong class="color">${inputStr}</strong>`;
    }
  }
  return coloredChar;
}
