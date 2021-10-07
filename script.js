document.getElementById("play-button").onclick = () => {
    //generate the random number function
    const generateRandomNumber = () => Math.floor(Math.random() * 6 + 1);
    //apply the random number to left side and right side individually
    let leftNumber = generateRandomNumber();
    let rightNumber = generateRandomNumber();
    //display the correct dice image on each side according to the each side generated number
    document
        .querySelectorAll("img")[0]
        .setAttribute("src", `./images/dice${leftNumber}.png`);
    document
        .querySelectorAll("img")[1]
        .setAttribute("src", `./images/dice${rightNumber}.png`);
    //compare the left side number and right side number, display the results accordingly
    if (leftNumber > rightNumber) {
        document.querySelector(
            ".results"
        ).innerHTML = `The left side is ${leftNumber} which is bigger than right side ${rightNumber}, Winner is <strong>LEFT SIDE</strong>.`;
    } else if (rightNumber > leftNumber) {
        document.querySelector(
            ".results"
        ).innerHTML = `The right side is ${rightNumber} which is bigger than left side ${leftNumber}, Winner is <strong>RIGHT SIDE</strong>.`;
    } else if (leftNumber == rightNumber) {
        document.querySelector(
            ".results"
        ).innerHTML = `Both sides are ${leftNumber}, you are <strong>DRAW</strong>. Roll the dice again.`;
    }
};
