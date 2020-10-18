

const hightlight = document.querySelector(".highlight");
const previews = document.querySelectorAll(".preview img");


imageGallery();

function imageGallery(){
    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const previewSrc = preview.src;
            const mainSrc = previewSrc.replace('s', 'b');
            previews.forEach(preview => preview.classList.remove('active'));
            hightlight.src = mainSrc;
            preview.classList.add('active');

        });
    });
}

