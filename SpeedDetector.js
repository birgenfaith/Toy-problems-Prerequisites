let speedLimit =70
let kmPerPoint=5

function speedCheck(speed){
      if (speed < speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
    
}