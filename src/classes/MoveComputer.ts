export class MoveComputer {
    private states: number[] = new Array(9)
    // private posibleMove: boolean[][] = [
    //     [true, true, true, false, false, false, false, false, false],
    //     [false, false, false, true, true, true, false, false, false],
    //     [false, false, false, false, false, false, true, true, true],
    //     [true, false, false, true, false, false, true, false, false],
    //     [false, true, false, false, true, false, false, true, false],
    //     [false, false, true, false, false, true, false, false, true],
    //     [true, false, false, false, true, false, false, false, true],
    //     [false, false, true, false, true, false, true, false, false]
    // ]
    constructor(states: number[]) {
        this.states = states;
    }

    move(): number {
        return 7;
    }
}