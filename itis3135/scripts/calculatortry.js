const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click',e =>{
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        if(!action){
            console.timeLog('numberkey!');
        }
        if(
            action ==='add'||
            action ==='subtract'||
            action ==='multiply'||
            action ==='divide'
        ){
              console.timeLog('operator key!');
        }
        if(action === 'decimal'){
            console.log('decimal key!');
        }
        if(action === 'clear'){
            console.log('clear key!');
        }
        if(action === 'calculate'){
            console.log('equal key!');
        }
    }
    
})