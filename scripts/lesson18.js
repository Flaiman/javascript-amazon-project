// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load', ()=>{
//     console.log(xhr.response);
// })
// xhr.open('GET', 'https://supersimplebackend.dev/greeting');
// xhr.send();

async function getAmazon(){
    try{
        const response = await fetch('https://amazon.com');
        const text = await response.json();
        console.log(text);
    } catch(error){
        console.log('unexpected error')
    }
}

async function greeting(){
    try{
        const response = await fetch('https://supersimplebackend.dev/greeting', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
        });
        if(response.status >= 400){
            throw response;
        }
        const text = await response.text();
        console.log(text);
    } catch(error){
        if(error.status === 400){
            const errorText = await error.json()
            console.log(errorText);
        } else{console.log('Network error. Try again later')}
    }
}

greeting();