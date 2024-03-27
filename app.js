// time showing coding 


var showtime = document.getElementById("time");

        function updateTime() {
            var currentTime = new Date();

            var currentHour = currentTime.getHours();
            var currentMinute = currentTime.getMinutes();
            var currentSecond = currentTime.getSeconds();
            var formattedTime = currentHour + ":" + currentMinute + ":" + currentSecond;           
            showtime.textContent = formattedTime;
        }

        updateTime();

       
        setInterval(updateTime, 1000);

        // end 
   
// darkmode coding 
let isDarkMode = false;
const container = document.querySelector('.container');
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");

function dark() {
  isDarkMode = true;
  container.style.backgroundColor = '#333';
  container.style.color = '#fff';
  moon.style.display = 'none';
  sun.style.display = 'block';
}

function light() {
  isDarkMode = false;
  container.style.backgroundColor = '#fff';
  container.style.color = '#333';
  moon.style.display = 'block';
  sun.style.display = 'none';
}






        // todo coding 

var input = document.getElementById("input");
var todo = document.getElementById("todo");

function add() {
   var inputvalue = input.value;

   if (input.value === "") {
       alert("Please enter some text in Input");
   } else {
       
           let li = document.createElement("li");
           var li_value = document.createTextNode(inputvalue);
           li.appendChild(li_value);

           var icon = document.createElement('div');
           var del_icon = document.createElement('i');
           var edit_icon = document.createElement('i');
           del_icon.setAttribute("class", "fa-solid fa-trash");
           del_icon.setAttribute("onclick", "deleteli(this)");
           edit_icon.setAttribute("class", "fa-solid fa-pen-to-square");
           edit_icon.setAttribute("onclick", "edit(this)");
           icon.appendChild(del_icon);
           icon.appendChild(edit_icon);
           li.appendChild(icon);
           todo.appendChild(li);
       }
      };
   

function remove(){
  var removeconfirm = prompt("Are you Sure to delete all Task", "yes" , "NO");
  if(removeconfirm === "yes"){
     todo.innerHTML = "";
     input.value = "";
  }
}

function deleteli(e){
    e.parentNode.parentNode.remove()
}


function edit(e) {
   var editvalue = prompt("Enter your edit value", e.parentNode.parentNode.firstChild.nodeValue);

   if (editvalue === null || editvalue === "") {
       alert("Please give some edit value");
   } else {
       e.parentNode.parentNode.firstChild.nodeValue = editvalue;
   }
}

// end 




