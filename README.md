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

**roundDiscreteDistribution** will return what I need:

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

```javascript
import { roundDiscreteDistibution } from 'round-discrete-distibution';

const initialDistribution = [1, 4, 3, 2];
const finalDistributionSize = 15;

const newDistribution = roundDiscreteDistibution(initialDistribution, finalDistributionSize);

console.log(newDistribution);
/*
{
    "decimalDistribution": [1.5, 6, 4.5, 3],
    "integerDistribution": [2, 6, 4, 3],
    "normalDistribution": [0.14, 0.4, 0.26, 0.2],
    "finalDistributionSize": 15,
}
*/
```
Or using object array:
```javascript
import { roundDiscreteDistibution } from 'round-discrete-distibution';

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

const newDistribution = roundDiscreteDistibution(initialDistribution, finalDistributionSize, getValue);

console.log(newDistribution);
/*
{
    "decimalDistribution": [1.5, 6, 4.5, 3],
    "integerDistribution": [2, 6, 4, 3],
    "normalDistribution": [0.14, 0.4, 0.26, 0.2],
    "finalDistributionSize": 15,
}
*/
```
## License
MIT

