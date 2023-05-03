//Pension get request for dashboard
function getPensions() {
  fetch("http://localhost:2001/pensions")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((pension) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${pension.COD_PENS}</td>
            <td>${pension.LIB_PENS}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:20%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:18%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}
//Contrat get request for dashboard

function getContrats() {
  fetch("http://localhost:2001/contrats")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((pension) => {
        const row = document.createElement("tr");
        const jsonDateDeb = pension.DATE_DEBUT;
        const date = new Date(jsonDateDeb);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDateDeb = `${month}/${day}/${year}`;

        const jsonDateFin = pension.DATE_FIN;
        const dateFin = new Date(jsonDateFin);
        const yearf = dateFin.getFullYear();
        const monthf = dateFin.getMonth() + 1;
        const dayf = dateFin.getDate();
        const formattedDateFin = `${monthf}/${dayf}/${yearf}`;
        row.innerHTML = `
            <td>${pension.COD_CONTRAT}</td>
            <td>${formattedDateDeb}</td>
            <td>${formattedDateFin}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:15%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:13.5%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}
//Societe get request for dashboard

function getSocietes() {
  fetch("http://localhost:2001/societes")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((societe) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${societe.COD_SOC}</td>
            <td id="b">${societe.LIB_SOC}</td>
            <td id="c">${societe.ABR_SOC}</td>
            <td id="d">${societe.MAT_SOC}</td>
            <td id="e">${societe.ADR_SOC}</td>
            <td id="f">${societe.TEL_SOC}</td>
            <td id="g">${societe.FAX_SOC}</td>
            <td id="h">${societe.MAIL_SOC}</td>
            <td id="i">${societe.WEB_SOC}</td>
            <td id="j">${societe.RIB_SOC}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:40%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:33%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Room Category get request for dashboard

function getRoomCats() {
  fetch("http://localhost:2001/roomcats")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((roomcats) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${roomcats.CAT_ROOM}</td>
            <td id="b">${roomcats.LIB_ROMM}</td>
            <td id="c">${roomcats.COD_VUE}</td>
            <td id="d">${roomcats.NB_LIT}</td>
            <td id="e">${roomcats.GRAND_LIT}</td>
            <td id="f">${roomcats.CLIMATISEUR}</td>
            <td id="g">${roomcats.BAIN}</td>
            <td id="h">${roomcats.TV}</td>
            <td id="i">${roomcats.BEBE_COTE}</td>
            <td id="i">${roomcats.CHAUFFAGE}</td>
            <td id="i">${roomcats.INTERNET}</td>
            <td id="i">${roomcats.TELEPHONE}</td>
            <td id="i">${roomcats.BALCON}</td>
            <td id="i">${roomcats.KITCHEN}</td>
            <td id="i">${roomcats.NB_PAX}</td>
            <td id="i">${roomcats.NB_ADL}</td>
            <td id="i">${roomcats.NB_ENF}</td>
            <td id="i">${roomcats.NB_BEB}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width: 45%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:39%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Room Vues get request for dashboard

function getVues() {
  fetch("http://localhost:2001/roomvues")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((vue) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${vue.COD_VUE}</td>
            <td>${vue.LIB_VUE}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:20%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:18%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Contrat Stock Room get request for dashboard

function getStock() {
  fetch("http://localhost:2001/stock")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((stock) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${stock.COD_CONTRAT}</td>
            <td id="b">${stock.COD_PERIODE}</td>
            <td id="c">${stock.CAT_ROOM}</td>
            <td id="d">${stock.STOCK}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:18%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:15%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Hotel Photo get request for dashboard
function getHotelPhotos() {
  fetch("http://localhost:2001/hotelphotos")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((hPhoto) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${hPhoto.COD_HOTEL}</td>
            <td id="b">${hPhoto.COD_PHOTO}</td>
            <td id="c">${hPhoto.PHOTO_HOTEL}</td>
            <td id="d">${hPhoto.FILE_NAME}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:18%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:15%" />
            </td>
            
          `;
        tableBody.appendChild(row);
        
      });
      
      

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Reservation get request for dashboard

function getReservations() {
  fetch("http://localhost:2001/reservations")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((reservation) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${reservation.COD_RESA}</td>
            <td id="b">${reservation.DATE_ARR}</td>
            <td id="c">${reservation.DATE_DEPP}</td>
            <td id="d">${reservation.DAT_SAISIE}</td>
            <td id="e">${reservation.NB_CHAMBRE}</td>
            <td id="f">${reservation.NOM_RESA}</td>
            <td id="g">${reservation.PRN_RESA}</td>
            <td id="h">${reservation.MAIL_RESA}</td>
            <td id="i">${reservation.TEL_RESA}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:40%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:33%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Reservation Detail get request for dashboard

function getResDetails() {
  fetch("http://localhost:2001/resdetails")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((reservation) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${reservation.COD_RESA}</td>
            <td id="b">${reservation.LIG_RESA}</td>
            <td id="c">${reservation.CAT_ROOM}</td>
            <td id="d">${reservation.COD_PENS}</td>
            <td id="e">${reservation.NB_ADL}</td>
            <td id="f">${reservation.NB_ENF}</td>
            <td id="g">${reservation.NB_BEB}</td>
            <td id="h">${reservation.AGE_ENF}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:40%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:33%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Contrat prix get request for dashboard

function getContratPrix() {
  fetch("http://localhost:2001/contratprix")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((prix) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${prix.COD_CONTRAT}</td>
            <td id="b">${prix.COD_PERIODE}</td>
            <td id="c">${prix.COD_PENS}</td>
            <td id="d">${prix.CAT_ROOM}</td>
            <td id="e">${prix.PRIX_ADL}</td>
            <td id="f">${prix.PRIX_ENF}</td>
            <td id="g">${prix.PRIX_BEB}</td>

            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:18%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:15%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Users get request for dashboard
function getUsers() {
  fetch("http://localhost:2001/users")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${user.USERID}</td>
            <td id="b">${user.USERNAME}</td>
            <td id="c" style="word-wrap: break-word;">${user.PASSWORD}</td>
            <td id="d">${user.ENABLED}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:18%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:15%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//User roles get request for dashboard
function getUserRoles() {
  fetch("http://localhost:2001/userroles")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((role) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${role.USERID}</td>
            <td id="b">${role.ROLEID}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:8%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:7%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Roles get request for dashboard
function getRoles() {
  fetch("http://localhost:2001/roles")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((role) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${role.ROLEID}</td>
            <td id="b">${role.ROLENAME}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:8%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:7%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

//Hotels get request for dashboard
function getHotels() {
  fetch("http://localhost:2001/hotels")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((hotel) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${hotel.COD_HOTEL}</td>
            <td id="b">${hotel.LIB_HOTEL}</td>
            <td id="b">${hotel.ABR_HOTEL}</td>
            <td id="b">${hotel.PAYS_HOTEL}</td>
            <td id="b">${hotel.VILL_HOTEL}</td>
            <td id="b">${hotel.CLASS_HOTEL}</td>
            <td id="b">${hotel.CATEG_HOTEL}</td>
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:22%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:19%" />
            </td>
            
          `;
        tableBody.appendChild(row);
      });
      

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

//pop upp
function PopUp() {
  const popUp = document.getElementById("pop-up");

  popUp.style.display = "block";
}

closeButton.addEventListener("click", () => {
  popUp.style.display = "none";
});

//Hotels get request for dashboard
function getMessages() {
  fetch("http://localhost:2001/messages")
    .then((response) => response.json())
    .then((data) => {
      var html = "";
      const tableBody = document.querySelector("#tbody");
      var len = data.length;

      data.forEach((message) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="a">${message.COD_MESSAGE}</td>
            <td id="b">${message.SENDER}</td>
            <td id="b">${message.CONTENT}</td>
           
            <td><img src="/Hotel Reservation App/imgs/icons/delete.png" alt="" class="delete-btn" id="deltimg" onclick="deleteH(this)" style="    
            margin-left: 0%;
            margin-top: 0%; 
            width:10%" /><img src="/Hotel Reservation App/imgs/icons/modify.png" class="delete-btn" alt="" onclick="updateH(this)" id="modfimg" style="    
            margin-left: 5%;
            margin-top: 0%; 
            width:8%" />
            </td>
            
          `;
        tableBody.appendChild(row);
        
        const container = document.getElementById("pop-up");
        container.innerHTML += `
        <div id="message-container">
        <p><span id="sp">Sender</span> : ${message.SENDER}</p>
        <p><span id="sp">Content</span>:${message.CONTENT}</p>
        </div>
        
        
        `;
      });
      

      console.log(len);
      document.getElementById("responsepensions").innerHTML = html;
    })
    .catch((error) => console.error(error));
}


fetch("http://localhost:2001/messages")
    .then((response) => response.json())
    .then((data) => {
      
      data.forEach((message) => {
        
        
        const container = document.getElementById("pop-up");
        container.innerHTML += `
        <div id="message-container">
        <p><span id="sp">Sender</span> : ${message.SENDER}</p>
        <p><span id="sp">Content</span>:${message.CONTENT}</p>
        </div>
        
        
        `;
      });
      

      
})
