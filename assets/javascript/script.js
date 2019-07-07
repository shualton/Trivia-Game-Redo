var questions = [{
    ques: "What year was the NBA founded?",
    ans: ["2019", "1967", "1946", "1932"],
    name: "firstYear",
    correct: "1946",
    divClass: ".firstYear"
},
{
    ques: "How many teams are in the NBA?",
    ans: ["32", "30", "28", "26"],
    name: "teams",
    correct: "30",
    divClass: ".teams"
},
{
    ques: "What is the name of the NBA Championship Trophy?",
    ans: ["Heisman Trophy", "Stanley Trophy", "Vince Lombardi Trophy", "Larry O'brien Trophy"],
    name: "trophy",
    correct: "Larry O'brien Trophy",
    divClass: ".trophy"
},
{
    ques: "Which player holds the record for most points scored in a single game?",
    ans: ["Wilt Chaimberlain", "Bill Russell", "Michael Jordan", "Kareem Abdul-Jabar"],
    name: "points",
    correct: "Wilt Chaimberlain",
    divClass: ".points"
},
{
    ques: "Who is the only NBA player to win Finals MVP while on the losing team?",
    ans: ["Lebron James", "Michael Jordan", "Jerry West", "Magic Johnson"],
    name: "fmvp",
    correct: "Jerry",
    divClass: ".fmvp"
},
{
    ques: "Who was the first unaminously voted MVP?",
    ans: ["Lebron James", "Michael Jordan", "Kevin Durant", "Stephen Curry"],
    name: "unanimous",
    correct: "Stephen Curry",
    divClass: ".unanimous"
},
{
    ques: "Who was the youngest player to score 10,000 career points?",
    ans: ["Lebron James", "Michael Jordan", "Kevin Durant", "Stephen Curry"],
    name: "youngest",
    correct: "Lebron James",
    divClass: ".youngest"
},
{
    ques: "Which team holds the record for longest win streak?",
    ans: ["Los Angeles Lakers", "Golden State Warriors", "Boston Celtics", "Chicago Bulls"],
    name: "streak",
    correct: "Los Angeles Lakers",
    divClass: ".streak"
},
{
    ques: "Which player has won the most championships?",
    ans: ["Bill Russell", "Michael Jordan", "Larry Bird", "Kareem Abdul-Jabbar"],
    name: "championships",
    correct: "Bill Russell",
    divClass: ".championships"
},
{
    ques: "Which player has won the most MVPs?",
    ans: ["Lebron James", "Michael Jordan", "Larry Bird", "Kareem Abdul-Jabbar"],
    name: "mvp",
    correct: "Kareem Abdul-Jabbar",
    divClass: ".mvp"
}
] 

var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    for (var j = 0; j < 10; j++) {
    $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
    $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
    for (var i = 0; i <= 3; i++) {
        $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
    }
    $('.questions').prepend('<hr />');
    }
    }

    var countdown = function(seconds) {

        var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);
        
        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
        
            for (var i = 0; i < 10; i++) {
        
                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
        
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();
            clearInterval(timer);
            return;
        }
        }, 1000);

        $('#sub-but').on('click', function() {
            clearInterval(timer);
    })
};