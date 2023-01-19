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

function distanceTravelledInFeet(startBlock, destinationBlock){
    
    let blocksTravelled = Math.abs(startBlock - destinationBlock);
    return blocksTravelled * feetPerBlock;
}

// function calculatesFarePrice(startBlock, destinationBlock){
    
//     let fareCalculation;
//     fareCalculation = distanceTravelledInFeet(startBlock, destinationBlock)
// }