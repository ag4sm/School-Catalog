class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(value) {
        if (value.isNaN()) {
            console.log("Invalid Input: numberOfStudents must be set to a number.");
        } else {
            this._numberOfStudents = value;
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        const randInt = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randInt];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents, exploratorySubjects) {
        super(name, "middle", numberOfStudents);
        this._exploratorySubjects = exploratorySubjects;
    }
    get exploratorySubjects() {
        return this._exploratorySubjects;
    }
}

const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

const sub = School.pickSubstituteTeacher([
    'Jamal Crawford',
    'Lou Williams',
    'J. R. Smith',
    'James Harden',
    'Jason Terry',
    'Manu Ginobli']
    );

    // instantiate instances of schools
    const alSmith = new HighSchool("Al E. Smith",415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
    const CRMS = new MiddleSchool("Clifton Ridge Middle",575,["Art","Band","PE","Business"]);

    // call methods on schools
    lorraineHansbury.quickFacts();
    alSmith.quickFacts();
    CRMS.quickFacts();
    console.log(CRMS.exploratorySubjects[3]);
