

document.getElementById('input-text').addEventListener('input', function(){
    let textTyped = this.value;
    let actualText = encryptText(textTyped);

    document.getElementById('output-text').value = actualText;
});

document.getElementById('button-encrypt').addEventListener('click', function() {
    let textTyped = document.getElementById('input-text').value;
    let textAreaCopyable = document.getElementById('text-list').value;
    if (textTyped.trim() !== '') {
        let textEncrypted = encryptText(textTyped);
        document.getElementById('text-list').value = textEncrypted;

        document.getElementById('input-text').value = '';
    }
    
});

document.getElementById('button-desencrypt').addEventListener('click', function() {
    let textTyped = document.getElementById('input-text').value;

    if (textTyped.trim() !== '') {
        let textDesencrypted = decryptText(textTyped);
        document.getElementById('text-list').value = textDesencrypted;

        document.getElementById('input-text').value = '';
    }
});

function encryptText(text) {
    const symbolArray = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'
    ];

    let encryptedText = '';

    for (let char of text) {
        let lowerChar = char.toLowerCase();

        if (lowerChar >= 'a' && lowerChar <= 'z') {
            let index = lowerChar.charCodeAt(0) - 'a'.charCodeAt(0);
            encryptedText += symbolArray[index];
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

function decryptText(encryptedText) {
    const symbolArray = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'
    ];
    let decryptedText = '';
    for (let char of encryptedText) {
        let index = symbolArray.indexOf(char);
        if (index !== -1) {
            decryptedText += String.fromCharCode('a'.charCodeAt(0) + index);
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}
