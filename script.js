// Variables for datePicker

var datePicker = document.getElementById('datePicker');
var chooseDate = document.getElementById('chooseDate');

// Variables for printing values

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMilliseconds = document.getElementById('ageMilliseconds');

datePicker.addEventListener('change',function(){

    var options = {year: 'numeric', month: 'long', day: 'numeric'};
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-US',options);

    chooseDate.innerHTML = "DOB : " + " " +  DOB;

    var milliseconds_Btw_DOB = Date.parse(DOB);
    var millisecond_Btw_Now = Date.now();

    var age_in_Milliseconds = millisecond_Btw_Now - milliseconds_Btw_DOB;

    var milliseconds = age_in_Milliseconds;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var month = day*30;
    var year = day*365;

    // Start the calculation

    var years = Math.round(milliseconds/year);
    var months = years*12;
    var days = years*365;
    var hours = Math.round(milliseconds/hour);
    var seconds = Math.round(milliseconds/second);
    

    // Print values in boxes

    ageYear.innerHTML = years
    ageMonth.innerHTML = months
    ageDays.innerHTML = days
    ageHours.innerHTML = hours
    ageSeconds.innerHTML = seconds
    ageMilliseconds.innerHTML = milliseconds;

    document.querySelector('.age-calc').classList.add('expand');


})