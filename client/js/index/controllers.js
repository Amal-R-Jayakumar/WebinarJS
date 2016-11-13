app.controller('IndexController', ['$scope', function ($scope) {
    $scope.lives = [{
        name: "Les Régimes : promesses et mensonges",
        desc: "Les régimes sont inneficaces, décodage dans ce webinaire.",
        youtube: "GCnSXIrqWG8",
        imageAnimator: "https://lh3.googleusercontent.com/-EB6Bkv2834w/VKcWeGCns7I/AAAAAAAAAGc/0QNw6EhjXMQ/w798-h798/Sans%2Btitre-1.jpg"
    }, {
        name: "Top 6 des comptines avec un sens caché",
        desc: "Et si les comptines qu'on chantait étant enfant n'étaient pas si innocentes qu'elles le paraissent ?",
        youtube: "wfZw1TUlsvs",
        imageAnimator: "https://lh3.googleusercontent.com/-EB6Bkv2834w/VKcWeGCns7I/AAAAAAAAAGc/0QNw6EhjXMQ/w798-h798/Sans%2Btitre-1.jpg"

    }, {
        name: "10 TECHNIQUES SECRÈTES de SUPERMARCHÉ pour vous MANIPULER",
        desc: "Il serait difficile à l'heure d'aujourd'hui de nous passer des supermarchés et ça, ils en sont totalement conscients. C'est pourquoi ils n'hésitent pas à utiliser vos propres sens contre vous et ainsi gonfler le montant que vous devrez payer à la caisse et encore ça n'est qu'un aperçu ! Si vous voulez en savoir plus, regardons en sembles ces 10 techniques secrètes de supermarché pour vous manipuler !",
        youtube: "qZFfEO8S6B0",
        imageAnimator: "https://lh3.googleusercontent.com/-EB6Bkv2834w/VKcWeGCns7I/AAAAAAAAAGc/0QNw6EhjXMQ/w798-h798/Sans%2Btitre-1.jpg"

    }, {
        name: "Top 8 des souvenirs de camping",
        desc: "C'est les vacances, tu n'as pas d'argent pour partir à Ibiza cette année, donc tu vas au camping... Et tu as forcément vu ces choses là !",
        youtube: "gPDs1luhDTc",
        imageAnimator: "https://lh3.googleusercontent.com/-EB6Bkv2834w/VKcWeGCns7I/AAAAAAAAAGc/0QNw6EhjXMQ/w798-h798/Sans%2Btitre-1.jpg"

    }];

    // Fonction qui raccourci le nombre de caractères à 140, et qui remplace le reste par ...

$scope.lives.forEach(function(live) {
     if(live.desc.length  > 140){
         var temp = live.desc.slice(0,140) + "...";
         live.desc = temp;
     }
    
}, this);
}]);