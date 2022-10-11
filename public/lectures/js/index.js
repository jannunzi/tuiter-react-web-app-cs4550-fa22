// alert('Hello World!!!')

document.write('<h2>JSON (JavaScript Object Notation)</h2>')

const age = 23
const firstName = 'Alice'
const alice = {
    username: 'alice',
    password: 'alice123',
    fName: firstName,
    lName: 'Wonderland',
    age: age,
    favoriteBooks: [
        'Dune', 'LOTR', 'Enders Game'
    ],
    dob: new Date()
};
document.write(`username: ${alice.username}<br/>`)
document.write(`fName: ${alice.fName}<br/>`)

const bob = {
    username: 'bob',
    fName: 'Bob',
    lName: 'Hope'
}


const users = [
    alice, bob
]

const userTableRows = (users) => (`
${
    users.map(user => `
                <tr>
                    <td>${user.username}</td>
                    <td>${user.fName}</td>
                    <td>${user.lName}</td>
                </tr>
            `).join('')
}`)

document.write(`
    <table border="1">
        <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
        ${userTableRows(users)}
    </table>
`)

document.write(`fName: ${users[1].fName}<br/>`)

document.write(`
    <ul>
        ${
            users.map(user => `
                <li>${user.username}</li>
            `).join('')
        }
    </ul>
`)


function add() {
    const xVal = parseInt(xDom.value)
    const yVal = parseInt(yDom.value)
    zDom.value = xVal + yVal
}

const subtract = () => {
    const xVal = parseInt(xDom.value)
    const yVal = parseInt(yDom.value)
    zDom.value = xVal - yVal
}

const xDom = document.getElementById('X')
const yDom = document.getElementById('Y')
const zDom = document.getElementById('Z')

const welcome = document.getElementById('welcome');
welcome.innerHTML = 'Welcome to Web Dev!!!'
welcome.style.color = 'red'
// welcome.style.display = 'none'

console.log('Hello World!!!!')
const a = 123;
const b = 234;
const c = a + b;
console.log(c);
document.write('<h2>Hello from JavaScript</h2>');

const passingGrade = 65
const grades = [2, 3, 4, 98,87,76,65,54,43,32,21]
document.write(`grades = ${grades}<br/>`)
const passingGrades = grades.filter(grade => grade >= passingGrade)
document.write(`passingGrades = ${passingGrades}<br/>`)
const seventySix = grades.find((grade) => grade === 76)
document.write(`seventySix = ${seventySix}<br/>`)
const seventySixIndex = grades.findIndex((grade) => grade === 76)
document.write(`seventySixIndex = ${seventySixIndex}<br/>`)
const squares = grades
    .map(grade => grade * grade)
document.write(`squares = ${squares}<br/>`)

const gradesStrings = grades
    .map((grade) => `<li>${grade}</li>`)
    .join('')
document.write(`gradesStrings = ${gradesStrings}<br/>`)


document.write('<h2>List an array</h2>');
document.write('<ul>')
for(let i=0; i<grades.length; i++) {
    // document.write('<li>grades[i] = '+grades[i]+'</li>')
    document.write(`<li>grades[${i}] = ${grades[i]}</li>`)
}
document.write('</ul>')


document.write('<h2>List with string templates</h2>');
document.write(`
            <ul>
                <li>a = ${a}</li>
                <li>b = ${b}</li>
                <li>c = ${c}</li>
            </ul>
        `)

document.write('<h2>Hardcoded List</h2>');
document.write('<ul>')
document.write('<li>a = '+a+'</li>')
document.write('<li>b = '+b+'</li>')
document.write('<li>c = '+c+'</li>')
document.write('</ul>')