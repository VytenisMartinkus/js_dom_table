// const pElementas = document.getElementById("aloha");
// console.log(pElementas)

// const link = document.querySelector('a')
// link.textContent = 'Mozilla Developer Network';
// link.href = 'https://developer.mozilla.org/en-US/';

// // Sukurti elementa, i ji ideti teksta

// const vieta = document.querySelector('section');
// const element = document.createElement('p');
// vieta.textContent = 'We hope you enjoyed the ride';
// vieta.appendChild(element);

// let pMasyvas=document.querySelectorAll("p");

// // Surandame elementu masyva, pakeiciame ju stiliu

// for(let i=0; i<pMasyvas.length; i++){
//     pMasyvas[i].style.color = "orange";
// }

// let pEl = document.getElementById("p-id")
// let aEl = document.getElementById("a-el")
// let pMas = document.querySelectorAll("p")
// let btnEl = document.getElementById("spausk")
// let inpEl = document.getElementById("inpTxt")

// aEl.textContent = "SPAUSKITE CIA"
// aEl.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'

// for(let i = 0; i < pMas.length; i++){
//     pMas[i].style.color ="red"
// }

// btnEl.addEventListener("click",addReiksme)

// function addReiksme(){
//     let rez = document.createElement("p");
//         rez.innerText = inpEl.value;
//         pEl.appendChild(rez)
//         inpEl.value = ""
// }

// let btnPrimary = document.querySelector('#primary');
// let btnDanger = document.querySelector('#danger');
// let btnSuccess = document.querySelector('#success');
// btnPrimary.addEventListener('click', () => btnPrimary.style.backgroundColor = '#337ab7')
// btnDanger.addEventListener('click', () => btnDanger.style.backgroundColor = '#c9302c')
// btnSuccess.addEventListener('click', () => btnSuccess.style.backgroundColor = '#4cae4c')


// function createTable()
// {
//     let num_rows = document.getElementById('rows').value;
//     let num_cols = document.getElementById('cols').value;
//     let theader = '<table border="1">\n';
//     let tbody = '';

//     for( let i=0; i<num_rows;i++)
//     {
//         tbody += '<tr>';
//         for( let j=0; j<num_cols;j++)
//         {
//             tbody += '<td>';
//             tbody += 'lentele ' + i + ',' + j;
//             tbody += '</td>'
//         }
//         tbody += '</tr>\n';
//     }
//     let tfooter = '</table>';
//     document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;

// }


const myButton = document.querySelector('button');

let place = document.getElementById('place');

myButton.addEventListener('click', addValue);

function addValue(){
    console.log("labas")
    const inputValueRow = document.getElementById('myInputRows').value;
    const inputValueCol = document.getElementById('myInputCol').value;

    console.log(inputValueRow)
    console.log(inputValueCol)

    for(let i=0; i<inputValueRow; i++){
        const myRow = document.createElement('tr');
        place.appendChild(myRow);

        for(let i=0; i<inputValueCol; i++){
            const myCol = document.createElement('td');
            myCol.innerText ="stulpelis";
            myRow.appendChild(myCol);
        }
    }
}