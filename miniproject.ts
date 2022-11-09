class students {
    name:string;
    age:number;
    gender:string;
    nationality:string;

    constructor(student_name:string, student_age:number, student_nationality:string){
        this.name = student_name;
        this.age = student_age;
        this.gender = "female";
        this.nationality = student_nationality;
    }
    
    
    getNationality() {
        return `Name: ${this.name} Nationality: ${this.nationality}`;
    }
}


class underGraduates extends students implements Iundergrad{
    batch:number;
    gpa: number;

    constructor(student_name:string, student_age:number, student_gender:string, student_nationality:string, undergrad_batch:number, gpa:number){
        super(student_name, student_age, student_nationality);
        this.batch = undergrad_batch;
        this.gpa = gpa;
    }
   
}

interface Iundergrad{
    name:string;
    age:number;
    gender:string;
    nationality:string;
    batch:number;
    gpa:number;
};

let underGrads:underGraduates = new underGraduates("Leyla Fernandez", 20, "", "Canadian", 1, 4.0);

console.log(underGrads.getNationality());

