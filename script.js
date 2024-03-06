// var a= document.querySelector("#box1");
// a.style.backgroundColor="red";

// a.textContent="hey bro";
// a.innerHTML="<h1>hey bro</h1>";

// a.addEventListener('mouseenter', function(){
//     a.style.backgroundColor="blue";
// })
// a.addEventListener('mouseleave', function(){
//     a.style.backgroundColor="red";
// })

var arr=[
    {name:"sandeep", image:"https://images.unsplash.com/photo-1682695798522-6e208131916d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
    {name:"sand", image:"https://images.unsplash.com/photo-1709632237343-4583d7f96f52?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"deep", image:"https://images.unsplash.com/photo-1709710189876-8aebd66de2f7?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"san", image:"https://images.unsplash.com/photo-1709532696583-b19c20ed2894?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"eep", image:"https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]

function showthecards(){
    var clutter ="";
    arr.forEach(function(obj){
        clutter+= `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="">
    </div>`;

    })
    document.querySelector(".container").innerHTML=clutter;
}
showthecards();