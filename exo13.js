// 13. Créez une fonction "calc" qui prend en paramètre un type d’opération ("+", "*", "/", "%", "-") et deux entiers. La fonction retourne le résultat de l’opération en respectant l’ordre des paramètres

function calc(a, n, b) {

    if(n == "+"){

        console.log(a + b);

    }
    else if(n == "-"){

        console.log(a - b);

    }
    else if(n == "*"){

        console.log(a * b);

    }
    else if(n == "/"){

        console.log(a / b);

    }
    else if(n == "%"){

        console.log(a % b);

    }
    

}

calc(12, "-", 2);
calc(12, "*", 2);