

const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let locationClue= "";

if (emblemClue1 === "Eagle") {
    locationClue = "Forum"; //The location starts with 'Forum'.
} 

else if (emblemClue1 === "Lion") {
    locationClue = "Colosseum"; //The location starts with 'Colosseum'.
}

else {
    locationClue = "Villa"; //The location starts from 'Villa' .
}


If (emblemClue2 === "Laurel" && locationClue === "Forum") {
        locationBegin += " of Augustus"; //If the second clue is "Laurel", and the location is "Forum", then the location begins from "Augustus".
} 

else if (emblemClue2 === "Grapes" || locationClue === "Villa") {
        locationBegin += " Pompey"; //If the second clue is "Grapes", or the location is "Villa", then the location begins from "Pompey".
} 


switch (emblemClue3) {
    case 7:
        locationBegin += "North"; //If the third clue is 7, then the location begins from "North".
        break;
    case 3:
        locationBegin += "South"; //If the third clue is 3, then the location begins from "South".
        break;
    case 9:
        locationBegin += "East"; //If the third clue is 9, then the location begins from "East".
        break;
    case 4:
        locationBegin += "West"; //If the third clue is 4, then the location begins from "West".
        break;
            
    } 

    == vs ===

    The '==' checks for equality of values, while the '===' checks for both value and type equality. Here we are using '===' to ensure that we are comparing both the value and type of the clues correctly.
