new Vue({
    el: "#app",
    data: {
        restaurants :["Mall", "Pieology", "Chutni", "Planet Pizza", "LTK", "Shake Shack", "Whole Foods", "Dino BBQ", "Roasted Sandwich Co", "Brickhouse", "Kyushu Ramen", "Eos", "Mexican Cantina", "Buffalo Wild Wings"],
        lunch: "",
        clickCount: 0
    },
    methods: {
        spinTheWheel: function(){
            this.clickCount++;
            var randex = Math.floor(Math.random() * this.restaurants.length);
            if(this.clickCount > 8){
                this.lunch = "You're really picky, you know?"
                this.clickCount = 0;
            } else{
                this.lunch = this.restaurants[randex];
            }
        }
    }
});