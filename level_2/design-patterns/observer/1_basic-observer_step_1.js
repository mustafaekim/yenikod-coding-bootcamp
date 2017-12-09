function Hero(){

    this.effects = [];

    this.subscribeToEffects = function(newEffect){
        this.effects[this.effects.length] = newEffect;
    }

    this.unsubscribeFromEffects = function(effectToRemove){
        // TODO
    }

    this.notify = function(action){
        for(var i = 0; i<this.effects.length; i++){
            this.effects[i](action);
        }
    }

    this.power = 100;

    this.slapped = function(){
        this.power -= 10;
        this.notify("slapped");
    }
}

/* */
var adrean = new Hero();

adrean.subscribeToEffects(function(action){
    console.log(action);
})

adrean.subscribeToEffects(function(action){
    console.log("o_o");
})

adrean.slapped();


