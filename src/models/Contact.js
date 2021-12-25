var typed = new Typed(".auto-typing", {
    strings : ["+91 8432066636"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

function message(){
    // e.preventDefault();
    var Name = document.getElementById('name');
    var phone = document.getElementById('phone');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    
    if(Name.value === '' || phone.value === '' ) {
        danger.style.display = 'block';
    }
    else{
        setTimeout( () => {
            Name.value = '';
            phone.value = '';
        },4000)

        success.style.display ='block';
    }

    setTimeout(()=>{
        danger.style.display = 'none';
        success.style.display = 'none';
    },4000)

}