//Defining the classes and ids:
let totalCount = document.getElementById("total-count");
let  interviewCount =document.getElementById("interview-count") ;
let rejectedCount = document.getElementById("rejected-count") ; 
let  availableCount =  document.getElementById("available-count");

//tabs:

 let allTab =document.getElementById("all-tab") ;
let interviewTab = document.getElementById("interview-tab");
let rejectedTab =document.getElementById("rejected-tab");
let cards = document.querySelectorAll('.cards') ;
// multiple buttons of cards and delete:
let interviewBtns =document.querySelectorAll(".interview-btn");
 let  rejectedBtns=document.querySelectorAll(".rejected-btn");
let  deleteBtns= document.querySelectorAll(".delete-btn");
let statusBtns =document.querySelectorAll(".status-btn") ;
// initial:

// for all tab to be blue and selected: 

allTab.classList.add("bg-blue-600");
allTab.classList.add("text-white");
allTab.classList.remove("bg-white");
allTab.classList.remove("text-gray-600");

let interviewTotal = 0 ;
let rejectedTotal =0;
let totalJobs = 8;

for(let i = 0; i<interviewBtns.length;i++){
interviewBtns[i].addEventListener("click",function(){
    
    //console.log("interview clicked")
    // if(statusBtns[i].inner)
    let status = statusBtns[i].innerText;
    if(status==="INTERVIEW"){
        return;
    }
    if(status ==="REJECTED"){
        rejectedTotal-=1;
        rejectedCount.innerText = rejectedTotal;
    }
    interviewTotal +=1 ;

    interviewCount.innerText= interviewTotal;
    statusBtns[i].innerText ="INTERVIEW"
   statusBtns[i].classList.add("bg-green-400", "text-white") ;
  statusBtns[i].classList.remove("bg-blue-100","text-[#002c5c]","bg-red-400") ;
    interviewBtns[i].disabled = true;
    rejectedBtns[i].disabled=false;
    //add new interview status hide not availabe one
    //count +1
    // hide unavailble section and hshow that job only
})
}
for(let i = 0; i<rejectedBtns.length;i++){
rejectedBtns[i].addEventListener("click",function(){
    //console.log("rejected clicked")
    let status = statusBtns[i].innerText;
    if(status==="REJECTED"){
        return;
    }
    if(status ==="INTERVIEW"){
        interviewTotal-=1;
        interviewCount.innerText =interviewTotal;}
    rejectedTotal +=1 ;
    rejectedCount.innerText= rejectedTotal;
    statusBtns[i].innerText = "REJECTED";
    statusBtns[i].classList.add("bg-red-400", "text-white") ;
statusBtns[i].classList.remove("bg-blue-100","text-[#002c5c]","bg-green-400") ;
    interviewBtns[i].disabled = false;
    rejectedBtns[i].disabled=true;
    
})
}




