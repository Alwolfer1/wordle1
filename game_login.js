function login(){
    p1name = document.getElementById("player1").value;
    p2name = document.getElementById("player2").value;

    localStorage.setItem("player1", p1name);
    localStorage.setItem("player2", p2name);
    window.location = "game_page.html";

}