const compiler = require("compilex");
const envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
const option = { stats: true };
compiler.init(option);

function executeCPP(code) {
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

function executeCPPWithInput(code, input) {
  return new Promise((resolve, reject) => {
    compiler.compileCPPWithInput(envData, code, input, function (data) {
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.output);
      }
    });
  });
}

module.exports = { executeCPP, executeCPPWithInput };
