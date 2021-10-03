let form = document.getElementById("myForm");
const APIURL = "https://api.github.com/users/";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inp = document.getElementById("input").value;
  let userName = inp.split(" ").join("");

  fetch(APIURL + userName)
    .then((responce) => responce.json())
    .then((data) => {
      if (data.url !== undefined) {
        document.getElementById("name").innerText = inp;
        document.getElementById("Follwers").innerText = data.followers;
        document.getElementById("Followings").innerText = data.following;
        document.getElementById("repos").innerText = data.public_repos;
        document.getElementById("avatar").src = data.avatar_url;

        let visitProfile = document.getElementById("visit-profile");
        visitProfile.addEventListener("click", (event) => {
        location.href = data.html_url;
        });
      } else {
        alert("User not exist!");
      }
    });
});
