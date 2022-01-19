# round-discrete-distibution
Round discrete distributions over different number of events

## Why?
I have 10 people grouped by ocupation:

| 👨‍⚕️ | 👩‍🏫 | 👨‍🍳 | 👩‍🔧 |
|----|----|----|----|
| 1  | 4  | 3  | 2  |

and I want to keep same distribution over 15 people.

| 👨‍⚕️ | 👩‍🏫 | 👨‍🍳 | 👩‍🔧 |
|----|----|----|----|
| 1.5  | 6  | 4.5  | 3  |

But it is disgusting 😵 have one and a half 👨‍⚕️

Lets round values!

| 👨‍⚕️ | 👩‍🏫 | 👨‍🍳 | 👩‍🔧 |
|----|----|----|----|
| 2  | 6  | 5  | 3  |

No splited persons. 🎉 But now I have 16 people 😔.

**roundDiscretePopulation** will return what I need:

*Integerdistribution*

| 👨‍⚕️ | 👩‍🏫 | 👨‍🍳 | 👩‍🔧 |
|----|----|----|----|
| 2  | 6  | 4  | 3  |

but also:

*decimalDistribution*

| 👨‍⚕️ | 👩‍🏫 | 👨‍🍳 | 👩‍🔧 |
|----|----|----|----|
| 1.5  | 6  | 4.5  | 3  |

*normalDistribution*

| 👨‍⚕️ | 👩‍🏫 | 👨‍🍳 | 👩‍🔧 |
|----|----|----|----|
| 0.14  | 0.4  | 0.26  | 0.2  |

##### Feature extra!!

And it accept number arrays
`[1, 4, 2, 3]`
and object arrays
```json
    [
      {
        "WHATEVER1": "👨‍⚕️",
		....
    	"WHATEVER2": 1
      },
      ...
    ]
```
## Install

`npm install --save round-discrete-distibution`

## Usage
### roundDiscretePopulationroundDiscretePopulation

```javascript
import { roundDiscretePopulation } from 'round-discrete-population';

const initialDistribution = [1, 4, 3, 2];
const finalDistributionSize = 15;

const newDistribution = roundDiscretePopulation(initialDistribution, finalDistributionSize);

console.log(newDistribution);
/*
{
    "decimalDistribution": [1.5, 6, 4.5, 3],
    "integerDistribution": [2, 6, 4, 3],
    "normalDistribution": [0.14, 0.4, 0.26, 0.2],
    "finalPopulation": 15,
}
*/
```
Or using object array:
```javascript
import { roundDiscretePopulation } from 'round-discrete-population';

const initialDistribution =    [
      {
        "name": "👨‍⚕️",
        "value": 1
      },
      {
        "name": "👩‍🏫",
        "value": 4
      },
	  {
        "name": "👨‍🍳",
        "value": 3
      },
      {
        "name": "👩‍🔧",
        "value": 2
      },
    ];
const finalDistributionSize = 15;

const getValue = (item) => item.value;

const newDistribution = roundDiscretePopulation(initialDistribution, finalDistributionSize, getValue);

console.log(newDistribution);
/*
{
    "decimalDistribution": [1.5, 6, 4.5, 3],
    "integerDistribution": [2, 6, 4, 3],
    "normalDistribution": [0.14, 0.4, 0.26, 0.2],
    "finalPopulation": 15,
}
*/
```
### sumArray
This method sums an array that could be an array of objects if parse function is provided.
```javascript
import { sumArray } from 'round-discrete-population';

const distribution = [1, 4, 2, 3];

const sum = sumArray(distribution);

console.log(sum);
/*
10
*/
```
Or using object array:
```javascript
import { sumArray } from 'round-discrete-population';

const distribution = [
      {
        "name": "👨‍⚕️",
        "value": 1
      },
      {
        "name": "👩‍🏫",
        "value": 4
      },
	  {
        "name": "👨‍🍳",
        "value": 3
      },
      {
        "name": "👩‍🔧",
        "value": 2
      },
    ];
const getValue = (item) => item.value;

const sum = sumArray(distribution, getValue);

console.log(sum);
/*
10
*/
```
## License
MIT

