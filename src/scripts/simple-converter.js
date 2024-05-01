const convertBtn = document.getElementById('convert')

convertBtn.onclick = () => convert()

function convert() {
    let amount = document.getElementById('amount').value
    const from = document.getElementById('from').value
    const to = document.getElementById('to').value
    const result = document.getElementById('result')
    if (amount === '' || isNaN(amount)) {
        alert('Enter amount to convert: ')
        return
    }
    amount = Number(amount)
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.rates[to]
            const conversion = amount * rate
            result.classList.add('show')
            result.innerHTML = `${amount} ${from} = ${conversion.toFixed(2)} ${to}`
            
    })
    .catch((error) => console.log(error))
}