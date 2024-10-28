let result = document.getElementById('res');

function Solve(val) {
    result.value += val;
}

function Result() {
    let x = result.value;
    let y = eval(x);
    result.value = y;
}

function Clear() {
    result.value = "";
}

function Back() {
    let ev = result.value;
    result.value = ev.slice(0,-1);
}

// Add keyboard functionality
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Numbers and operators
    if (/[\d\+\-\*\/\.\%]/.test(key)) {
        Solve(key);
    }
    // Enter key for equals
    else if (key === 'Enter') {
        Result();
    }
    // Backspace
    else if (key === 'Backspace') {
        Back();
    }
    // 'c' or 'C' for clear
    else if (key.toLowerCase() === 'c') {
        Clear();
    }
    // 'x' or 'X' for multiplication
    else if (key.toLowerCase() === 'x') {
        Solve('*');
    }
});
