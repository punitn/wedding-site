
$('[data-toggle="popover"]').popover({
    trigger: 'hover',
        'placement': 'top'
});

$(document).ready(function () {

    $("#navhi").click(function (){
        $("#story").slideUp("slow");
        $("#weddingdaydetails").slideUp("slow");
        $("#scheduleofevents").slideUp("slow");
        $("#travel").slideUp("slow");
        $("#weddingparty").slideUp("slow");
        $("#thingstodo").slideUp("slow");
        $("#rsvp").slideUp("slow");
        $("#registry").slideUp("slow");
        $("#home").slideDown("slow");
    });
    
    $("#navstory").click(function (){
        $("#home").slideUp("slow");
        $("#weddingdaydetails").slideUp("slow");
        $("#scheduleofevents").slideUp("slow");
        $("#travel").slideUp("slow");
        $("#weddingparty").slideUp("slow");
        $("#thingstodo").slideUp("slow");
        $("#rsvp").slideUp("slow");
        $("#registry").slideUp("slow");
        $("#story").slideDown("slow");
    });
    
    $("#navweddingdaydetails").click(function (){
        $("#home").slideUp("slow");
        $("#weddingdaydetails").slideDown("slow");
        $("#scheduleofevents").slideUp("slow");
        $("#travel").slideUp("slow");
        $("#weddingparty").slideUp("slow");
        $("#thingstodo").slideUp("slow");
        $("#rsvp").slideUp("slow");
        $("#registry").slideUp("slow");
        $("#story").slideUp("slow");
    });
    
    $("#navscheduleofevents").click(function (){
        $("#home").slideUp("slow");
        $("#weddingdaydetails").slideUp("slow");
        $("#scheduleofevents").slideDown("slow");
        $("#travel").slideUp("slow");
        $("#weddingparty").slideUp("slow");
        $("#thingstodo").slideUp("slow");
        $("#rsvp").slideUp("slow");
        $("#registry").slideUp("slow");
        $("#story").slideUp("slow");
    });
    
    $("#navtravel").click(function (){
        $("#home").slideUp("slow");
        $("#weddingdaydetails").slideUp("slow");
        $("#scheduleofevents").slideUp("slow");
        $("#travel").slideDown("slow");
        $("#weddingparty").slideUp("slow");
        $("#thingstodo").slideUp("slow");
        $("#rsvp").slideUp("slow");
        $("#registry").slideUp("slow");
        $("#story").slideUp("slow");
    });
    
    $("#navweddingparty").click(function (){
        $("#home").slideUp("slow");
        $("#weddingdaydetails").slideUp("slow");
        $("#scheduleofevents").slideUp("slow");
        $("#travel").slideUp("slow");
        $("#weddingparty").slideDown("slow");
        $("#thingstodo").slideUp("slow");
        $("#rsvp").slideUp("slow");
        $("#registry").slideUp("slow");
        $("#story").slideUp("slow");
    });
    
    $("#navthingstodo").click(function (){
        $("#home").slideUp("slow");
        $("#weddingdaydetails").slideUp("slow");
        $("#scheduleofevents").slideUp("slow");
        $("#travel").slideUp("slow");
        $("#weddingparty").slideUp("slow");
        $("#thingstodo").slideDown("slow");
        $("#rsvp").slideUp("slow");
        $("#registry").slideUp("slow");
        $("#story").slideUp("slow");
    });
    
    $("#navrsvp").click(function (){
        $("#home").slideUp("slow");
        $("#weddingdaydetails").slideUp("slow");
        $("#scheduleofevents").slideUp("slow");
        $("#travel").slideUp("slow");
        $("#weddingparty").slideUp("slow");
        $("#thingstodo").slideUp("slow");
        $("#rsvp").slideDown("slow");
        $("#registry").slideUp("slow");
        $("#story").slideUp("slow");
    });
    
    $("#navregistry").click(function (){
        $("#home").slideUp("slow");
        $("#weddingdaydetails").slideUp("slow");
        $("#scheduleofevents").slideUp("slow");
        $("#travel").slideUp("slow");
        $("#weddingparty").slideUp("slow");
        $("#thingstodo").slideUp("slow");
        $("#rsvp").slideUp("slow");
        $("#registry").slideDown("slow");
        $("#story").slideUp("slow");
    });
    
});
