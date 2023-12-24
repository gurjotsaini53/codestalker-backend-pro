const compiler = require("compilex");
const envData = { OS: "windows", cmd: "gcc", options: { timeout: 10000 } }; // Use gcc for C
const option = { stats: true };
compiler.init(option);

function executeC(code) {
  return new Promise((resolve, reject) => {
    compiler.compileCPP(envData, code, function (data) {
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.output);
      }
    });
  });
}

function executeCWithInput(code, input) {
  return new Promise((resolve, reject) => {
    compiler.compileCPP(envData, code, input, function (data) {
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.output);
      }
    });
  });
}

module.exports = { executeC, executeCWithInput };
