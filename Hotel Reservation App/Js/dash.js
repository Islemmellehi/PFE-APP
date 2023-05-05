// Animation for opening and closing sidebar
function toggleSidebar() {
  var sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}
var subMenuBtn = document.querySelector(".sub-menu-btn");
subMenuBtn.addEventListener("click", function () {
  var subMenu = document.querySelector(".sub-menu");
  subMenu.classList.toggle("active");
});
var subMenuBtn = document.querySelector(".sub-menu-btn2");
subMenuBtn.addEventListener("click", function () {
  var subMenu = document.querySelector(".sub-menu2");
  subMenu.classList.toggle("active");
});
var subMenuBtn = document.querySelector(".sub-menu-btn3");
subMenuBtn.addEventListener("click", function () {
  var subMenu = document.querySelector(".sub-menu3");
  subMenu.classList.toggle("active");
});
// Function to update the time display
function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

// Update the time display every second
setInterval(updateTime, 1000);




function getColumnValue(img) {
    var row = img.parentNode.parentNode;
  
    var cell = row.cells[0];
  
    var columnValue = cell.innerText;
  
    console.log(columnValue);
}

function deleteH(img){
    var row = img.parentNode.parentNode;
    var cell = row.cells[0];
    var columnValue = cell.innerText;
    var idH = parseInt(columnValue)

    fetch(`http://localhost:9010/delete/${idH}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete item");
        } else {
          alert("Item deleted successfully.");
          location.reload()
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
}

function updateH(img){
    var row = img.parentNode.parentNode;
    var cell = row.cells[0];
    var columnValue = cell.innerText;
    var idH = parseInt(columnValue)


    const newName = prompt("New Name : ");

  fetch(`http://localhost:9010/hotels/${idH}/name`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: newName,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to update data: ${response.status} ${response.statusText}`
        );
      }
      else{
        alert("Item updated successfully ")
        location.reload()

      }
      return response.json();
    })
    .then((updatedData) => {
      console.log("Data updated:", updatedData);
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
}



function openPopup(){
  var openpop = document.getElementById("pop-up")
  openpop.style.display="block"
}
function closePopup(){
  var openpop = document.getElementById("pop-up")
  openpop.style.display="none"
}











