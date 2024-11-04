function solution(keymap, targets) {
    const charMinPresses = {};
    
    keymap.forEach((key, keyIndex) => {
        [...key].forEach((char, pressCount) => {
            const presses = pressCount + 1; 
            
            charMinPresses[char] = Math.min(
                charMinPresses[char] || Infinity,
                presses
            );
        });
    });
    
    return targets.map(target => {
        let totalPresses = 0;
        
        for (const char of target) {
            if (!(char in charMinPresses)) {
                return -1;
            }
            totalPresses += charMinPresses[char];
        }
        
        return totalPresses;
    });
}