var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var students = /** @class */ (function () {
    function students(student_name, student_age, student_nationality) {
        this.name = student_name;
        this.age = student_age;
        this.gender = "female";
        this.nationality = student_nationality;
    }
    students.prototype.getNationality = function () {
        return "Name: ".concat(this.name, " Nationality: ").concat(this.nationality);
    };
    return students;
}());
var underGraduates = /** @class */ (function (_super) {
    __extends(underGraduates, _super);
    function underGraduates(student_name, student_age, student_gender, student_nationality, undergrad_batch, gpa) {
        var _this = _super.call(this, student_name, student_age, student_nationality) || this;
        _this.batch = undergrad_batch;
        _this.gpa = gpa;
        return _this;
    }
    return underGraduates;
}(students));
;
var underGrads = new underGraduates("Leyla Fernandez", 20, "", "Canadian", 1, 4.0);
console.log(underGrads.getNationality());
