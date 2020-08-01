// 10. Créez une fonction "say_my_name" qui prend en paramètre une chaine de caractères et qui affiche "My name is [name] !" où "[name]" est remplacé par la variable passée en paramètre. Il doit être possible d’appeler la fonction sans paramètre auquel cas elle affichera "My name is Toto !"

function say_my_name(name = "Toto") {

        console.log("My name is " + name +" !");
    
}

say_my_name("Elodie");

say_my_name();