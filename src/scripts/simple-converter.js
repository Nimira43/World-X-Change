const convertBtn = document.getElementById('convert')

convertBtn.onclick = () => convert()

function convert() {
    const amount = document.getElementById('amount').value
    const from = document.getElementById('from').value
    const to = document.getElementById('to').value
    const result = document.getElementById('result').value
    if (amount === '') {
        alert('Enter amount to convert: ')
    }
    
    console.log(amount, from, to, result)
}