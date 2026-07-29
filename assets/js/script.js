// Wait for the webpage to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Find the empty grid container in services.html
    const productGrid = document.getElementById('product-grid');

    // Only run this loop if we are actually on the Products page
    if (productGrid) {
        
        // Loop 79 times
        for (let i = 1; i <= 79; i++) {
            
            // Create a new div for each product
            const card = document.createElement('div');
            card.className = 'product-card';

            // Insert the image and text into the card
            // Note: Update "jpg" below if your images are "png" or "jpeg"
            card.innerHTML = `
                <img src="assets/images/${i}.png" alt="Kitchen Line Product ${i}">
                <div class="product-info">
                    <h3>Product Reference ${i}</h3>
                    <p>Engineered for commercial kitchen durability and performance.</p>
                </div>
            `;

            // Add the completed card into the grid on the webpage
            productGrid.appendChild(card);
        }
    }
});
// --- COST ESTIMATOR LOGIC ---

document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            // Retrieve values from dropdowns
            const rangeCost = parseInt(document.getElementById('cooking-range').value);
            const fridgeCost = parseInt(document.getElementById('refrigeration').value);
            
            // Retrieve quantity for prep tables and calculate cost (Qty * Price)
            const tableQty = parseInt(document.getElementById('prep-table').value) || 0;
            const tableCost = tableQty * 15000;
            
            // The Mathematical Logic: Sum it all up
            const totalEstimate = rangeCost + fridgeCost + tableCost;
            
            // Format the number with commas for readability
            const formattedTotal = totalEstimate.toLocaleString('en-IN');
            
            // Display the result
            document.getElementById('total-cost').textContent = '₹' + formattedTotal;
            
            // Optional: Add a brief flash effect to show it updated
            const resultBox = document.getElementById('estimate-result');
            resultBox.style.backgroundColor = '#d3835f'; // Copper highlight
            setTimeout(() => {
                resultBox.style.backgroundColor = '#0b1a30'; // Back to Navy Blue
            }, 300);
        });
    }
});