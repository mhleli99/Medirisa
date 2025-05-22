let head = "Tshwane Varsity Hackethon Application Form";

document.getElementById("head").innerHTML = head;

//pop up massage after pressing a btton
function myFunc(){
    
    let Full_Names = document.getElementById("Full_Names").value;
    let student_no = document.getElementById("student_no").value;
    let year = document.getElementById("year").value;
    let course_name = document.getElementById("course_name").value;

    let b = document.getElementsByName("gender");
    let gender;
    if(b [0].checked){
        gender = "Male";
    }else if(b[1].checked){
        gender = "Female";
    }else if(b [2].checked){
        gender = "Non-binary";
    }else{
        gender = "Prefer not to say";
    }

    let birth_date = document.getElementById("birth_date").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    //programming skill
    let c = document.getElementsByName("skill");
    let skill;
    if(c[0].checked){
        skill = "Beginner";
    }else if(c[1].checked){
        skill = "Intemediate";
    }else if(c[2].checked){
        skill = "Expert"
    }else{
        skill = "Other";
    }

    //participation in hackethon
    let d = document.getElementsByName("participation");
    let participation;
    if(d[0].checked){
        participation = "Yes";
    }else{
        participation = "No";
    }

    //group experience
    let group_exp = document.getElementsByName("group_exp").value;

    //Allergies or medical conditions
    let k = document.getElementsByName("conditions");
    let conditions;
    if(k[0].checked){
        conditions = "Yes";
    }else{
        conditions = "No";
    }

    //Pop up output
    alert("Thank you applicant your details are as follow \n\n1. Full Name(s) : "+Full_Names+"\n2. Student Number : "+student_no+"\n3. Course Name : "+course_name+"\n4. Year : "+year+"\n5. Gender : "+gender+"\n6. Date Of Birth : "+birth_date+"\n7. Cellphone Number : "+"\n8. Email : "+ email+"\n9. Programming skill in Python, Java and C++ : "+skill+"\n10. Participated in Hackethon before : "+participation+"\n11. Participated in group before : "+group_exp+"\n12. Allergies or Medical Conditions : "+conditions);
}