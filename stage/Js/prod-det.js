/*jshint esversion: 6 */
if (document.title.split("-")[1] == "Product Deatails") {
    // loop background color product
    let spanColor = document.querySelectorAll(
        ".product-deatils .product .imgae-info .product-color span"
    );
    spanColor.forEach((span) => {
        span.style.backgroundColor = span.dataset.color;
    });

    //mouse over in slider
    var mzOptions = {
        zoomPosition: "inner",
        cssClass: " mz-show-arrows",
    };
}