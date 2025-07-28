
document.getElementById("ico-form").addEventListener("input", function () {
    const usdt = parseFloat(document.getElementById("usdt").value) || 0;
    const jsk = usdt * 2500;
    document.getElementById("jskAmount").textContent = jsk;
});
