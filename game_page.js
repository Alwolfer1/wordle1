player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("p1").innerHTML=player1_name + " -  ";
document.getElementById("p2").innerHTML=player2_name + " -  ";

document.getElementById("p1score").innerHTML= player1_score;
document.getElementById("p2score").innerHTML=player2_score;

document.getElementById("question").innerHTML="Question Turn - " + player1_name;
document.getElementById("answer").innerHTML="Answer Turn - " + player2_name;


function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case= " + word);
    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word="<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box="<br> Answer : <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";

    row= question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}


questionTurn="player1";
answerTurn="player2";

function check(){
    getAns= document.getElementById("input_check_box").value;
    Ans= getAns.toLowerCase();

    if(Ans == word){
        if(answerTurn == "player1"){
            player1_score= player1_score + 1;
            document.getElementById("p1score").innerHTML= player1_score;
        }

        else{
            player2_score= player2_score + 1;
            document.getElementById("p2score").innerHTML= player2_score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn= "player2";
        document.getElementById("question").innerHTML= "Question Turn - " + player2_name;
    }

    else{
        questionTurn="player1"
        document.getElementById("question").innerHTML= "Question Turn - " + player1_name;
    }
    if(answerTurn == "player1"){
        answerTurn= "player2";
        document.getElementById("answer").innerHTML= "Answer Turn - " + player2_name;
    }

    else{
        answerTurn="player1"
        document.getElementById("answer").innerHTML= "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML="";


}





