let user1={
    name: "Anas",
    age:22,
    score: 0,
    scoreUp: function(n){
        this.score+=n;
    },
    scoreDown: function(n){
        this.score-=n;
    }
};

function User(a,b){
    this.name=a;
    this.age=b;
    this.score= 0;
    this.scoreUp= function(n){
        this.score+=n;
    },
    this.scoreDown= function(n){
        this.score-=n;
    }

}

