function repeat(str, n) {
  return Array(n).join(str);
}

function indent(n) {
  return repeat('  ', n);
}

function indentLines(str, n) {
  return indent(n) + str.replace(/\n/g, `\n${indent(n)}`);
}

function logIndent(fn, str) {
  console.log(`\n${fn} ${str}`);
}

function logIndentLines(level) {
  console.log(indentLines('===', level + 2));
}

module.exports = {
  logIndentLines,
  logIndent,
  indent,
  indentLines
};
