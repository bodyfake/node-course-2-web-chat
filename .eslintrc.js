module.exports = {
    "extends": "airbnb",
    rules:{
      "linebreak-style": 0,
      "no-console": ["error", { allow: ["warn", "log"] }],
      "prefer-destructuring": ["error", {"object": false, "array": false}],
      "no-unused-vars": ["error", { "vars": "local", "args": "none"}],
    }

};