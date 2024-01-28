//sidebar
const menuItem = document.querySelectorAll('.menu-item')

const messagesNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')

const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


//remove active class from all menu items
const changeActiveItem = () =>{
    menuItem.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItem.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display ='none';
        }
        else{
            document.querySelector('.notification-popup').style.display ='block';
            document.querySelector('#notifications .notification-count').style.display='none';

        }
    })
})

// ===========MESSAGES========================
//search
const searchMessage = ()=>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1){
            user.style.display ='flex';
        }else{
            user.style.display ='none';
        }
        console.log(val);
    })
}

messageSearch.addEventListener('keyup',searchMessage);




messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow ='none';
    },2000);
})

//Theme/display customization
const openThemeModel = () =>{
    themeModel.style.display = 'grid';
}

const closeThemeModel = (e) =>{
    if (e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}

//close
themeModel.addEventListener('click',closeThemeModel);

theme.addEventListener('click',openThemeModel);

removeSizeSelector = ()=> {
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}



//fonts

fontSizes.forEach(size =>{
    
    size.addEventListener('click',() =>{
        removeSizeSelector();
        let fontSize;
        size.classList.add('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem;');
            root.style.setProperty('--sticky-top-right', '5.4rem;');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem;');
            root.style.setProperty('--sticky-top-right', '-7rem;');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem;');
            root.style.setProperty('--sticky-top-right', '-17rem;');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem;');
            root.style.setProperty('--sticky-top-right', '-25rem;');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem;');
            root.style.setProperty('--sticky-top-right', '-35rem;');
        }
        document.querySelector('html').style.fontSize = fontSize;
        console.log(size);
    })
})

// change primary colors

const changeActiveColor = () =>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click',()=>{
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        changeActiveColor();
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = ()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


Bg2.addEventListener('click', ()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //add active class
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg1.addEventListener('click', ()=>{

    lightColorLightness='95%';
    whiteColorLightness='100%';
    darkColorLightness='17%';

    //add active class
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', ()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //add active class
    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});