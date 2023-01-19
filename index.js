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

function calculatesFarePrice(startBlock, destinationBlock){
    
    let fareCalculation;
    if (distanceTravelledInFeet(startBlock, destinationBlock) < 2500) {
        if (distanceTravelledInFeet(startBlock, destinationBlock) <= 400){
        fareCalculation = 0;
        }
        else if ((distanceTravelledInFeet(startBlock, destinationBlock) > 400) && (distanceTravelledInFeet(startBlock, destinationBlock) <= 2000)) {
            fareCalculation = (distanceTravelledInFeet(startBlock, destinationBlock) - 400) * .02;
        }
        else {fareCalculation = 25};
    }
    
    else {fareCalculation = 'cannot travel that far'};

    return fareCalculation;

}