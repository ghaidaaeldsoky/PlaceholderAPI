// Using GET Method to request data from placeholder API

//Get Posts By UserId
function getPosts(userId) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      document.getElementById("posts").innerHTML = "";
      for (post of posts) {
        let content = `<div id="post">
                <h3>${post.title}</h3>
                <h4>${post.body}</h4>
            </div>`;
        document.getElementById("posts").innerHTML += content;
      }
      // console.log(request.response);
    } else {
      alert("ERROR");
    }
  };
}

// Get Users By Clicking on it
function getUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;
      document.getElementById("users").innerHTML = "";
      for (user of users) {
        let content = `<div id="user" onclick="userClicked(${user.id},this)">
            <h3>${user.name}</h3>
            <h4>${user.email}</h4>
          </div>`;
        document.getElementById("users").innerHTML += content;
      }
      // console.log(request.response);
    } else {
      alert("ERROR");
    }
  };
}

// Handle when click (User Selected) => Show the User posts

function userClicked(id, el) {
  // alert("Hi"+id);
  console.log(el);
  let selectedElements = document.getElementsByClassName("selected");
  for (ele of selectedElements) {
    ele.classList.remove("selected");
  }
  el.classList.add("selected");
  getPosts(id);
}

getPosts(1); // By default
getUsers(); //Show Users
