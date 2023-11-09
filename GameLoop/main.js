
let dudes = [{name: "The Devil", isFromBible: true},
{name: "Shadow", isFromBible: false},
{name: "Freddy Fazbear", isFromBible: true},
];

for(let i=0; i<dudes.length; i++){
    console.log(bibleName(dudes[i]));
    if(dudes[i].isFromBible){
        console.log("Is from bible :D");
    }
    else{
        console.log("Is not from bible!!!!")
    }
}


function bibleName(dude){
    if(dude.isFromBible){
        return dude.name + " from bible."
    }
    else{
        return dude.name + " has " + (Math.round(Math.random()*100)+1) + " sin points.";
    }
}

class Bible{
    constructor(pages, devil){
        this.pages = pages;
        this.devil = devil;
    }
    findBiblePage(){
        return "The devil is on page " + (Math.round(Math.random()*this.pages)+1);
    }
}

let theBible = new Bible(1000, dudes[0]);

console.log(theBible.findBiblePage());


class Bible2 extends Bible{
    constructor(pages, devil, thePresidentOfTheUnitedStates){
        super(pages, devil);
        this.thePresidentOfTheUnitedStates = thePresidentOfTheUnitedStates;
    }
    findPresdientPage(){
        return "The President of the United States is on page " + (Math.round(Math.random()*this.pages)+1);
    }
}


let theBible2 = new Bible2(1000, dudes[0], dudes[1]);

console.log(theBible2.findPresdientPage());


const arr = [1,2,3,4,5]
const squares = arr.map((x) => x*x)
console.log(arr);

let bestNickNameEver = "Rub";
console.log(`It's ${bestNickNameEver}`)