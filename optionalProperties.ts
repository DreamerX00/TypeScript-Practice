type Marks = {
    maths : number;
    english : number;
    hindi : number;
    physical? : number; //optional 
}

type student = {
    readonly name : string;
    readonly enroll : number;
    readonly age : number;
    readonly class : string; 
}

const totalMarks = (marks: Marks): number => {
    return marks.english + marks.hindi + marks.maths + (marks.physical ?? 0);
};

function StudentDataDisplay(studentData : student,data : Marks){
    
    console.log(`
        ======================
        |   Student Schema   |
        ======================
        |Name      : ${studentData.name}   |
        |Age       : ${studentData.age}      |
        |Roll NO.  : ${studentData.enroll}|
        |Class     : ${studentData.class}    |
        ======================

        ======================
        |      Marksheet     |
        ======================
        | Subject  |  Marks  |
        ======================       
        | Maths    |    ${data.maths}   |
        | English  |    ${data.english}   |  
        | Hindi    |    ${data.hindi}   |
        | Physical |    ${data.physical??0}   |   
        ======================
        | Total    |    ${totalMarks(data)}  |
        ======================
        `)
};

StudentDataDisplay(
    {name:"Akash",enroll: 8811604424,age : 23,class:"10th"},
    {maths:92,english:88,hindi:39,physical : 80}
);
StudentDataDisplay(
    {name:"Tanisha",enroll: 1111604424,age : 23,class:"12th"},
    {maths:92,english:88,hindi:39}
);

