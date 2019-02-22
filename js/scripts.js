//USER INTERFACE LOGIC
$(document).ready (function(){
    $("div#results").hide();
    $("form#quiz").hide(); 
    $("div#thecard").hide();
    $("form#details").submit(function(){
        event.preventDefault();
        $("form#details").hide();
        var name = $("input#username").val();
        var theclass = $("input#userclass").val();
        $("#greeting").text("Hello " + name + " of Class " + theclass);
        $("div#thecard").show();
        $("form#proceed").submit(function(){
            event.preventDefault();
            $("body").addClass("quiz-background");
            $("div#thecard").hide();
            $("form#quiz").show(); 
            $("form#quiz").submit(function(){
                event.preventDefault();
                var q1 = parseInt($("input:radio[name=A1]:checked").val());
                var q2 = parseInt($("input:radio[name=A2]:checked").val());
                var q3 = parseInt($("input:radio[name=A3]:checked").val());
                var q4 = parseInt($("input:radio[name=A4]:checked").val());
                var marks = grade(q1,q2,q3,q4);
                $("form#quiz").hide();
                $("div#results").show();
                grading(marks);
            });
        });
    });
});

//BUSINESS LOGIC
var grade = function (num1,num2,num3,num4) {
    return (num1+num2+num3+num4)/20*100;
};

function grading (total){
if (total>80) {
    $("img#passed").show();
    $("#output").text("You have passed");
} else if (total>50 && total<80) {
    $("img#fairly").show();
    $("#output").text("You have fairly passed");
} else if (total<80) {
    $("img#failed").show();
    $("#output").text("You have failed. Retake");
    $("button#retake").show();
}
};