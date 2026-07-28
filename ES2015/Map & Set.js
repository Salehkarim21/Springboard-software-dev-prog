
1

new Set([1,1,2,2,3,4])

solution

(1,2,3,4)


2

[...new Set("referee")].join("")

solution

[...new Set("referee")].join("") // this will return "ref"
3

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

solution

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// the above code will return a map with 2 keys, because the two arrays are different references in memory.



4

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

solution

const hasDuplicate = arr => new Set(arr).size !== arr.length;




5

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

solution

function vowelCount(str) {
    const vowels = 'aeiou';
    const vowelMap = new Map();

    for (let char of str) {
        let lowerChar = char.toLowerCase();
        if (vowels.hss(lowerChar)) {
            vowelMap.set(lowerChar, (vowelMap.get(lowerChar) || 0) + 1);
        } else {
            vowelMap.set(lowerChar, 1);
        }
    }

    return vowelMap;
}
