function date_time(id)
{
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var session = "AM";

    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    if (h == 0)
    {
        h = 12;
    }
    if (h > 12)
    {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    ms = (ms < 10) ? "0" + ms : ms;

    result = " " + days[day] + ',' + " " + months[month] + " " + d + " " + year + " " + h + ':' + m + ':' + s + ':' + ms + " " + session;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("'+id+'");','1000');
    return true;
}