function gcd(x, y) {
  while (y !== 0) {
    let temp = y;
     y = x % y;
      x = temp;
    }
       return x;
}

function calculateTeams(a, b) {
    let g = gcd(a, b);

    // Максимальное количество команд будет равно НОД(a, b)
     let maxTeams = g;

    // Количество мальчиков и девочек в каждой команде
     let boysPerTeam = Math.floor(a / g);
     let girlsPerTeam = Math.floor(b / g);

    process.stdout.write(maxTeams + "\n");
     process.stdout.write(boysPerTeam + " " + girlsPerTeam + "\n");
}

// Для чтения ввода в среде Node.js
const readline = require('readline');
 const rl = readline.createInterface({
    input: process.stdin,
     output: process.stdout
});

   rl.on('line', (line) => {
    let [a, b] = line.split(' ').map(Number);
     calculateTeams(a, b);
     rl.close();
});
