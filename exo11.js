// 11. Créez une fonction anonyme qui prend en paramètre une variable de type string et qui retourne son équivalent avec la premiere lettre en majuscule. Vous devrez assigner cette fonction anonyme à une variable "func".

var func = function(a) {
    if (typeof a !== "string"){

        return "Erreur";

    } 
    else{

        return a.charAt(0).toUpperCase() + a.slice(1);

    }
    
  }

console.log(func("hello"));