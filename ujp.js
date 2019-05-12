
function initUJP()
{
	this.me = JSON.parse(window.localStorage.getItem("me"))

	document.getElementById("fullname").value = this.me.fullname
	document.getElementById("embg").value = this.me.embg
	document.getElementById("mobile").value = this.me.mobile
	document.getElementById("mail").value = this.me.mail
}

function sendRequest()
{
	let ujp = initUJPObject()
	let inputs = document.getElementsByTagName("input")

	for (var i = 0; i < inputs.length; i++)
	{
		switch(inputs[i].getAttribute("path"))
		{
			case "location":
				ujp.location = inputs[i].value
				if (!ujp.location)
				{
					alert("Задолжителните полиња се празни")
					return
				}
				break

			case "settlement":
				ujp.place = inputs[i].value
				if (!ujp.place)
				{
					alert("Задолжителните полиња се празни")
					return
				}
				break

			case "salary":
				ujp.monthSalary = inputs[i].value
				if (!ujp.monthSalary)
				{
					alert("Задолжителните полиња се празни")
					return
				}
				break
		}
	}

	ujp.yearSalary = parseInt(ujp.monthSalary) * 12
	ujp.tax =  (11.11 / 100) * 12 * parseInt(ujp.monthSalary)

	this.me.ujp.unshift(ujp)
	window.localStorage.setItem("me", JSON.stringify(this.me))

	alert("Успешна даночна пријава")
	setInterval(() => {
		window.location.href = "home.html"
	}, 1000)
}

function initUJPObject()
{
	return {
		location: "",
		place: "",
		dateOfSign: getCurrentDate(),
		monthSalary: null,
		yearSalary: null,
		tax: null
	}
}

initUJP()