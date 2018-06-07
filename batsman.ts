import {Player} from "./player";
export class Batsman extends Player{
    private runsScored:number;
    private ballsFaced:number;
    constructor(name:string){
        super(name);
        this.runsScored=0;
        this.ballsFaced=0;
    }
    get runs(){
        return this.runsScored;
    } 
    get balls(){
        return this.ballsFaced;
    }
    addRuns(run:number){
        this.runsScored += run;
    }
}