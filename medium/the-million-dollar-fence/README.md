# The Million Dollar Fence

`Numbers` `Strings`

[View on Edabit](https://edabit.com/challenge/kKcEHvyJemCPKkjPZ)

---

Your task is to create a _fence_ worth **$1 million**. You are given the **price** of the material (per character), meaning the _length of the fence_ will _change_ depending on the _cost_ of the material.

Create a function which constructs this _pricey pricey_ fence, using the letter `"H"` to build.

```
constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// 20 fence posts were set up ($1,000,000 / $50,000 = 20)
```

### **Examples**

```
constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"

constructFence("$100,000") ➞ "HHHHHHHHHH"

constructFence("$1,000,000") ➞ "H"
```

### **Notes**

You are ordered to spend **all** of your **$1,000,000** budget...
