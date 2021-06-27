# Bitwise Operations

A decimal number can be represented as a sequence of bits, like:
```
22 = 00010110
27 = 00011011
```

From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:
```
bitwise AND for 22 and 27
22     = 00010110
27     = 00011011
output = 00010010 ➞  or 18 in decimal
```
```
bitwise OR for 22 and 27
22     = 00010110
27     = 00011011
output = 00011111 ➞ or 31 in decimal
```
```
bitwise XOR for 22 and 27
22     = 00010110
27     = 00011011
output = 00001101 ➞ or 13 in decimal
```

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

## Notes

your functions take 2 decimal numbers as arguments and the output is also a decimal number.

### Examples
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11

## Hints

- [How to convert a decimal number into binary / a binary into decimal](https://gist.github.com/gcrk/a2401867ea8d1a9f5ecd44ced97a195e)

- [bitwise AND](https://en.wikipedia.org/wiki/Bitwise_operation#AND) / [bitwise OR](https://en.wikipedia.org/wiki/Bitwise_operation#OR) / [bitwise XOR](https://en.wikipedia.org/wiki/Bitwise_operation#XOR)

- [`.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) / [`.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) / [`.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
