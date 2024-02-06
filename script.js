function CloseMenu() {
  document.getElementById("left-nav-mob").style.display = "none";
  document.getElementById("open-menu").style.display = "block";
  document.getElementById("close-menu").style.display = "none";
}
function OpenMenu() {
  document.getElementById("left-nav-mob").style.display = "initial";
  document.getElementById("close-menu").style.display = "block";
  document.getElementById("open-menu").style.display = "none";
}

function LogOut() {
  document.getElementById("logout").style.display = "initial";
  document.getElementById("showlog").style.display = "none";
  document.getElementById("hidelog").style.display = "initial";
}

function HideLog() {
  document.getElementById("logout").style.display = "none";
  document.getElementById("showlog").style.display = "initial";
  document.getElementById("hidelog").style.display = "none";
}

function SearchPost() {
  document.getElementById("search-result").style.display = "block";
  document.getElementById("search").style.height = "100%";
}
function DeletePost() {
  document.getElementById("search-result").style.display = "none";
  var txt;
  if (confirm("Are you sure you want to delete?")) {
    txt = "You confirmed ";
  } else {
    txt = "You Cancel!";
  }
}

function ConfirmLogOut() {
  var txt;
  if (confirm("Are you sure you want to logout?")) {
    txt = "You confirmed ";
  } else {
    txt = "You Cancel!";
  }
}

// height: 100%;
