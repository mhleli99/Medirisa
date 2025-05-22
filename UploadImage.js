const image = document.querySelector("EmptyProfile");
input = document.querySelector("input");

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
});