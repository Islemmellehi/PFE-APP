function getHotels() {
  fetch("http://localhost:9010/hotels")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      data.forEach((item) => {
        html += "<p>" + item.hotelId + " - " + item.hotelName + "</p>";
      });
      console.log(data);
      document.getElementById("responseHtml").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

function deleteHotel() {
  var itemId = parseInt(prompt("Item Id : "));
  fetch(`http://localhost:9010/delete/${itemId}`, {
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
      }
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
    });
}

function postHotel() {
  var desc = prompt("Hotel Name : ");
  var id = parseInt(prompt("Hotel Id : "));
  const info = { hotelName: desc, hotelId: id };

  console.log(JSON.stringify(info));
  fetch(`http://localhost:9010/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to create item");
      } else {
        alert("Item added");
      }
    })
    .catch((error) => {
      console.error("Error creating item:", error);
    });
}

function updateHotel() {
  const id = parseInt(prompt("Hotel Id : "));
  const newName = prompt("New Name : ");

  fetch(`http://localhost:9010/hotels/${id}/name`, {
    // Update with your API endpoint and include the ID in the URL
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

function getHotelById() {
  const id = parseInt(prompt("Hotel Id :"))
  fetch(`http://localhost:9010/hotels/${id}`)
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      html += "<p>" + data.hotelId + " - " + data.hotelName + "</p>";
      console.log('Data retrieved:', data);
      document.getElementById("responseHtml").innerHTML = html;
    })
    .catch((error) => console.error(error));
}