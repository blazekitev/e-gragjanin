
function initHome()
{
   this.me = JSON.parse(window.localStorage.getItem("me"))

   populateData()
}

function populateData()
{
	let tr, td, tn
    let tbody = document.getElementById('mvr_body')

  for (let i = 0; i < this.me.mvr.length; i++)
  {
    tr = document.createElement('tr')

    td = document.createElement('td');
    tn = document.createTextNode(this.me.mvr[i].type);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement('td');
    tn = document.createTextNode(this.me.mvr[i].dateOfSign);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement('td');
    tn = document.createTextNode(this.me.mvr[i].releaseDate);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement('td');
    tn = document.createTextNode(this.me.mvr[i].location);
    td.appendChild(tn);
    tr.appendChild(td);

    td = document.createElement('td');
    tn = document.createTextNode(this.me.mvr[i].settlement);
    td.appendChild(tn);
    tr.appendChild(td);

    tbody.appendChild(tr);
  }

    let tbodyBills = document.getElementById('bills_tbody');

    for (let i = 0; i < this.me.bills.payed.length; i++)
    {
        tr = document.createElement('tr')

        td = document.createElement('td');
        tn = document.createTextNode(this.me.bills.payed[i].number);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.bills.payed[i].address);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.bills.payed[i].date);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.bills.payed[i].type);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.bills.payed[i].price);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.bills.payed[i].dateOfPay)
        td.appendChild(tn);
        tr.appendChild(td);

        tbodyBills.appendChild(tr);
    }

    let tbodyUjp = document.getElementById('ujp');
    for (let i = 0; i < this.me.ujp.length; i++)
    {
        tr = document.createElement('tr')

        td = document.createElement('td');
        tn = document.createTextNode(this.me.ujp[i].location);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.ujp[i].place);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.ujp[i].monthSalary);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.ujp[i].yearSalary);
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td')
        tn = document.createTextNode(this.me.ujp[i].tax)
        td.appendChild(tn);
        tr.appendChild(td);

        td = document.createElement('td');
        tn = document.createTextNode(this.me.ujp[i].dateOfSign);
        td.appendChild(tn);
        tr.appendChild(td);

        tbodyUjp.appendChild(tr);
    }
}

initHome()
