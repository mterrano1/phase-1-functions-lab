// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    let distance = (pickupLocation - 42)
    if (distance >= 0) {
        return (pickupLocation - 42)
    } else {
        return ((pickupLocation - 42) * -1)
    }
}

function distanceFromHqInFeet(pickupLocation) {
    let distance = (pickupLocation - 42)
    distanceFromHqInBlocks(pickupLocation);
    if (distance >= 0) {
    return ((pickupLocation - 42) * 264)
    } else {
    return (((pickupLocation - 42) * -1) * 264)
    }
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation) {
    let distanceTravelled = (pickupLocation - dropoffLocation)
    if (distanceTravelled >= 0) {
        return ((pickupLocation - dropoffLocation) * 264)
    } else {
        return (((pickupLocation - dropoffLocation) * -1) * 264)
    }
}

function calculatesFarePrice(start, destination) {
    let fareDistance = distanceTravelledInFeet(start, destination);
      if (fareDistance <= 400) {
          return 0
      } else if (fareDistance > 400 && fareDistance <= 2000){
          return ((fareDistance - 400) * 0.02)
      } else if (fareDistance > 2000 && fareDistance <= 2500){
          return 25
      } else {
          return 'cannot travel that far'
      }
  }