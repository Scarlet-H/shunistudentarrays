let arr=[];
let groupCount=prompt('How many groups?');
function createStudent()
{
    let student={};
    let studentName=prompt('Enter the name');
    let studentAge=prompt('Enter the age');
    student.name=studentName;
    student.age=studentAge;
    return student;
}
for(let i=0;i<groupCount;i++)
{
    let obj={};
    let groupName=prompt('Enter the name of the group');
    obj.group=groupName;
    obj.students=[];
    let studentCount=prompt('How many students in a group?');
    for(let j=0;j<studentCount;j++)
    {
        obj.students[j]=createStudent();
    }
    arr[i]=obj;
}
console.log(arr);