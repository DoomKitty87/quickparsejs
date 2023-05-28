exports.parseExpression = function(expression) {
  if (typeof expression != "string") throw new TypeError("Input must be a string.");

  var expressionout = expression;

  for (var i = 0; i < expressionout.length(); i++) {
    if (expressionout[i] == '*') {
      var multbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != '*' && curr != '/' && curr != '+' && curr != '-' && j >= 0) {
        multbefore += curr;
        j--;
        curr = expressionout[j];
      }
      multbefore = multbefore.split().reverse().join();
      var multafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != '*' && curr != '/' && curr != '+' && curr != '-' && j < expressionout.length()) {
        multafter += curr;
        j++;
        curr = expressionout[j];
      }
      var mult1 = parseInt(multbefore);
      var mult2 = parseInt(multafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= multbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= multafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (mult1 * mult2).toString() + expressionout.substr(i);
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == '/') {
      var divbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != '*' && curr != '/' && curr != '+' && curr != '-' && j >= 0) {
        divbefore += curr;
        j--;
        curr = expressionout[j];
      }
      divbefore = divbefore.split().reverse().join();
      var divafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != '*' && curr != '/' && curr != '+' && curr != '-' && j < expressionout.length()) {
        divafter += curr;
        j++;
        curr = expressionout[j];
      }
      var div1 = parseInt(divbefore);
      var div2 = parseInt(divafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= divbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= divafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (div1 / div2).toString() + expressionout.substr(i);
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
  }
  for (var i = 0; i < expressionout.length(); i++) {
    if (expressionout[i] == '+') {
      var addbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != '+' && curr != '-' && j >= 0) {
        addbefore += curr;
        j--;
        curr = expressionout[j];
      }
      addbefore = addbefore.split().reverse().join();
      var addafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != '+' && curr != '-' && j < expressionout.length()) {
        addafter += curr;
        j++;
        curr = expressionout[j];
      }
      var add1 = parseInt(addbefore);
      var add2 = parseInt(addafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= addbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= addafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (add1 + add2).toString() + expressionout.substr();
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == '-') {
      var subbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != '+' && curr != '-' && j >= 0) {
        subbefore += curr;
        j--;
        curr = expressionout[j];
      }
      subbefore = subbefore.split().reverse().join();
      var subafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != '+' && curr != '-' && j < expressionout.length()) {
        subafter += curr;
        j++;
        curr = expressionout[j];
      }
      var sub1 = parseInt(subbefore);
      var sub2 = parseInt(subafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= subbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= subafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (sub1 + sub2).toString() + expressionout.substr();
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
  }
  return parseFloat(expressionout);
}

exports.parseCustomOperators = function(expression, add, subtract, multiply, divide) {
  if (typeof expression != "string") throw new TypeError("Input must be a string.");
  if (typeof add != "string") throw new TypeError("Operators must be strings.");
  if (typeof subtract != "string") throw new TypeError("Operators must be strings.");
  if (typeof multiply != "string") throw new TypeError("Operators must be strings.");
  if (typeof divide != "string") throw new TypeError("Operators must be strings.");

  if (add.length() != 1) throw new RangeError("Operators must be one character.");
  if (subtract.length() != 1) throw new RangeError("Operators must be one character.");
  if (multiply.length() != 1) throw new RangeError("Operators must be one character.");
  if (divide.length() != 1) throw new RangeError("Operators must be one character.");

  var expressionout = expression;

  for (var i = 0; i < expressionout.length(); i++) {
    if (expressionout[i] == multiply[0]) {
      var multbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != multiply[0] && curr != divide[0] && curr != add[0] && curr != subtract[0] && j >= 0) {
        multbefore += curr;
        j--;
        curr = expressionout[j];
      }
      multbefore = multbefore.split().reverse().join();
      var multafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != multiply[0] && curr != divide[0] && curr != add[0] && curr != subtract[0] && j < expressionout.length()) {
        multafter += curr;
        j++;
        curr = expressionout[j];
      }
      var mult1 = parseInt(multbefore);
      var mult2 = parseInt(multafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= multbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= multafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (mult1 * mult2).toString() + expressionout.substr(i);
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == divide[0]) {
      var divbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != multiply[0] && curr != divide[0] && curr != add[0] && curr != subtract[0] && j >= 0) {
        divbefore += curr;
        j--;
        curr = expressionout[j];
      }
      divbefore = divbefore.split().reverse().join();
      var divafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != multiply[0] && curr != divide[0] && curr != add[0] && curr != subtract[0] && j < expressionout.length()) {
        divafter += curr;
        j++;
        curr = expressionout[j];
      }
      var div1 = parseInt(divbefore);
      var div2 = parseInt(divafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= divbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= divafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (div1 / div2).toString() + expressionout.substr(i);
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
  }
  for (var i = 0; i < expressionout.length(); i++) {
    if (expressionout[i] == add[0]) {
      var addbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != add[0] && curr != subtract[0] && j >= 0) {
        addbefore += curr;
        j--;
        curr = expressionout[j];
      }
      addbefore = addbefore.split().reverse().join();
      var addafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != add[0] && curr != subtract[0] && j < expressionout.length()) {
        addafter += curr;
        j++;
        curr = expressionout[j];
      }
      var add1 = parseInt(addbefore);
      var add2 = parseInt(addafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= addbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= addafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (add1 + add2).toString() + expressionout.substr();
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == subtract[0]) {
      var subbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != add[0] && curr != subtract[0] && j >= 0) {
        subbefore += curr;
        j--;
        curr = expressionout[j];
      }
      subbefore = subbefore.split().reverse().join();
      var subafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != add[0] && curr != subtract[0] && j < expressionout.length()) {
        subafter += curr;
        j++;
        curr = expressionout[j];
      }
      var sub1 = parseInt(subbefore);
      var sub2 = parseInt(subafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= subbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= subafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (sub1 + sub2).toString() + expressionout.substr();
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
  }
  return parseFloat(expressionout);
}

exports.prepareExpression = function(expression, defaultOperator) {
  if (typeof expression != "string") throw new TypeError("Input must be a string.");
  if (typeof defaultOperator != "string") throw new TypeError("Default operator must be a string.");
  if (defaultOperator.length() != 1) throw new RangeError("Default operator must be one character.");

  var expressionout = expression;
  for (var i = 0; i < expressionout.length; i++) {
    if (!(expressionout[i] >= '0' && expressionout[i] <= '9')) {
      expressionout[i] = defaultOperator;
    }
  }
}

function parseRecursive(expression) {
  var expressionout = expression;

  for (var i = 0; i < expressionout.length(); i++) {
    if (expressionout[i] == '*') {
      var multbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != '*' && curr != '/' && curr != '+' && curr != '-' && curr != '(' && curr != ')' && j >= 0) {
        multbefore += curr;
        j--;
        curr = expressionout[j];
      }
      multbefore = multbefore.split().reverse().join();
      var multafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != '*' && curr != '/' && curr != '+' && curr != '-' && curr != '(' && curr != ')' && j < expressionout.length()) {
        multafter += curr;
        j++;
        curr = expressionout[j];
      }
      var mult1 = parseInt(multbefore);
      var mult2 = parseInt(multafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= multbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= multafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (mult1 * mult2).toString() + expressionout.substr(i);
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == '/') {
      var divbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != '*' && curr != '/' && curr != '+' && curr != '-' && curr != '(' && curr != ')' && j >= 0) {
        divbefore += curr;
        j--;
        curr = expressionout[j];
      }
      divbefore = divbefore.split().reverse().join();
      var divafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != '*' && curr != '/' && curr != '+' && curr != '-' && curr != '(' && curr != ')' && j < expressionout.length()) {
        divafter += curr;
        j++;
        curr = expressionout[j];
      }
      var div1 = parseInt(divbefore);
      var div2 = parseInt(divafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= divbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= divafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (div1 / div2).toString() + expressionout.substr(i);
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == '(') {
      var parenthesesCount = 1;
      var j = 1;
      while (parenthesesCount > 0) {
        if (expressionout[i + j] == '(') parenthesesCount++;
        else if (expressionout[i + j] == ')') parenthesesCount--;
        j++;
      }
      var inRecursive = expressionout.substring(i + 1, i + j - 1);
      var evaluation = parseRecursive(inRecursive);
      expressionout = expressionout.substring(0, i) + evaluation + expressionout.substring(i + j);
    }
  }
  for (var i = 0; i < expressionout.length(); i++) {
    if (expressionout[i] == '+') {
      var addbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != '+' && curr != '-' && curr != '(' && curr != ')' && j >= 0) {
        addbefore += curr;
        j--;
        curr = expressionout[j];
      }
      addbefore = addbefore.split().reverse().join();
      var addafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != '+' && curr != '-' && curr != '(' && curr != ')' && j < expressionout.length()) {
        addafter += curr;
        j++;
        curr = expressionout[j];
      }
      var add1 = parseInt(addbefore);
      var add2 = parseInt(addafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= addbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= addafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (add1 + add2).toString() + expressionout.substr();
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == '-') {
      var subbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != '+' && curr != '-' && curr != '(' && curr != ')' && j >= 0) {
        subbefore += curr;
        j--;
        curr = expressionout[j];
      }
      subbefore = subbefore.split().reverse().join();
      var subafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != '+' && curr != '-' && curr != '(' && curr != ')' && j < expressionout.length()) {
        subafter += curr;
        j++;
        curr = expressionout[j];
      }
      var sub1 = parseInt(subbefore);
      var sub2 = parseInt(subafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= subbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= subafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (sub1 + sub2).toString() + expressionout.substr();
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
  }

  return expressionout;
}

function parseRecursiveCustom(expression, add, subtract, multiply, divide, open, close) {
  var expressionout = expression;

  for (var i = 0; i < expressionout.length(); i++) {
    if (expressionout[i] == multiply[0]) {
      var multbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != multiply[0] && curr != divide[0] && curr != add[0] && curr != subtract[0] && curr != open[0] && curr != close[0] && j >= 0) {
        multbefore += curr;
        j--;
        curr = expressionout[j];
      }
      multbefore = multbefore.split().reverse().join();
      var multafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != multiply[0] && curr != divide[0] && curr != add[0] && curr != subtract[0] && curr != open[0] && curr != close[0] && j < expressionout.length()) {
        multafter += curr;
        j++;
        curr = expressionout[j];
      }
      var mult1 = parseInt(multbefore);
      var mult2 = parseInt(multafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= multbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= multafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (mult1 * mult2).toString() + expressionout.substr(i);
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == divide[0]) {
      var divbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != multiply[0] && curr != divide[0] && curr != add[0] && curr != subtract[0] && curr != open[0] && curr != close[0] && j >= 0) {
        divbefore += curr;
        j--;
        curr = expressionout[j];
      }
      divbefore = divbefore.split().reverse().join();
      var divafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != multiply[0] && curr != divide[0] && curr != add[0] && curr != subtract[0] && curr != open[0] && curr != close[0] && j < expressionout.length()) {
        divafter += curr;
        j++;
        curr = expressionout[j];
      }
      var div1 = parseInt(divbefore);
      var div2 = parseInt(divafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= divbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= divafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (div1 / div2).toString() + expressionout.substr(i);
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == open[0]) {
      var parenthesesCount = 1;
      var j = 1;
      while (parenthesesCount > 0) {
        if (expressionout[i + j] == open[0]) parenthesesCount++;
        else if (expressionout[i + j] == close[0]) parenthesesCount--;
        j++;
      }
      var inRecursive = expressionout.substring(i + 1, i + j - 1);
      var evaluation = parseRecursive(inRecursive);
      expressionout = expressionout.substring(0, i) + evaluation + expressionout.substring(i + j);
    }
  }
  for (var i = 0; i < expressionout.length(); i++) {
    if (expressionout[i] == add[0]) {
      var addbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != add[0] && curr != subtract[0] && curr != open[0] && curr != close[0] && j >= 0) {
        addbefore += curr;
        j--;
        curr = expressionout[j];
      }
      addbefore = addbefore.split().reverse().join();
      var addafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != add[0] && curr != subtract[0] && curr != open[0] && curr != close[0] && j < expressionout.length()) {
        addafter += curr;
        j++;
        curr = expressionout[j];
      }
      var add1 = parseInt(addbefore);
      var add2 = parseInt(addafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= addbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= addafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (add1 + add2).toString() + expressionout.substr();
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
    else if (expressionout[i] == subtract[0]) {
      var subbefore = "";
      var curr = expressionout[i - 1];
      var j = i - 1;
      while (curr != ' ' && curr != add[0] && curr != subtract[0] && curr != open[0] && curr != close[0] && j >= 0) {
        subbefore += curr;
        j--;
        curr = expressionout[j];
      }
      subbefore = subbefore.split().reverse().join();
      var subafter = "";
      curr = expressionout[i + 1];
      j = i + 1;
      while (curr != ' ' && curr != add[0] && curr != subtract[0] && curr != open[0] && curr != close[0] && j < expressionout.length()) {
        subafter += curr;
        j++;
        curr = expressionout[j];
      }
      var sub1 = parseInt(subbefore);
      var sub2 = parseInt(subafter);
      expressionout[i] = ' ';
      for (var k = 1; k <= subbefore.length(); k++) {
        expressionout[i - k] = ' ';
      }
      for (var k = 1; k <= subafter.length(); k++) {
        expressionout[i + k] = ' ';
      }
      expressionout = expressionout.substr(0, i) + (sub1 + sub2).toString() + expressionout.substr();
      i--;
      expressionout = expressionout.replace(/\s+/g, '');
    }
  }

  return expressionout;
}

exports.parseWithParentheses = function(expression) {
  if (typeof expression != "string") throw new TypeError("Input must be a string.");
  return parseFloat(parseRecursive(expression));
}

exports.parseWithParenthesesCustom = function(expression, add, subtract, multiply, divide, open, close) {
  if (typeof expression != "string") throw new TypeError("Input must be a string.");
  if (typeof add != "string") throw new TypeError("Operators must be strings.");
  if (typeof subtract != "string") throw new TypeError("Operators must be strings.");
  if (typeof multiply != "string") throw new TypeError("Operators must be strings.");
  if (typeof divide != "string") throw new TypeError("Operators must be strings.");
  if (typeof open != "string") throw new TypeError("Operators must be strings.");
  if (typeof close != "string") throw new TypeError("Operators must be strings.");

  if (add.length() != 1) throw new RangeError("Operators must be one character.");
  if (subtract.length() != 1) throw new RangeError("Operators must be one character.");
  if (multiply.length() != 1) throw new RangeError("Operators must be one character.");
  if (divide.length() != 1) throw new RangeError("Operators must be one character.");
  if (open.length() != 1) throw new RangeError("Operators must be one character.");
  if (close.length() != 1) throw new RangeError("Operators must be one character.");

  return parseFloat(parseRecursiveCustom(expression, add, subtract, multiply, divide, open, close));
}

exports.parseWithVariable = function(expression, variable, variableValue) {
  if (typeof expression != "string") throw new TypeError("Input must be a string.");
  if (typeof variable != "string") throw new TypeError("Variable must be a string.");
  if (typeof variableValue != "number") throw new TypeError("Variable value must be a number.");

  var expressionout = expression;
  expressionout = expressionout.replace(variable, variableValue.toString());
  return parseFloat(parseRecursive(expressionout));
}

exports.parseMultipleVariables = function(expression, variables, variableValues) {
  if (typeof expression != "string") throw new TypeError("Input must be a string.");
  if (!Array.isArray(variables)) throw new TypeError("Variables must be an array.");
  if (!Array.isArray(variableValues)) throw new TypeError("Variable values must be an array.");
  if (variables.length != variableValues.length) throw new RangeError("Variables and variable values must be the same length.");
  if (variables.length == 0) throw new RangeError("Variables and variable values must not be empty.");
  if (typeof variables[0] != "string") throw new TypeError("Variables must be strings.");
  if (typeof variableValues[0] != "number") throw new TypeError("Variable values must be numbers.");

  var expressionout = expression;
  for (var i = 0; i < variables.length; i++) {
    expressionout = expressionout.replace(variables[i], variableValues[i].toString());
  }

  return parseFloat(parseRecursive(expressionout));
}