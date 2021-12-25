<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date.parse()</h2>
<p>Date.parse() returns the number of milliseconds between the date and January 1, 1970:</p>

<p id="demo"></p>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<script>
const msec = Date.parse("March 21, 2012");
document.getElementById("demo").innerHTML = msec;

const sec = Date.parse("2021-05-09");
document.getElementById("demo1").innerHTML = sec;

var tomorrow = new Date("2021-05-09");
tomorrow.setDate(tomorrow.getDate()+1);

document.getElementById("demo2").innerHTML = tomorrow;

var dd = tomorrow.getDate();

var mm = tomorrow.getMonth()+1; 
var yyyy = tomorrow.getFullYear();

if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
}

document.getElementById("demo3").innerHTML = yyyy + "-" + mm + "-" + dd;

document.getElementById("demo4").innerHTML = typeof(yyyy + "-" + mm + "-" + dd);


</script>

</body>
</html>
