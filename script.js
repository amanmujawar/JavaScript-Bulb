    var bulb = document.querySelector("#bulb")
    var btn = document.querySelector("#btn1")
    flag = 0

    btn.addEventListener("click", function(){
        if (flag==0) {
            bulb.style.backgroundColor = "yellow"
            console.log("clicked bulb")
            flag=1
        }else{
            bulb.style.backgroundColor = "transparent"
            console.log("Again clicked bulb")
            flag = 0
        }
    })
