const compiler = require("compilex");
const envData = { OS: "windows", cmd: "python", options: { timeout: 10000 } };
const option = { stats: true };
compiler.init(option);

function executePython(code) {
  return new Promise((resolve, reject) => {
    compiler.compilePython(envData, code, function (data) {
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.output);
      }
    });
  });
}

function executePythonWithInput(code, input) {
  return new Promise((resolve, reject) => {
    compiler.compilePythonWithInput(envData, code, input, function (data) {
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.output);
      }
    });
  });
}

module.exports = { executePython, executePythonWithInput };
