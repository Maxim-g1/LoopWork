let y = 2;
while (y < 9) {
    console.log(y);
    y++;
}

let i = 45;
while (i < 68) {
    document.writeln(i);
    i++;
}

let g = 45;
while (g <= 670) {
    if (g % 10 === 0) {
        document.writeln(g);
    }
    g++;
};

for (let h = 45; h < 68; h++) {
    console.log(h);
}

for (let j = 45; j < 670; j++) {
    if (j % 10 !== 0) {
        continue
    }
    document.writeln(j)
}
let n = 5
switch (n) {
    case 3:
        console.log('Троечка');
        break;
    case 4:
        console.log('НУ ладно');
        break;
    case 5:
        console.log('ПЯТЬ');
        break;
    default:
        console.log("Чё?");
}

for (let w = 0; w < 10; w++) {
    document.write('<img src="/img/taburetka.jpg" />')
}