
function signOut()
{
	window.location.href = "index.html"
}

function getCurrentDate()
{
    let date = new Date(),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate(),
    year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}