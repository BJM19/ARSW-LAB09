var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth

    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'

    else {
        answer = fiboMemo(nth)

    }

    context.res = {
        body: answer.toString()
    };
}


let memory = {0:bigInt.zero,1:bigInt.one};
function fiboMemo(nth) {
    if (nth in Object.keys(memory)) {
        return memory[nth]
    } else {
        memory[nth] = fiboMemo(nth - 1).add(fiboMemo(nth - 2))
        return memory[nth]
    }
}