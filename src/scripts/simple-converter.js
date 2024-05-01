const convertBtn = document.getElementById('convert')

convertBtn.onclick = () => convert()

function convert() {
    let amount = document.getElementById('amount').value
    const from = document.getElementById('from').value
    const to = document.getElementById('to').value
    const result = document.getElementById('result').value
    if (amount === '' || isNaN(amount)) {
        alert('Enter amount to convert: ')
        return
    }
    amount = Number(amount)
    console.log(typeof amount)
    console.log(amount, from, to, result)

// https://www.exchangerate-api.com/

    const url = `https://api.exchangerate-api.com/v4/latest/${from}`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.rates['VND']
            console.log(rate)
            console.log(data)
    })
}