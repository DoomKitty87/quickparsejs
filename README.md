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