// sidebar 
const menuItems = document.querySelectorAll('.menu-item');

// Messages 
const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

// Theme 
const themes = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
let root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')




// remove active class from menu items
const changeActiveClass = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveClass()
        item.classList.add('active');

        if (item.id !== 'notifications') {
            document.querySelector('.notification-popup').
                style.display = 'none';
        }
        else {
            document.querySelector('.notification-popup').
                style.display = 'block';

            document.querySelector('#notifications .notification-count').
                style.display = 'none';

        }


    })
})

// Messages 
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'

    messagesNotifications.querySelector('#messages-notifications .notification-count').style.display = 'none';

    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 5000);
})


// Theme
// Open theme modal 
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// Close them modal 
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }

}

themeModal.addEventListener('click', closeThemeModal);
// console.log(themeModal);

themes.addEventListener('click', openThemeModal);

// remove active class from font size
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

// FontSize 
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSizes;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSizes = '10px';
            root.style.setProperty(' --sticky-top-left', '5.4rem')
            root.style.setProperty(' --sticky-top-right', '5.4rem')
        }
        else if (size.classList.contains('font-size-2')) {
            fontSizes = '13px';
            root.style.setProperty(' --sticky-top-left', '5.4rem')
            root.style.setProperty(' --sticky-top-right', '-7rem')

        }
        else if (size.classList.contains('font-size-3')) {
            fontSizes = '16px';
            root.style.setProperty(' --sticky-top-left', '-2rem')
            root.style.setProperty(' --sticky-top-right', '-17rem')

        }
        else if (size.classList.contains('font-size-4')) {
            fontSizes = '19px';
            root.style.setProperty(' --sticky-top-left', '5rem')
            root.style.setProperty(' --sticky-top-right', '-25rem')

        }
        else if (size.classList.contains('font-size-5')) {
            fontSizes = '22px';
            root.style.setProperty(' --sticky-top-left', '-12rem')
            root.style.setProperty(' --sticky-top-right', '-35rem')

        }
        // change font side of the root html element 
        document.querySelector('html').style.fontSize = fontSizes;
    })
})

// remove active clas from color 
// const changeActiveColor = () => {
// colorPalette.forEach(colorPicker => {
// colorPicker.classList.remove('active)
// })
// }




// color 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        if (color.classList.contains('color-1')) {
            primary = '252';
        }
        else if (color.classList.contains('color-2')) {
            primary = '52';
        }
        else if (color.classList.contains('color-3')) {
            primary = '352';
        }
        else if (color.classList.contains('color-4')) {
            primary = '152';
        }
        else if (color.classList.contains('color-5')) {
            primary = '202';
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primary);
    })
})

// Theme background 

let lightColorLightness;
let whiteColorLightness;
let darkcolorLightness;



// Change background 
const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    // add active class 

    Bg1.classList.add('active');

    // remove active class from 2 others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})


Bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkcolorLightness = '95%';

    // add active class 
    Bg2.classList.add('active')

    // remove active class from 2 others 
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');

    changeBg()
})

Bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkcolorLightness = '95%';

    // add active class 
    Bg3.classList.add('active')

    // remove active class from 2 others 
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');

    changeBg()
})




