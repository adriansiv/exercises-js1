const names = ["Marco", "Gabriel", "Javier", "Adrian", "Hugo"];
function findMyName(name, names){
    if (names.includes(name)) {
        return "Found Me!"
    }else {
        return "Haven't found me :("
    }
}
console.log(findMyName("Adrian", names));

