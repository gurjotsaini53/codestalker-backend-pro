const express = require("express");
const router = new express.Router();
const { executeCPP, executeCPPWithInput } = require("../executors/executeCPP");
const {
  executePython,
  executePythonWithInput,
} = require("../executors/executePython");

router.post("/run", async (req, res) => {
  try {
    const code = req.body.code;
    const input = req.body.input;
    const lang = req.body.lang;

    let output;
    if (input.trim() !== "") {
      if (lang === "cpp") output = await executeCPPWithInput(code, input);
      else if (lang === "python")
        output = await executePythonWithInput(code, input);
    } else {
      if (lang === "cpp") output = await executeCPP(code);
      else if (lang === "python") output = await executePython(code, input);
    }

    res.send(output);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
