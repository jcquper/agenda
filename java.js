$(document).ready(function(){

    $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
    var currentHour = moment().hours();
    
    $(".saveBtn").on("click", function(){
        event.preventDefault();
        localStorage.removeItem(scheduledBlock);
        
        var scheduledInput = $(this).siblings(".description").val();   
        var scheduledBlock = $(this).parent().attr("id");
     
        checkTime();
        if (scheduledBlock < currentHour){
            alert("Sorry bud can't change what you missed in the past");
            window.location.reload();
        } else {
    
        localStorage.setItem(scheduledBlock, scheduledInput);
        }
    
    $(".clearBtn").on("click", function(){
        localStorage.clear();
        location.reload();
        console.log("hello");
    });
           
    });
    

    function checkTime (){
        $(".time-block").each(function() {    
            if ($(this).attr("id") < currentHour){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if ($(this).attr("id") > currentHour){
                $(this).addClass("future"); 
                $(this).removeClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
        })
    };
    checkTime();
    

    function runCheckTime() {
        interval = setInterval(checkTime(), 600000);
    }
    runCheckTime();
    
    function checkStorage () {
        
        } else {
    
        scheduledBlock = $(this).parent().attr("id");
        retrieveEvent = localStorage.getItem(scheduledBlock);
        $(this).text(retrieveEvent); 
        }
        })
    };
    checkStorage();
    });
    