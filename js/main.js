
// Khai báo các biến Global
let btnSubmit = document.querySelector(".btn__submit");
let numberThread = document.querySelector(".number__thread");
let table__thread = document.querySelector(".table__thread");
let tableThread = document.querySelector(".table__thread")
let tableBodyResult = document.querySelector('.table__body-result')
let clockBody = document.querySelector('.clock__body')
let response = document.querySelector('.response')
let tempIndex = 0;
let  width=[] 


// Render table thread
btnSubmit.onclick = function () {
  tableThread.classList.remove('d-none')
  let tableBody = document.querySelector(".table__body");
  let html = "";
  for (let i = 1; i <= numberThread.value; i++) {
    html += `
          <tr>
            <td class="thread__name" scope="row">Luồng thứ ${i}</td>
            <td>
              <input type="text" name="" class="time__start" id="">
            </td>
            <td>
              <input type="text" name="" class="time__access" id="">
            </td>
          </tr>        
        `;
  }
  tableBody.innerHTML =
    html +
    `
        <tr>
            <td colspan="3">
                 <button type="button" name="" id="" class="btn btn-primary btn__submit-thread" onclick="getData()" role="button">Xác nhận</button>
            </td>
        </tr>
    `;
};

let arrayData;

// get data from table thread

function getData() {
  clockBody.classList.remove("d-none")
  response.classList.remove("d-none")  

  let timeThreadStart = document.querySelectorAll('.time__start');
  let timeThreadAccess = document.querySelectorAll('.time__access');
  let arrTimeThreadStart = [];
  let arrTimeThreadAccess = [];
  timeThreadStart.forEach((arr) => {
    return arrTimeThreadStart.push(arr.value)

  })
  timeThreadAccess.forEach((arr) => {
    return arrTimeThreadAccess.push(arr.value)

  })
  let arr = [];
  for (let i = 0; i < arrTimeThreadStart.length; i++) {
    let temp = {
      "timeStart": arrTimeThreadStart[i],
      "timeAccess": arrTimeThreadAccess[i]
    }
    arr.push(temp)
  }
  access(arr)
  count()
  return arr
}




function access(arr) {
  let newArr = arr.shift()
  setTimeout(function () {
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <tr class=" bg-red">
          <td class="body__result">
            Luồng ${tempIndex + 1}
          </td>
          <td class="body__result">
             <div class="body__result-item">
              <div class="wait"></div>
              <div class="process "></div>
             </div>
          </td>
          <td class="body__result">
         &nbsp;
          </td>
          <td class="body__result">
            &nbsp;
          </td>
          <td class="body__result">
            &nbsp;
          </td>
          <td class="body__result">
            &nbsp;
          </td>
          <td class="body__result">
            &nbsp;
          </td>

        </tr>

      `
    tableBodyResult.appendChild(tr)

    let process = document.querySelectorAll('.process')
    let wait = document.querySelectorAll('.wait')
    let currentMargin = 0;
   
 
    width.push((+newArr.timeAccess) + (+newArr.timeStart));

    if(tempIndex==0){
      Object.assign(wait[tempIndex].style, {
        "width": newArr.timeStart * 10 + "%",
      })

    
      
      Object.assign(process[tempIndex].style, {
        "width": newArr.timeAccess * 10 + "%",
        "margin-left": currentMargin + newArr.timeStart * 10 + "%"
      })
    }
    else{
      Object.assign(wait[tempIndex].style, {
        "width": (width[tempIndex-1]-newArr.timeStart) * 10 + "%",
        "margin-left": (currentMargin += newArr.timeStart * 10) + "%"
      })

      Object.assign(process[tempIndex].style, {
        "width": newArr.timeAccess * 10 + "%",
        "margin-left": (width[tempIndex-1]) * 10 + "%"
      })

    }

    tempIndex++;
    access(arr)

    if (newArr = undefined) {
      access(newArr) = {

      }
    }
  }, newArr.timeStart * 1000)

  // arr.reduce((previousValue,currentValue)=>{
  //   setTimeout(function(){
  //     console.log(currentValue)
  //   },currentValue.timeStart*1000)
  // },0)
  // sync(arr,index)
  // for(let i=0;i<=arr.length;i++){
  //  let myVar= setTimeout(function(){
  //     let arrTemp=arr;
  //   wait[0].style =  `width:`+arrTemp.timeStart*10
  //        Object.assign(process[0].style,{
  //          "width":arrTemp.timeAccess * 10+"%",
  //          "margin-left":arrTemp.timeStart * 10+"%"
  //  })
  // console.log(arr)
  // },arr.shift().timeStart*1000)
  // clearTimeout(myVar)
}



  // [...rest]=response
  // let margin=0;
  // setTimeout(function(){
  //   console.log(response.timeAccess)
  // },response.timeAccess)


  //   let temp=0;
  //   response.forEach((arr,index) =>{   
  //     let promise  = new Promise((resolve,reject)=>{
  //       resolve(arr,index)
  //       })
  //     promise
  //     .then(function(arr,index){
  //     setTimeout(function(){ 
  //     wait[0].style =  `width:${arr.timeStart * 10}% `
  //     Object.assign(process[0].style,{
  //       "width":arr.timeAccess * 10+"%",
  //       "margin-left":arr.timeStart * 10+"%"
  //     })   
  // console.log(index)
  //     },arr.timeStart*1000
  //     )
  //   })


  // })



