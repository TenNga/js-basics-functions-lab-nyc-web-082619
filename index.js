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
  var dif = distanceTravelledInFeet(start,destination);
  
    switch(dif) {
      case(dif < 400):
        return 0;
      case(dif > 400 && dif < 2000):
        return (dif -400) * 0.02;
      case(dif > 2000 && dif < 2500):
        return 25;
      default:
        return "cannot travel that far";
    }
      
}