## Various valorant related tools for overwolf apps.

### Install with npm or yarn

```js
npm install --save valorant-tools
yarn add valorant-tools
```

### Functions:

#### Retrieve agents name for a language

```js
import { getAgentName } from 'valorant-tools';
const myAgentEnglish = getAgentName('Deadeye_PC_C', 'en');
console.log(myAgentEnglish); //Chamber
```

```js
import { getAgentImage } from 'valorant-tools';
const myAgentEnglish = getAgentImage('Deadeye_PC_C', 'en');
console.log(myAgentEnglish); //...png
```

#### Check if agent exists

```js
import { isAgentExist } from 'valorant-tools';
const isAgentValid = isAgentExist('Deadeye_PC_C');
console.log(isAgentValid); //true
```

```js
import { AGENTS } from 'valorant-tools';
console.log(AGENTS); //{ Clay_PC_C: { "en": "Rate", "img": "...png", ... }, ...}
```

```js
import { getEveryAgent } from 'valorant-tools';
console.log(getEveryAgent('en')); //["Raze", "Viper", ...]
```

```js
import { getEveryAgentWithDetails } from 'valorant-tools';
console.log(getEveryAgentWithDetails());
/*[
    {
        en: 'Yoru',
        img: '...png',
        icon: '...png',
        description: 'Japanese native Yoru...',
        role: 'Duelist',
        roleDescription: 'Duelists are...',
        abilities: [
            {
                key: 'C',
                label: 'FAKEOUT',
                img: '...png',
                description: 'EQUIP an echo t...',
            },
            ...
        ],
    },
    ...
]*/
```

```js
import { getAgentDetailsByEnglishName } from 'valorant-tools';
console.log(getAgentDetailsByEnglishName('Yoru'));
/* 
{
    en: 'Yoru',
    img: '...png',
    icon: '...png',
    description: 'Japanese native Yoru...',
    role: 'Duelist',
    roleDescription: 'Duelists are...',
    abilities: [
        {
            key: 'C',
            label: 'FAKEOUT',
            img: '...png',
            description: 'EQUIP an echo t...',
        },
        ...
    ],
}
*/
```

#### Retrieve agents name for a language

```js
import { getMapName } from 'valorant-tools';
const myMapEnglish = getMapName('Canyon', 'en');
console.log(myMapEnglish); //Fracture
```

#### Check if agent exists

```js
import { isMapExist } from 'valorant-tools';
const isMapValid = isMapExist('Canyon');
console.log(isMapValid); //true
```

```js
import { MAPS } from 'valorant-tools';
console.log(MAPS); //{ Triad: { "en": "Haven" }, ...}
```

```js
import { getEveryMap } from 'valorant-tools';
console.log(getEveryMap('en')); //["Haven", "Bind", ...]
```

### Supported languages

- English

### Contribution

Please feel free to contribute.

### Contact

- Gabriel Mičko on [Twitter](https://twitter.com/gabriel_micko), [GitHub](https://github.com/gabrielmicko)
