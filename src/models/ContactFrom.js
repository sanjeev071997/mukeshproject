function message(){
    // e.preventDefault();
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    var phone = document.getElementById('phone');
    var adderss = document.getElementById('adderss');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    
    if(Name.value === '' || email.value === '' || msg.value === '' || phone === '' || adderss === '') {
        // console.log(danger.style.display = 'black')
        danger.style.display = 'block';
    }
    else{
        setTimeout( () => {
            Name.value = '';
            email.value = '';
            msg.value = '';
            phone.value = '';
            adderss.value = '';
        },3000)

        success.style.display ='block';
    }

    setTimeout(()=>{
        danger.style.display = 'none';
        success.style.display = 'none';
    },4000)

}