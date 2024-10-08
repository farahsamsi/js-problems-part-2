/**
 * chair --> 3cft
 * table --> 10cft
 * bed --> 50cft
 */

function woodQuantity(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairWood = chair * perChairWood;
    const allTableWood = table * perTableWood;
    const allBedWood = bed * perBedWood;

    const totalWood = allChairWood + allTableWood + allBedWood;

    return totalWood;
}

const wood = woodQuantity(0,0,10);
console.log('wood needed',wood);