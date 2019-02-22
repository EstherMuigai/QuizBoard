//USER INTERFACE LOGIC
$(document).ready (function(){
    $("form#quiz").submit(function(){
        var name = $("input#username").val();
        var q1 = parseInt($("input:radio[name=A1]:checked").val());
        var q2 = parseInt($("input:radio[name=A2]:checked").val());
        var q3 = parseInt($("input:radio[name=A3]:checked").val());
        var q4 = parseInt($("input:radio[name=A4]:checked").val());
    });
});

