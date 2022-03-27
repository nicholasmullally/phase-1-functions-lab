// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    return Math.abs((value - 42));
};

function distanceFromHqInFeet(value) {
    return Math.abs(264 * (value - 42));
};

function distanceTravelledInFeet(end, start) {
    return Math.abs(264 * (end - start));
};

function calculatesFarePrice(start, destination) {

if (Math.abs(264 * (start - destination)) <= 400) {
    return 0;
} 

    if (Math.abs(264 * (start - destination)) > 400 && Math.abs(264 * (start - destination)) < 2000) {
       return Math.abs(0.02 * Math.abs(264 * (start - destination)) - 8);
    }

        if ((start - destination) > 2000) {
            return 25;
        }

             if (265* (start - destination) > 2500) {
                return "cannot travel that far";
        }


    };
    
