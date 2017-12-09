function Hero(){
    this.power = 100;

    this.slapped = function(){
        console.log("Auughh");
        console.log("o_o");
        console.log("grrrrr....");
        this.power -= 10;
    }
}

var adrean = new Hero();


