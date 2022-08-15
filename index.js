function shout(string) {
    return string.toUpperCase();    
}
function whisper(string) {
    return string.toLowerCase();    
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase())    
}
function sayHiToHeadphonedRoommate(string) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    var dinnerinvite = "Let's have dinner together!";
    if (string.toLowerCase() === string) {
        return cantUnswer;        
    }    
    else if (string.toUpperCase() === string) {
        return yesUnswer;        
    }
    if (string === dinnerinvite) {
        return lovUnswer;
    }
}