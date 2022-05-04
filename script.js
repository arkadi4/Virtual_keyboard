console.log('YPA')

const title = document.createElement('h1')
title.textContent = 'Virtual keyboard'
const KeyBoardBlock = document.createElement('div')
KeyBoardBlock.className = 'keyboard__block'

document.body.prepend(title, KeyBoardBlock)

const createKeyDiv = (obj) => {
    let temporaryDiv = document.createElement('div')
    temporaryDiv.className = 'key__block'
    let smallDiv = document.createElement('div')
    smallDiv.textContent = obj.char
    smallDiv.className = 'key__small'
    let bigDiv = document.createElement('div')
    bigDiv.textContent = obj.shift
    bigDiv.className = 'key__shift'
    bigDiv.classList.add('hidden')
    temporaryDiv.dataset.keyToCompare = obj.keycode
    KeyBoardBlock.append(temporaryDiv)
    // document.body.append(temporaryDiv)
    temporaryDiv.append(smallDiv)
    temporaryDiv.append(bigDiv)
}

let keyboardKeys = [
    {keycode: 'ShiftLeft', char: 'Shift', shift: 'Shift'},
    {keycode: 'KeyQ', char: 'q', shift: 'Q'},
    {keycode: 'KeyW', char: 'w', shift: 'W'},
    {keycode: 'KeyE', char: 'e', shift: 'E'},
    {keycode: 'KeyR', char: 'r', shift: 'R'},
    {keycode: 'KeyT', char: 't', shift: 'T'},
    {keycode: 'KeyY', char: 'y', shift: 'Y'},
]
keyboardKeys.forEach(element => {
    createKeyDiv(element)
})

const KeyboardKeysOnBoard = document.querySelectorAll('.key__block')
const KeyboardKeysOnBoardSmall = document.querySelectorAll('.key__small')
const KeyboardKeysOnBoardShift = document.querySelectorAll('.key__shift')

document.addEventListener('keydown', (event) => {
    console.log(event.code)
    if (event.code == 'ShiftLeft') {
        // KeyboardKeysOnBoardShift.forEach( el => el.classList.toggle('hidden') )
        console.log('YPAAAAAAA')
        KeyboardKeysOnBoardSmall.forEach( el => el.classList.toggle('hidden') )
        KeyboardKeysOnBoardShift.forEach( el => el.classList.toggle('hidden') )
    }
    KeyboardKeysOnBoard.forEach(element => {
        if (event.code == element.dataset.keyToCompare) {
            console.log('YPAAAAAAA')
            element.classList.toggle('colored')
        }
    })
    // if (event.code == 'KeyQ') {
    //     keyboardkey.classList.toggle('colored')
    // }
})


// let keyboardkey = document.createElement('div')
// keyboardkey.textContent = 'Key q'
// keyboardkey.className = 'key__block'
// keyboardkey.dataset.keyToCompare = 'XXX'
// keyboardkey.dataset.keyToCompare = 'PPPPPPPPP'

// document.body.prepend(title, keyboardkey)

// keyboardkey.addEventListener('keydown', () => {
//     console.log("YPA 2 times")
// })
// document.addEventListener('keyup', (event) => {
//     console.log("YPA 5555555555 times")
//     console.log(event.code)
//     keyboardkey.style.background = 'white'
// })

