//code wont run till all elements on html have rendered
$(document).ready(function () {
//save button enabling local storage
    $('.saveBtn').on('click', function () {
        console.log('working?')
        var info = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, info);     
        console.log(localStorage)   
    })
  //adding and removing classes to change colors in data fields
    function timeManagement() {
        var currentTime = dayjs().hour();        
        $('.time-block').each(function () {
            var oldHour = parseInt($(this).attr('id').split('-')[1]);
            if (oldHour < currentTime) {
                $(this).removeClass('present future');
                $(this).addClass('past');
            } else if (oldHour === currentTime) {
                $(this).removeClass('past future');
                $(this).addClass('present');                
            } else {
                $(this).removeClass('past present');              
                $(this).addClass('future');        
            }
        });        
    }
//retreiving saved data per input field from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
//current date in the header
    var currentDay = dayjs();
    $('#currentDay').text(currentDay.format('MMM D, YYYY'));
    timeManagement();
  });

  