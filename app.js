let userData = [
    {
        username : "diky",
        password : "admin",
        role : "admin"
    }

    {
        username : "mamat",
        password : "apasih",
        role : "useer"
    }
]

let aktifitas = [
    {
        no : 1,
        kegiatan: "Lari",
        hari: "Senin",
        poster:"google.com"
    },
    {
        no : 2,
        kegiatan: "Estafet",
        hari: "Selasa",
        poster: "google.com"
    }
]

// function funShow(index) {
//     var listData = arrData.map((val) => {
//       if (val.no != index) {
//         return `
//           <tr>
//             <td>${val.no}</td>
//             <td>${val.kegiatan}</td>
//             <td>${val.hari}</td>
              
//             <td><input type='button' value='Delete' onclick="deleteData(${val.no})"/></td>
//             <td><input type='button' value='Edit' onclick="edit(${val.no})"/></td>
//           </tr>
//           `;
//       }
  
      
//     });
  
//     document.getElementById("renderData").innerHTML = listData.join("");
//   }

function funLogin() {
    let userName = document.getElementById("username").value;
    let password = document.getElementById("pwd").value;

    if(userName == "admin" && password == "admin" ){
        return true;
    }
    else if(username =="" || password ==""){
        alert("Masukan username dan password Anda");
        return false;
    }
    // else{
    //     alert("Username atau password yang Anda masukan SALAH");
    //     return false;
    //   }

    arrData.push({
        no: new Selection().getTime(),
        kegiatan,
        hari,
        poster,
    });

    document.getElementById("username").value = "";
    document.getElementById("pwd").value = "";

    funShow();
}
