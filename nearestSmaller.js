function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    let stack = [];
    let result = [];

    for (let i = 0; i < N; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }
        stack.push(arr[i]);
    }

    console.log(result.join(" "));
}