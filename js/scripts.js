//USER INTERFACE LOGIC
$(document).ready (function(){
    $("div#results").hide();
    $("form#quiz").hide(); 
    $("div#thecard").hide();
    $("form#details").submit(function(){
        event.preventDefault();
        var name = $("input#username").val();
        var theclass = $("input#userclass").val();
        var thename = name.toUpperCase();
        $("form#details").hide();
        $("#greeting").text("Hello " + thename + " Class "  + theclass + ":");
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
                $("body").removeClass();
                $("body").addClass("quiz-background2");
                $("div#results").show();
                grading(marks);
                $("form#quiz2").submit(function(){
                    event.preventDefault();
                    $("form#quiz")[0].reset();
                    $("form#quiz").show();
                    $("button#sub1").hide();
                    $("button#sub2").show();
                    $("img#failed").hide();
                    $("div#results").hide();
                    $("button#retake").hide();                    
                });
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
    $("#output").text("You have passed!");
} else if (total>=50 && total<80) {
    $("img#fairly").show();
    $("#output").text("You have fairly passed");
} else if (total<50) {
    $("img#failed").show();
    $("#output").text("You have failed. Retake");
    $("button#retake").show();
}
};