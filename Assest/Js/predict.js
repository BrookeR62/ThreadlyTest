document.getElementById('predictBtn').addEventListener('click', async () => {
    const brand    = document.getElementById('brand').value;
    const category = document.getElementById('category').value;
    const material = document.getElementById('material').value;
    const size     = document.getElementById('size').value;
    const color    = document.getElementById('color').value;

    if (!brand || !category || !material || !size || !color ||
        brand === 'Select brand' || category === 'Select category' /* ... */) {
        alert('Please fill in all fields');
        return;
    }

    const data = { brand, category, color, size, material };

    try {
        const response = await fetch('predict_price.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById('price').textContent = `$${result.price.toFixed(2)}`;
        } else {
            alert('Prediction failed: ' + (result.error || 'Unknown error'));
            console.error(result);
        }
    } catch (err) {
        alert('Network/server error');
        console.error(err);
    }
});