let ele=document.querySelector("#body")
console.log(ele);
setTimeout(()=>
{
    ele.style.backgroundImage="url('person.png')"
    ele.style.backgroundAttachment="fixed"
    ele.style.backgroundRepeat="no-repeat"
    // ele.style.transform="scaleY(1)"
    // ele.style.transition="0.5s"
},1000)