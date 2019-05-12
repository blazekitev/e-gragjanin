
this.me = {}

window.addEventListener("keyup", e => {
    if (e.keyCode === 13)
        validate()
})
document.getElementById("password")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("login").click();
    }
});

function init()
{
    this.setmeToLocalStorage()
    this.me = JSON.parse(window.localStorage.getItem("me"))
}

function validate()
{
    let username = document.getElementById("username")
    let password = document.getElementById("password")

    if (username.value == "" || password.value == "")
    {
        alert("Корисничкото име или пасвордот се празни")
        return
    }

    if (this.me.username == username.value && this.me.password == password.value)
    {
        document.getElementById("login").href = "home.html"

        return
    }

    alert("Внесовте невалидни податоци")
}

function setmeToLocalStorage()
{
    window.localStorage.setItem("me", JSON.stringify(
        {
            fullname: "Благој Китев",
            username: "blagoj.kitev",
            password: "blagoj123",
            embg: 2606992483000,
            mail: "blaze_kitev@hotmail.com",
            mobile: "076/892-518",
            mvr: [
                {
                    type: "Лична карта",
                    location: "Кавадарци",
                    dateOfSign: "2019-04-22",
                    releaseDate: "2019-05-10",
                    settlement: "Кавадарци",
                    id: "",
                    driving_licence: "",
                    pasport: ""
                }
            ],
            bills:
            {
                payed: [
                    {
                        type: "Водовод",
                        number: 95016001256498,
                        price: 554,
                        date: "02/2019",
                        address: "Адреса бр 1",
                        dateOfPay: "2019-02-24"
                    },
                     {
                        type: "ЕВН",
                        number: 1087638356 - 9,
                        price: 1693,
                        date: "02/2019",
                        address: "Адреса бр 1",
                        dateOfPay: "2019-02-24"
                     },
                     {
                        type: "БЕГ",
                        number: 11195602198,
                        price: 1232,
                        date: "02/2019",
                        address: "Адреса бр 1",
                        dateOfPay: "2019-02-24"
                     }
                ],
                notPayed: [
                    {
                        type: "ЕВН",
                        number: 1088506864 - 1,
                        price: 1558,
                        date: "03/2019",
                        address: "Адреса бр 1",
                        dateOfPay: ""
                    },
                     {
                        type: "Водовод",
                        number: 95016001359444,
                        price: 603,
                        date: "03/2019",
                        address: "Адреса бр 1",
                        dateOfPay: ""
                    },
                    {
                        type: "БЕГ",
                        number: 11195603199,
                        price: 1232,
                        date: "03/2019",
                        address: "Адреса бр 1",
                        dateOfPay: ""
                    },
                     {
                        type: "ЕВН",
                        number: 1084738326 - 5,
                        price: 1758 ,
                        date: "04/2019",
                        address: "Адреса бр 1",
                        dateOfPay: ""
                    },
                     {
                        type: "БЕГ",
                        number: 11195604381,
                        price: 1275,
                        date: "04/2019",
                        address: "Адреса бр 1",
                        dateOfPay: ""
                    },
                     {
                        type: "Водовод",
                        number: 95016001689412,
                        price: 614,
                        date: "04/2019",
                        address: "Адреса бр 1",
                        dateOfPay: ""
                    },
                ]
            },
            card:
            {
                number: 4347568236592384,
                money: 4342
            },
            ujp:
            [
                {
                    location: "Кавадарци",
                    place: "Кавадарци",
                    dateOfSign: "2018-05-24",
                    monthSalary: "18000",
                    yearSalary: 216000,
                    tax: 21600
                }
            ]
        }
    ))
}

init()
