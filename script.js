function expandImage(imgs) {
    //get the expanded image
    var expandImg = document.getElementById("expanded-image");
    // use the same src in the expanded image as the image being
    // clicked on from the grid
    expandImg.src= imgs.src;
    // show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}