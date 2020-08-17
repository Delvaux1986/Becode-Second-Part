// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    let run = document.getElementById("run");
    run.addEventListener('click', function(){
        console.log("Les key sont " + Object.keys(person)+ "\n\n"
                    ,"et les valeurs sont " + Object.values(person));
    })
})();
