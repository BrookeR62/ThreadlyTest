document.getElementById("predictBtn").addEventListener("click", function () {
    const formData = new FormData();

    formData.append("brand", document.getElementById("brand").value);
    formData.append("category", document.getElementById("category").value);
    formData.append("material", document.getElementById("material").value);
    formData.append("size", document.getElementById("size").value);
    formData.append("color", document.getElementById("color").value);

    fetch("Controller/predict.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // DEBUG LINE

        // THIS must match PHP JSON key
        document.getElementById("price").innerText =
            "Estimated Price: ₱" + data.price;
    })
    .catch(error => console.error(error));
});