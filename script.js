var settings=document.querySelector('.more');
const lastCild=document.querySelector('.lastChild h1');

function show(){
    document.querySelector('.box1').style.display='flex';
};

function settingsMenuToggle(){
    settings.classList.toggle('more-height');
    const toggled=settings.classList.contains('more-height');
    lastCild.classList=toggled ? lastCild.innerHTML='X':lastCild.innerHTML='&equiv;';
};

(function() {
    const buttons=document.querySelectorAll('.btn')
    const storeImages=document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            const filter=e.target.dataset.filter

            storeImages.forEach((item)=>{
                if(filter==='all'){
                    item.style.display='block'
                }else {
                    if(item.classList.contains(filter)){
                        item.style.display= 'block'
                    }
                    else{
                        item.style.display='none'
                    }
                }
            })
        })
    })
})();


const galleryItem= document.querySelectorAll('.store-item');
const lightboxContainer=document.createElement('div');
const lightboxContent=document.createElement('div');
const lightboxImage=document.createElement('img');
const lightboxPrev=document.createElement('div');
const lightboxNext=document.createElement('div');
//create classlist
lightboxContainer.classList.add('lightbox');
lightboxContent.classList.add('lightbox-content');
lightboxPrev.classList.add('<','lightbox');
lightboxNext.classList.add('<','lightbox');

lightboxContainer.appendChild(lightboxContent);
lightboxContent.appendChild(lightboxImage);
lightboxContent.appendChild(lightboxPrev);
lightboxContent.appendChild(lightboxNext);
document.body.appendChild(lightboxContainer);

let index=1;

function showLightbox(n){
    imageLocation=galleryItem[index-1].children[0].getAttribute('src');
    lightboxImage.setAttribute('src',imageLocation);
}