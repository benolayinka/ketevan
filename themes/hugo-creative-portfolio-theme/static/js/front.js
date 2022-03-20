/* =========================================
 *  Off-canvas menu
 *  =======================================*/
window.addEventListener('DOMContentLoaded', (event) => {
    function toggleClass() {
      document.getElementById("row-offcanvas").classList.toggle("active");
    }
    document.getElementById("offcanvas").addEventListener("click", toggleClass);
});