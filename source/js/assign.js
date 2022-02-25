export default function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
            target[key] = source[key]
        }
    }
    return target
}

function duh () {
    var S = 20
    var T = 30
    var U = 40

    if (s == T == U ) {
        console.log('yes')
    } else {
        console.log('no')
        if (console.log('no')) {
            console.log('yes')
        } else { 
            console.log('no') 
            console.warn('Don\'t do that')
            console.info
            new Boolean (true)
            if (Boolean == true) {
                console.warn('What kind of ass you are?')
            }

        }
    }
}
function buh () {
    alert('buh')

    if (true) {
        alert('buh')
    } else {
        alert('calm down')
    }
    if (false) {
        return function duh () {
            alert('buh')
            if (alert('buh')) {
                alert('buh')
            } else {
                alert('calm down')
            }
        }
    }
}