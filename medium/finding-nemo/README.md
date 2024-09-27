# Finding Nemo

`Arrays` `Formatting` `Strings`

[View on Edabit](https://edabit.com/challenge/c23dFfNiKbnguSQtq)

---

You're given a string of words. You need to find the word "Nemo", and return a string like this: `"I found Nemo at [the order of the word you find Nemo]!"`.

If you can't find Nemo, return `"I can't find Nemo :("`.

### **Examples**

```
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"
```

### **Notes**

- `! , ? .` are always separated from the last word.
- Nemo will always look like _Nemo_, and not _NeMo_ or other capital variations.
- _Nemo's_, or anything that says _Nemo_ with something behind it, doesn't count as _Finding Nemo_.
- If there are multiple _Nemo's_ in the sentence, only return the first one.
