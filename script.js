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

  function Delete() {
    var txt;
  if (confirm("Are you sure you want to delete?")) {
    txt = "You confirmed ";
  } else {
    txt = "You Cancel!";
  }
  }