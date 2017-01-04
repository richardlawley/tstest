function testIt(input: string, start: string) {
  console.log(`Does "${input}" start with "${start}"? ${input.startsWith(start)}`);
}
testIt('test', 't');
testIt('test', 'nope');