function distanceFromHqInBlocks(someValue){
  if (someValue > 42)
    return someValue % 42;
  else
    return 42 % someValue;
}

function distanceFromHqInFeet(someValue){
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start,end) {
    return Math.abs((start - end) * 264);
}

function calculatesFarePrice(start, destination) {
  
}