import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

// расшифровка полей с суффиксом id
function decodeFields(data) {
    const decoded = data.map(item => {
        const decodedItem = {...item};
        for (let key in decodedItem) {
            if (key.endsWith('Id') && key !== 'groupId' && key !== 'service' && key !== 'formatSize' && key !== 'ca') {
                const translationKey = decodedItem[key];
                decodedItem[key] = translations[translationKey] || translationKey;
            }
        }
        return decodedItem;
    });
    return decoded;
}

const decoded = decodeFields(encoded);
console.log(decoded);

// список уникальных id
const uniqueIds = [...new Set(encoded.flatMap(item => Object.values(item)))];
console.log(uniqueIds);