// 14. Créez une fonction "spupof" qui prend en paramètre une chaine de caractères et qui affiche cette chaine en remplaçant chacun des caractères par le suivant dans l’ordre alphabétique (le "z" devient "a", le “a” devient “b”, etc..).
function spupof(str) {
    
    function convLettre(lettre) {

        let newLettre = lettre;
        switch (lettre.replace()) {
        case "a":
            newLettre = "b";
            break;
        case "b":
            newLettre = "c";
            break;
        case "c":
            newLettre = "d";
            break;
        case "d":
            newLettre = "e";
            break;
        case "e":
            newLettre = "f";
            break;
        case "f":
            newLettre = "g";
            break;
        case "g":
            newLettre = "h";
            break;
        case "h":
            newLettre = "i";
            break;
        case "i":
            newLettre = "j";
            break;
        case "j":
            newLettre = "k";
            break;
        case "k":
            newLettre = "l";
            break;
        case "l":
            newLettre = "m";
            break;
        case "m":
            newLettre = "n";
            break;
        case "n":
            newLettre = "o";
            break;
        case "o":
            newLettre = "p";
            break;
        case "p":
            newLettre = "q";
            break;
        case "q":
            newLettre = "r";
            break;
        case "r":
            newLettre = "s";
            break;
        case "s":
            newLettre = "t";
            break;
        case "t":
            newLettre = "u";
            break;
        case "u":
            newLettre = "v";
            break;
        case "v":
            newLettre = "w";
            break;
        case "w":
            newLettre = "x";
            break;
        case "x":
            newLettre = "y";
            break;
        case "y":
            newLettre = "z";
            break;
        case "z":
            newLettre = "a";
            break;
        }
        return newLettre;
    }

    let newMot = "";
    for (const lettre of str) {
      newMot += convLettre(lettre);
    }
    console.log(newMot);
  }


// slice()
// str.length()
// charCodeAt

spupof("long");
spupof("hello");
spupof("mouahahahahah");