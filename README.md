# quickparsejs
math expression parsing for javascript
# API
qp.parseExpression(string expression)
Evaluates a mathematical expression from a string, using four-function operations.

qp.parseCustomOperators(string expression, string add, string subtract, string multiply, string divide)
Evaluates a mathematical expression from a string, with custom operators to be considered instead of + - * /.

qp.prepareExpression(string expression, char defaultOperator)
Prepares a string for evaluation by setting all non-numeric characters to a specified operator.

qp.parseWithParentheses(string expression)
Evaluates a mathematical expression from a string, with support for parentheses. Will return bad results if parentheses are not closed.

qp.parseWithParenthesesCustom(string expression, string add, string subtract, string multiply, string divide, string open, string close)
Same as parseCustomOperators, but with support for parentheses (and using custom parentheses instead).

qp.parseWithVariable(string expression, string variable, float variableValue)
Evaluate mathematical expression, first replacing instances of a variable with its value. Supports parentheses.

qp.parseMultipleVariables(string expression, string[] variables, float[] variableValues)
Evaluate mathematical expression, first replacing instances of all supplied variables with their respective values. Supports parentheses.

qp.parseScientific(string expression)
Converts all scientific notation expressions in the given string to their decimal values.

qp.parseScientificSingle(string expression)
Returns decimal value of a number expressed in scientific notation. (ex. 1.2e9)

qp.parseSpecialConstants(string expression)
Replaces constants (ie. π, e) in an expression with their decimal values.