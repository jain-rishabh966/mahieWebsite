var validate = (async () => {
    if (localStorage.getItem('isMahie') != null && localStorage.getItem('isMahie')) {
        alert("Welcome Back D!")
        return
    } else if (localStorage.getItem('isMahie') != null) {
        alert("You back at it? Bhai thamja.. Kya hua? Koi dikkat hai to mujhe bata... Kyu taang ada raha hai?")
        return
    }

    alert('Just to get it out of the way.. Ok means Yes and Cancel means No')
    var isMahie = confirm('Is this Mahie?')

    var accessDenied = (message) => {
        alert(message)
        window.location.href = '/index.html'
    }
    if (isMahie) {
        var areYouSure = confirm('Are you sure?');
        if (areYouSure) {
            
            var success = false
            for (let i = 0; i < 3; i++) {
                var answer
                if (i == 0) {
                    answer = await prompt('Prove it! What wrong insta password I was using when I switched phones?')
                } else {
                    answer = await prompt("That answer was wrong.. Please try again!")
                }
                if (btoa(btoa(btoa(answer))) == "VFZSSmVrNUhSbnBhUjFrOQ==") {
                    success = true
                    break
                }
            }
            localStorage.setItem('isMahie', success)
            if (success) {
                alert('Hi D! Welcome')
                alert('This page has a letter addressed to you and a secret link to a vault that only the both of us can see!')
            } else {
                accessDenied('You curious person.. Keep your curiocity to yourself.. This page is only for Mahie!');
            }
        } else {
            accessDenied('Aha.. I knew it! This page is only for Mahie! Too personal you see');
        }
    } else {
        accessDenied('Sorry! This page is only for Mahie! Too personal you see');
    }
})()