$(document).ready(function(){
$('#input-name').on('keyup',function(){
let name = $(this).val();
$('#feedback-message').text('pleased to meet you, ' + name);
});
$('a').on('click',function(ev){
event.preventDefault();
$('#feedback-message').text('That\'s fine!');

});
});