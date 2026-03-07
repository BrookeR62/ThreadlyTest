document.getElementById('predictBtn').addEventListener('click', function() {

    const brand    = document.getElementById('brand').value;
    const category = document.getElementById('category').value;
    const material = document.getElementById('material').value;
    const size     = document.getElementById('size').value;
    const color    = document.getElementById('color').value;

    if (brand === 'Select brand' || category === 'Select category' ||
        material === 'Select material' || size === 'Select size' ||
        color === 'Select color') {
        alert('Please select all fields');
        return;
    }

    // Use capitalized keys to match training data & Python expectation
    const payload = {
        Brand:    brand,
        Category: category,
        Material: material,
        Size:     size,
        Color:    color
    };

    fetch('AI-model/predict_price.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            document.getElementById('price').textContent = '$' + data.price.toFixed(2);
        } else {
            alert('Prediction error: ' + (data.error || 'Unknown problem'));
            console.log('Error details:', data);
        }
    })
    .catch(error => {
        console.error('Fetch or parsing error:', error);
        alert('Cannot connect to prediction service or bad response');
    });
});