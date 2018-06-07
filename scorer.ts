import {Batsman} from "./batsman";
// import {runsScored} from "./batsman";
export class Scorer{
    private totalRuns:number;
    private playerOnStrike:Batsman | null;
    listOfBatsman:Array<Batsman>;
    constructor(){
        this.totalRuns=0;
        this.playerOnStrike = null;
        this.listOfBatsman=[];
    }

    addBatsman(batsman:Batsman){
        this.listOfBatsman.push(batsman);
    }

    rotateStrike(){
        if(this.playerOnStrike === this.listOfBatsman[0]){
            this.playerOnStrike=this.listOfBatsman[1];
        }
        else{
            this.playerOnStrike=this.listOfBatsman[0];
        }
    }

    calculateScore(arr:Array<number>){
        this.playerOnStrike=this.listOfBatsman[0];
        arr.forEach((score,ballsFaced)=>{
            if((score%2)==1){
                if(this.listOfBatsman[0]){
                    this.playerOnStrike.addRuns(score);
                    this.rotateStrike(); 
                    // this.totalRuns+=score;
                }
            }
            else{
                if(this.listOfBatsman[0]){
                    this.playerOnStrike.addRuns(score); 
                    // this.totalRuns+=score;
                }
            }
            this.totalRuns+=score;
            if((ballsFaced+1)%6 === 0){
                this.rotateStrike();
            }
        })
    }

    printScore(){
        console.log(`Total score: ${this.totalRuns}`);
        this.listOfBatsman.forEach(batsman => {
            console.log(`${batsman.name} scored ${batsman.runs}`);
        })
    }
}