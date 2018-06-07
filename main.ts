import {Scorer} from "./scorer";
import { Batsman } from "./batsman";

    const score = new Scorer();
    const batsman1 = new Batsman("Sikhar Dhawan");
    const batsman2 = new Batsman("Rohit Sharma");
    score.addBatsman(batsman1);
    score.addBatsman(batsman2);
    score.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
    score.printScore();