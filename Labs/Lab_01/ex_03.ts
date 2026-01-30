// --- Overload Signatures ---
/** Returns total length including spaces */
function countChars(str: string) : number
/** Returns length based on whether spaces should be included */
function countChars(str: string, countSpacesOnSides: boolean) : number

// --- Actual Implementation ---
// Returns a count of the number of characters in provided string
function countChars(str: string, countSpacesOnSides?: boolean) : number
{
    // If second param is missing, return full length
    if(countSpacesOnSides == undefined) { return str.length; }

    // True: return full length
    // False: return trimmed length
    if(countSpacesOnSides == true) { return str.length; }
    else
    {
        return str.trim().length;
    }
}

// --- Execution ---
let example: string = " Hello World! ";
console.log("String value is " + example);
console.log("Number of characters on default: " + countChars(example));
console.log("Number of characters with spaces on sides: " + countChars(example, true));
console.log("Number of characters without spaces on sides: " + countChars(example, false));