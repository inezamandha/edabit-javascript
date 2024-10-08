# Leap Years

`Dates` `Logic` `Math` `Validation`

[View on Edabit](https://edabit.com/challenge/ALmkPHd7eoe5btx9y)

---

A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

- A year must **either** be divisible by 400 **or** divisible by 4 **and not** 100.

Given a `year` you must implement a function that returns `true` if it's a leap year, or `false` if it's not.

### **Examples**

```
isLeap(2020) ➞ true
// Exactly divided by 4 and not by 100.

isLeap(1800) ➞ false
// Exactly divided by 4, but is also exactly divided by 100.

isLeap(2000) ➞ true
// Exactly divided by 400.

isLeap(2019) ➞ false
// It can't be exactly divided by 400 or by 4.
```

### **Notes**

- _Exactly divided_ can be interpreted as _the remainder of the division is equal to 0_.
- If you get stuck on a challenge, find help in the **Resources** tab.
- If you're _really_ stuck, unlock solutions in the **Solutions** tab.
- Bonus: Try to implement this function writing a single line of code.
