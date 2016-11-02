import seedrandom from 'seedrandom';
export default (randomSeed, alterMathDotRandom) => {
    if (randomSeed) {
        if (alterMathDotRandom)
            return seedrandom(randomSeed);
        return new seedrandom(randomSeed);
    } else {
        if (alterMathDotRandom)
            return seedrandom();
        return new seedrandom();
    }
};