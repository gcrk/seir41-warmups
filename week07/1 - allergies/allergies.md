# Allergies Warmup

An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

The list of items (and their value) that were tested are:

- eggs (1)
- peanuts (2)
- shellfish (4)
- strawberries (8)
- tomatoes (16)
- chocolate (32)
- pollen (64)
- cats (128)

So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Now, given just that score of 34, your program should be able to say:

- Whether Tom is allergic to any one of those allergens listed above.
- All the allergens Tom is allergic to.

```
scorecard:
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
```

## HINTS

[hint1: how to store the data](https://gist.github.com/gcrk/7704aa0ecbd6b43d9cbc6d5be4b29a82)

[hint2: useful methods](https://gist.github.com/gcrk/95b3e5a9e97a57727a845a61222f5ab0)

[hint3: full solution](https://gist.github.com/gcrk/a451a221ccfb8797ad48fb185cda6ff7)