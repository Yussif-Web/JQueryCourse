$(document).ready(function(){
$('#input-name').on('keyup',function(){
let name = $(this).val();
$('#feedback-message').text('pleased to meet you, ' + name);
});
});