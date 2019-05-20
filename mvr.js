function initMVR()
{
	this.me = JSON.parse(window.localStorage.getItem("me"))

	document.getElementById("fullname").value = this.me.fullname
	document.getElementById("embg").value = this.me.embg
	document.getElementById("mobile").value = this.me.mobile
	document.getElementById("mail").value = this.me.mail
}

function sendRequest()
{
	var mvr = initMVRObject()
	var inputs = document.getElementsByTagName("input")

	for (var i = 0; i < inputs.length; i++)
	{
		switch(inputs[i].getAttribute("path"))
		{
			case "location":
				mvr.location = inputs[i].value
				if (!mvr.location)
				{
					alert("Сите полиња се задолжителни")
					return
				}
				break

			case "settlement":
				mvr.settlement = inputs[i].value
				if (!mvr.settlement)
				{
					alert("Сите полиња се задолжителни")
					return
				}
				break

			case "term":
				mvr.dateOfSign = inputs[i].value
				if (!mvr.dateOfSign)
				{
					alert("Задолжителните полиња се празни")
					return
				}

				mvr.releaseDate =  getRandomDate(new Date(mvr.dateOfSign))
				break

			case "id":
				if (inputs[i].checked)
					mvr.type += "Лична карта"
				break

			case "driving_licence":
				if (inputs[i].checked)
					mvr.type += "Возачка дозвола "
				break

			case "pasport":
				if (inputs[i].checked)
					mvr.type += "Пасош "
				break
		}
	}

	let selected = Array.from(inputs).filter(c => { return c.type == "checkbox" }).map(ch => {
        return ch.checked
    })

	let _flag = false
    for (var i = 0; i < selected.length; i++)
    {
    	if (selected[i])
    	{
    		_flag = true
    		break
    	}
    }

    if (!_flag)
    {
    	alert("Селектирајте тип на документ")
    	return
    }

	this.me.mvr.unshift(mvr)
	window.localStorage.setItem("me", JSON.stringify(this.me))

	alert("Успешно закажавте термин")
	setInterval(() => {
		window.location.href = "home.html"
	}, 1000)
}


function initMVRObject()
{
	return {
		location: "",
		type: "",
		dateOfSign: "",
		releaseDate: "",
		term: "",
		settlement: "",
		id: "",
        driving_licence: "",
        pasport: ""
	}
}

// function randomDate(start, end) {
// 	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	
// }

function randomDate(start, end) {
	var date = new Date(+start + Math.random() * (end - start));
	return date;
  }

function getRandomDate(date)
{	
	var chosenDate = new Date(date);
	var futureDate = new Date(date);
	futureDate = new Date(futureDate.setMonth(date.getMonth() + 1));
	var finalDate =  randomDate(chosenDate, futureDate);
	let month = '' + (parseInt(finalDate.getMonth()) + 1);
    let day = '' + finalDate.getDate();
    let year = finalDate.getFullYear();

    if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	return [year, month, day].join('-');
}

initMVR()
