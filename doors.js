$('document').ready(function(){
    loadItems();
});

function loadItems() {
  $.getJSON('doors.json', function (data) {
    console.log(data);
      let out = '';
      for (let key in data){
        out+='<div class="card">';
        out+='<img src="'+data[key].img+'">';
        out+='<p class="price">'+data[key]['cost']+'</p>';
        out+='<p class="price_txt">РУБ</p>';
        out+='<div class="counter">';
        out+='<button data-action="minus" class="minus value"></button>';
        out+='<button data-action="plus" class="plus value"></button>';  
        out+='</div>';            
        out+='<input type="text" data-counter value="1">';
        out+='<button class="cart"></button>';
        out+='<div class="border"></div>';
        out+='</div>';
    }
  $('.items').html(out);
})
}        