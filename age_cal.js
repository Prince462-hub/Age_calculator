let date = new Date
let d1 = date.getDate()
let m1 = date.getMonth()
let y1 = date.getFullYear()
let cal = document.querySelector('button')
let userInput = document.getElementById('date')
cal.addEventListener('click', () => {
    let birthday = new Date(userInput.value)
    console.log(birthday)
    let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let d2 = birthday.getDate()
    let m2 = birthday.getMonth()
    let y2 = birthday.getFullYear()
    if (d2 > d1) {
        d1 = d1 + arr[m1]
        m1 = m1 - 1
    }
    if (m2 > m1) {
        m1 = m1 + 12
        y1 = y1 - 1
    }
    d = d1 - d2
    m = m1 - m2
    y = y1 - y2
    let result = document.querySelector('.result')
    result.innerHTML = 'Your age is ' + y + " years " + m + " months " + d + ' days'
})
