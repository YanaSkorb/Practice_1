new Swiper('.swiper', {
    autoplay: true,
    speed: 1000,

});

const inputValidation = (e) => {
    // get value form event
    let value = e.target.value;    

    // validate value
    value = value.replace(/[^0-9]/g, '')

    e.target.value = '+' + value; 
}

var cleave = new Cleave('#numberr2', {
    phone: true,
    phoneRegionCode: 'BY'
});

AOS.init();
