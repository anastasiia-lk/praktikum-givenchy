const menuButton = document.querySelector('.menu__button');
const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__button-close');

//открыть модальное окно
function openPopup(popup){
  popup.classList.add('popup_opened');
}

//закрыть модальное окно
function closePopup(popup){
  popup.classList.remove('popup_opened');
}

menuButton.addEventListener('click', function(event){
  openPopup(popup);
});

popupButtonClose.addEventListener('click', function(event){
  closePopup(popup);
});
