/*We have a queue of people standing for a ride. Each has a height.
The rule:

In one round, people will sit in order as long as the sequence of heights keeps increasing.

The moment we find someone whose height is not greater than the one before, the ride stops there.
Next round begins from that person.
So basically, in each round, we can only take a strictly increasing sequence from the front. */

function runProgram(input) {
  // Write code here
      input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;

    for (let k=0;k<t;k++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);

        let rounds=1;

        for (let i=1;i<=n;i++) {
            if (arr[i]<=arr[i-1]) {
                rounds++;
            }
        }
        console.log(rounds);
    }

}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}