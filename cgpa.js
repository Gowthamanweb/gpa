
function refresh(){

}
/* SELECTING SEM SCRIPT */
document.getElementById("sel_sem").addEventListener("click",display);
function display(e){
  var sem = document.getElementById("sel1").value;
  if(sem == "SEM-VI"){
      sem = "6";
  }
  console.log(sem);
    e.preventDefault();
    switch(sem){
        case "1":
            document.getElementById("sem-1").style.display = "block";
            document.getElementById("sem-2").style.display = "none";
            document.getElementById("sem-5").style.display = "none";
            document.getElementById("sem-6").style.display = "none";
            break;
        case "2":
            document.getElementById("sem-1").style.display = "none";
            document.getElementById("sem-2").style.display = "block";
            document.getElementById("sem-5").style.display = "none";
            document.getElementById("sem-6").style.display = "none";
            break;
        case "5":
                console.log("sem5");
            document.getElementById("sem-1").style.display = "none";
            document.getElementById("sem-2").style.display = "none";
            document.getElementById("sem-5").style.display = "block";
            document.getElementById("sem-6").style.display = "none";
            break;
        case "6":
            console.log("sem6");
            document.getElementById("sem-1").style.display = "none";
            document.getElementById("sem-2").style.display = "none";
            document.getElementById("sem-5").style.display = "none";
            document.getElementById("sem-6").style.display = "block";
            break;
    }
}

/* FIRST SEM GPA CALCULATING SCRIPT */

document.getElementById("cal-1").addEventListener("click",sem1);
function sem1(e){
    e.preventDefault();
    var sub1 = document.getElementById("sem1_eng").value;
    var sub2 = document.getElementById("sem1_mat").value;
    var sub3 = document.getElementById("sem1_phy").value;
    var sub4 = document.getElementById("sem1_che").value;
    var sub5 = document.getElementById("sem1_mech").value;
    var sub6 = document.getElementById("sem1_pct").value;
    var lab1 = document.getElementById("sem1_lab1").value;
    var lab2 = document.getElementById("sem1_lab2").value;

    var sum1 = (sub1*3)+(sub2*4)+(sub3*3)+(sub4*3)+(sub5*3)+(sub6*4)+(lab1*2)+(lab2*2);
    var gpa1 = (sum1/24).toFixed(3);
    alert("your cgpa is: "+gpa1);
    
}

/* SECOND SEM GPA CALCULATING SCRIPT */
document.getElementById("cal-2").addEventListener("click",sem2);
function sem2(e){
    e.preventDefault();
    var sub1 = document.getElementById("sem2_eng").value;
    var sub2 = document.getElementById("sem2_mat").value;
    var sub3 = document.getElementById("sem2_phy").value;
    var sub4 = document.getElementById("sem2_che").value;
    var sub5 = document.getElementById("sem2_lddc").value;
    var sub6 = document.getElementById("sem2_c").value;
    var lab1 = document.getElementById("sem2_lab1").value;
    var lab2 = document.getElementById("sem2_lab2").value;
    var lab3 = document.getElementById("sem2_lab3").value;

    var sum2 = (sub1*4)+(sub2*3)+(sub3*3)+(sub4*3)+(sub5*3)+(sub6*3)+(lab1*2)+(lab2*2)+(lab3*2);
   /* console.log(sum2); */
    var gpa2 = (sum2/25).toFixed(3);
    /*console.log(gpa2); */
    alert("your cgpa is: "+gpa2);
    
}

/* FIFTH SEM GPA CALCULATING SCRIPT */
document.getElementById("cal-5").addEventListener("click",sem5);
function sem5(e){
    e.preventDefault();
    var sub1 = document.getElementById("sem5_pcd").value;
    var sub2 = document.getElementById("sem5_cg").value;
    var sub3 = document.getElementById("sem5_oss").value;
    var sub4 = document.getElementById("sem5_wp").value;
    var sub5 = document.getElementById("sem5_cn").value;
    var sub6 = document.getElementById("sem5_elec").value;
    var lab1 = document.getElementById("sem5_lab1").value;
    var lab2 = document.getElementById("sem5_lab2").value;
    var lab3 = document.getElementById("sem5_lab3").value;

    var credit = 25;
    if (sub1 == 0){
        credit = credit-4;
    }
    if (sub2 == 0) {
        credit = credit-3;
    }
    if (sub3 == 0) {
        credit = credit-3;
    }
    if ( sub4 == 0) {
        credit = credit-3;
    }
    if ( sub5 == 0) {
        credit = credit-3;
    }
    if ( sub6 == 0) {
        credit = credit-3;
    }
    if ( lab1 == 0) {
        credit = credit-2;
    }
    if ( lab2 == 0) {
        credit = credit-2;
    }
    if ( lab3 == 0) {
        credit = credit-2;
    }
    var sum5 = (sub1*4)+(sub2*3)+(sub3*3)+(sub4*3)+(sub5*3)+(sub6*3)+(lab1*2)+(lab2*2)+(lab3*2);
    /*console.log(sum5); */
    var gpa5 = (sum5/credit).toFixed(3);
    /* console.log(gpa5); */
    alert("your cgpa is: "+gpa5);
    
}

/* SIXTH SEM GPA CALCULATING SCRIPT */
document.getElementById("cal-6").addEventListener("click",sem6);
function sem6(e){
    e.preventDefault();
    var sub1 = document.getElementById("sem6_.net").value;
    var sub2 = document.getElementById("sem6_ai").value;
    var sub3 = document.getElementById("sem6_cloud").value;
    var sub4 = document.getElementById("sem6_bigdata").value;
    var sub5 = document.getElementById("sem6_elec1").value;
    var sub6 = document.getElementById("sem6_elec2").value;
    var lab1 = document.getElementById("sem6_lab1").value;
    var lab2 = document.getElementById("sem6_lab2").value;
    var lab3 = document.getElementById("sem6_lab3").value;

    var credit = 24;
    if (sub1 == 0){
        credit = credit-4;
    }
    if (sub2 == 0) {
        credit = credit-3;
    }
    if (sub3 == 0) {
        credit = credit-3;
    }
    if ( sub4 == 0) {
        credit = credit-3;
    }
    if ( sub5 == 0) {
        credit = credit-3;
    }
    if ( sub6 == 0) {
        credit = credit-3;
    }
    if ( lab1 == 0) {
        credit = credit-2;
    }
    if ( lab2 == 0) {
        credit = credit-2;
    }
    if ( lab3 == 0) {
        credit = credit-2;
    }
    var sum6 = (sub1*3)+(sub2*3)+(sub3*3)+(sub4*3)+(sub5*3)+(sub6*3)+(lab1*2)+(lab2*2)+(lab3*2);
    /*console.log(sum5); */
    var gpa6 = (sum6/credit).toFixed(3);
    /* console.log(gpa5); */
    alert("your cgpa is: "+gpa6);
    
}
