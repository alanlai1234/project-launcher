// set typing animation properties
const get_content = document.querySelectorAll(".tab_content")
const speed = 0.04

for(let i = 0;i < get_content.length; ++i){
    const tt = get_content[i].getElementsByTagName("div")
    var delay = 0
    for(let j = 0;j < tt.length; ++j){
        var len = tt[j].innerText.length
        // count how many chinese character
        for(let k=0 ; k < tt[j].innerText.length ; ++k){
            if(tt[j].innerText.charCodeAt(k) > 0x4E00 && tt[j].innerText.charCodeAt(k) < 0x9FA5){
                len++
            }
        }
        tt[j].style.cssText = "width: " + len + "ch" 
        tt[j].style.cssText += "animation: typing " + len*speed + "s steps(" + len + ") " + delay + "s"
        tt[j].style.cssText += "animation-fill-mode: forwards"
        delay += len*speed
    }
}

// click launch
const btn = document.querySelectorAll(".launch")

for(let i = 0 ; i < btn.length ; ++i ){
    btn[i].addEventListener("click", () => {
        run.call('open', btn[i].value)
    })
}

