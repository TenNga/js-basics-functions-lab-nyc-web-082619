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
  if (end > start)
    return (end - start) * 264;
  else 
    return (start - end) * 264;
}