setTimeout(function () {
    console.log("F1", new Date());
    setTimeout(function () {
        console.log("F2", new Date());
        setTimeout(function () {
            console.log("F3", new Date());
        }, 2000)
    }, 2000);
}, 2000);