
function init()
{
	this.me = JSON.parse(window.localStorage.getItem("me"))

	populateBills()
}

function payBills()
{
    let _flag = false
	let checkboxes = Array.from(document.getElementsByTagName("input"))
    let selected = checkboxes.filter(c => { return c.type == "checkbox" }).map(ch => {
        return ch.checked
    })

    for (var i = 0; i < selected.length; i++) {
        if (selected[i])
        {
            _flag = true
            break
        }
    }

    if (!_flag)
    {
        alert("Немате селектирано сметка")
        return
    }

	for (var i = 0; i < checkboxes.length; i++)
    {
		if (checkboxes[i].checked)
		{
			this.me.card.money -= this.me.bills.notPayed[checkboxes[i].class].price
			if (this.me.card.money > 0)
			{
				this.me.bills.notPayed[checkboxes[i].class].dateOfPay = getCurrentDate()
				this.me.bills.payed.unshift(this.me.bills.notPayed[checkboxes[i].class])
				this.me.bills.notPayed.splice(checkboxes[i].class, 1)

                setInterval(() => {
                    window.location.href = "home.html"
                }, 1000)

                updateLocalStorage()
			}
			else
			{
				alert("Немате доволно средства")
				break
			}
		}
	}
}

function populateBills()
{
	let tr, td, tn;
    let tbody = document.getElementById('bills_tbody');

  for (let i = 0; i < this.me.bills.notPayed.length; i++)
  {
    tr = document.createElement('tr')

    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.class = i
    checkbox.id = "checkbox"
    tr.appendChild(checkbox)

    td = document.createElement('td');
    tn = document.createTextNode(this.me.bills.notPayed[i].number);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement('td');
    tn = document.createTextNode(this.me.bills.notPayed[i].address);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement('td');
    tn = document.createTextNode(this.me.bills.notPayed[i].date);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement('td');
    tn = document.createTextNode(this.me.bills.notPayed[i].price);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement('td');
    tn = document.createTextNode(this.me.bills.notPayed[i].type);
    td.appendChild(tn);
    tr.appendChild(td);

    tbody.appendChild(tr);
  }
}

function updateLocalStorage()
{
	window.localStorage.setItem("me", JSON.stringify(this.me))
}

init()
