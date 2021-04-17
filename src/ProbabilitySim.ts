import VideoPoker from "./VideoPoker"

const simulator = (n: number) => {
    let occurences: Record<string, number> = {};
    let vp = new VideoPoker(0);

    for (let i = 0; i < n; i++) {
        let game_output: string = vp.play([0, 1, 2, 3, 4]).hand_type;
        game_output = game_output ? game_output : "nothing";

        if (!(game_output in occurences)) {
            occurences[game_output] = 0;
        }
        occurences[game_output]++;
        vp.reset_hand()
    }

    for (let key in occurences) {
        occurences[key] = (occurences[key]/n) * 100;
    }

    return occurences;
}

console.log(simulator(1000000))