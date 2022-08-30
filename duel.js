
//card class
class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
    play(){
        console.log(this.name);
        console.log(this.cost);
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        console.log(`${this.name} attacks ${target.name} for ${this.power}`);
        console.log(`${this.name} resilience is ${target.res -= this.power}`);
        return target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play(target){
        if(target instanceof Unit){
            console.log(this.text);
            if(this.stat == "res"){
                target.res += this.mag;
                console.log(`${target.name}'s resiliance changed to ${target.res}`);
            }else{
                target.power += this.mag;
                console.log(`${target.name}'s power altered to ${target.power}`);
            }
        }else{
            throw new Error("Target must be a unit!");
        }
    }
}

const rbn = new Unit("Red Belt Ninja", 3, 3, 4);
const ha = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "res", 3);
ha.play(rbn);

const bbn = new Unit("Black Belt Ninja", 4, 5, 4);
const upr = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "res", -2);
upr.play(rbn);

const pp = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);
pp.play(rbn);

rbn.attack(bbn);

