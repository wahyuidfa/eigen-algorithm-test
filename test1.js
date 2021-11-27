function reverseTest(str) {
    let pisah1 = str.slice(0, 5);
    let pisah2 = str.slice(5.5);
    let splitStr = pisah1.split("");
    let reverseArr = splitStr.reverse();
    let jointArr = reverseArr.join("");
    let kata = jointArr + pisah2;
    console.log(kata);
}
reverseTest("NEGIE1");
