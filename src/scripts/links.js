window.onload = function() {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = './css/main.css'
    document.head.appendChild(link)
    const fontAwesome = document.createElement('link')
    fontAwesome.rel = 'stylesheet'
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
    document.head.appendChild(fontAwesome)
}