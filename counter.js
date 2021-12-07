window.addEventListener('click',function(){
const counterWrapper = event.target.closest('.card');
const counter = counterWrapper.querySelector('[data-counter]');

    if(this.event.target.dataset.action === 'plus'){
        counter.value++;
        
    }
    if(this.event.target.dataset.action === 'minus' && counter.value>1){
        counter.value--;
    
    }
});