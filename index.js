// Code your solution in this file!

const feetPerBlock = 264;

function distanceFromHqInBlocks(blockNumber){
    return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber){
    
    let feetCalculation;
    feetCalculation = (distanceFromHqInBlocks(blockNumber) * feetPerBlock);
    return feetCalculation;

}