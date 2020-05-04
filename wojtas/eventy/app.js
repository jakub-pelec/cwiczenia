
const input = document.querySelector('#input');
const myDiv = document.querySelector('#moj-div');
const mySpan = document.querySelector('#moj-span');
const myButton = document.querySelector('#moj-button');
const myButton2 = document.querySelector('#moj-button2');
const cl = document.querySelector('#button_clear');
const nitro = document.querySelector('#button_nitro');

myButton.addEventListener('click',function (event){
    mySpan.innerHTML = parseInt(mySpan.innerHTML) +1;
    placz()
})


myButton2.addEventListener('click',function (event){
    mySpan.innerHTML = parseInt(mySpan.innerHTML) *2;
    placz()
})


cl.addEventListener('click',function (event){
    mySpan.innerHTML = 0;
    placz()
})


button_nitro.addEventListener('click',function (event){
    mySpan.innerHTML = parseInt(mySpan.innerHTML) -250;
    placz()
})
const placz()=>{
    if (mySpan.innerHTML <=0) {
        document.body.style.backgroundImage = url('https://i.ytimg.com/vi/zpGsdhxzvxQ/maxresdefault.jpg');
    } else {
        document.body.style.backgroundImage = url('https://www.wykop.pl/cdn/c3201142/comment_bDgijRcws6Fi0WUgvNU45giaC45j52KC,w400.jpg');
    }

}




//document.body.style.backgroundImage = "url('img_tree.png')";