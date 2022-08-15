const nameCardHolder = document.querySelector('#name');
const cardNumber = document.querySelector('#cardNumber');
const cardMM = document.querySelector('.mm');
const cardYY = document.querySelector('.yy');
const cardCVC = document.querySelector('.cvc');
const errorsMessages = document.querySelector('.errors');
const errorsDate = document.querySelector('.errorsdate');

const cardLogoName = document.querySelector('.card-logo__name');
const cardLogoNumber = document.querySelector('.card-logo__number');
const cardLogoExp = document.querySelector('.card-logo__exp');
const cardBackNum = document.querySelector('.card-back__num');

const contentSection = document.querySelector('.content-section');
const cardForm = document.querySelector('.card-form');

const btnConfirm = document.querySelector('.btn');

const fragment = document.createDocumentFragment();

const validateData = () => {
        cardLogoName.textContent = nameCardHolder.value;
        cardLogoNumber.textContent = cardNumber.value;
    
    if(cardMM.value !== '' || cardYY.value !== ''){
        
        
        cardBackNum.textContent = cardCVC.value;
        cardLogoExp.textContent = `${cardMM.value}/${cardYY.value}`; 

        cardForm.classList.add('ocultar');

        const divCompleate = document.createElement('DIV');
        const img = document.createElement('IMG');
        const parrafoTankYou = document.createElement('P');
        const parrafoAddedCard = document.createElement('P');
        const btnContinue = document.createElement('BUTTON');

        divCompleate.classList.add('complete-section');
        img.src = "./images/icon-complete.svg";
        img.alt = "icon complete";
        parrafoTankYou.classList.add('thank-you');
        parrafoTankYou.textContent = "Thank you!";
        parrafoAddedCard.classList.add('added-card');
        parrafoAddedCard.textContent = "We've added your card details";
        btnContinue.classList.add('btn' , 'btn-continue');
        btnContinue.textContent = "Continue";

        fragment.appendChild(divCompleate);
        fragment.appendChild(img);
        fragment.appendChild(parrafoTankYou);
        fragment.appendChild(parrafoAddedCard);
        fragment.appendChild(btnContinue);

        contentSection.appendChild(fragment);

    }else{
        console.log('error'); 
        errorsDate.textContent = "Can`t be blanck";
        cardMM.classList.add('errorInputRed');
        cardYY.classList.add('errorInputRed');
        cardCVC.classList.add('errorInputRed');
    }
    
};

  cardNumber.addEventListener("keypress", soloNumeros, false);
  function soloNumeros(e){
    let key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        console.log('error')
        errorsMessages.textContent = `Wrong format, numbers only`;
        cardNumber.classList.add('errorInputRed');
     //e.preventDefault();
    }
  };

  btnConfirm.addEventListener('click' , validateData);

  cardNumber.addEventListener('focus', () => {
    console.log('focus')
    errorsMessages.textContent = "";
    cardNumber.classList.remove('errorInputRed');
  })