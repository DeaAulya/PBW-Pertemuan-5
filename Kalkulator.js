function perhitungan() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = NaN; // akan muncul 'NaN (Not a Number)' ketika operator tidak valid
    }

    // Menampilkan hasil kalkulasi di dalam elemen dengan ID "result"
    document.getElementById('result').innerText = `Hasil: ${result}`;
}

