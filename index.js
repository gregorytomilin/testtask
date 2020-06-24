let $deleteCardEscape = document.querySelector('.button_deleteCardEscape');
let $popupDeleteCardPopup = document.querySelector('.popup_cardDeleteConfirm');
let $cardDeletePopupShow = document.querySelector('#cardDeletePopup');

$deleteCardEscape.addEventListener('click', ()=>{
    $popupDeleteCardPopup.classList.remove('open')

})
$cardDeletePopupShow.addEventListener('click', ()=>{
    $popupDeleteCardPopup.classList.add('open')
})