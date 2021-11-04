// khởi tạo đồng hồ
let clock = document.querySelector('.clock');
let i=0;
function count(){
    setTimeout(function(){
        i++;
        count()
    },1000
    )
    clock.innerHTML =i
}

