# Isogram Finder

An isogram is a word which has no repeating characters anywhere in the word. For example the string "isogram" is an isogram, however the string "is isogram", is not an isogram (2 i's and 2 s's).

- There must be no repeating letters anywhere in the string.

- The strings are case insensitive. Different Cased letters are still counted.

```js
isIsogram("Dermatoglyphics") //, true );
isIsogram("isogram") //, true );
isIsogram("aba") //, false, "same chars may not be adjacent" );
isIsogram("moOse") //, false, "same chars may not be same case" );
isIsogram("isIsogram") //, false );
isIsogram("") //, true, "an empty string is a valid isogram" );
```
Write a program in your language of choice that when given a string will detect if the string is or is not an isogram. Shortest program wins.

# Hanoi Tower (Bonus)

There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, [click here]().

<img src='https://edabit-challenges.s3.amazonaws.com/tower_of_hanoi.gif'>

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

Examples
```javascript
towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0
```
## Notes

- The amount of discs is always a positive integer.
- 1 disc can be changed per move.