


let fullimgbox = document.getElementById('Full-img-box');
let fullimg = document.getElementById('full-img');

function OpenFullImg(pic) {
    fullimgbox.style.display = 'flex';
    fullimg.src = pic;
}

function CloseFullImg() {
    fullimgbox.style.display = 'none';
}

function deleteImage(button) {
    const imgContainer = button.parentElement;
    imgContainer.remove();
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const imageContainer = document.getElementById('imageContainer');

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = "uploaded image";
            img.onclick = function() {
                OpenFullImg(img.src);
            };

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = function() {
                deleteImage(deleteBtn);
            };

            const deleteIcon = document.createElement('img');
            deleteIcon.src = "icons8-delete-30.png";
            deleteIcon.alt = "delete-button";
            deleteBtn.appendChild(deleteIcon);

            imgContainer.appendChild(img);
            imgContainer.appendChild(deleteBtn);
            imageContainer.appendChild(imgContainer);
        };
        reader.readAsDataURL(file);
    });
});
