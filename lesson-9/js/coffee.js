const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
    size;
    isDecaf;
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    };
    serveIt() {
        // Generate image of coffee cup
        const cup = document.createElement("img");
        // Set src for IMG element
        let cupImage = "images/coffee-cup.svg";
        // Determine whether is decaf
        let decaf;
        if (this.isDecaf === true) {
            decaf = "decaffeinated";
            cupImage = "images/coffee-cup-green.svg";
        } else {
            decaf = "caffeinated";
        }
        cup.setAttribute("src", cupImage);
        // Set the IMG size according to coffee size
        let cupSize;
        switch (this.size) {
            case "small":
                cupSize = "100";
                break;
            case "medium":
                cupSize = "125";
                break;
            case "large":
                cupSize = "150";
                break;
            default:
                cupSize = "100";
        }
        cup.setAttribute("height", cupSize);
        // Generate description of coffee as IMG title
        let description = `A ${this.size} ${decaf} coffee.`;
        cup.setAttribute("title", description);
        // Insert IMG of coffee into page
        output.appendChild(cup);
    }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let scottsCoffee = new Coffee('small', false);
let tomsCoffee = new Coffee('small', true);
let quinnsCoffee = new Coffee('medium', false);

/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    milkType;
    constructor(size, isDecaf, milkType) {
        super(size, isDecaf);
        this.milkType = milkType;
    }
    latteDesc() {
        alert(`A ${this.size} ${this.isDecaf ? "decaffeinated" : "caffeinated"} latte with steamed ${this.milkType} milk.`);
    }
}
/* STEP 6: Create a new instance of the Latte object */
let scottsLatte = new Latte('medium', true, 'almond');

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */
let tomsLatte = new Latte('large', false, 'oat');
tomsLatte.serveIt();
tomsLatte.latteDesc();

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
