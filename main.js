$(document).ready(function(){
$('#buuton-create-item').on('keyup',function(){
let name = $('#input-create-item').val();
$('#input-create-item').val('');

let html = '';
html += <div class="item">
html += '<div class="name">' + name + '</div>'
html += '<img src="assets/beach.jpg"></img>';
html += '<div class="description">Lorem ipsum dolor sit
             amet consectetur adipisicing elit. 
             Aperiam assumenda quis tempora aspernatur 
             voluptate amet nemo. Animi repudiandae impedit, 
             illo voluptates sunt, laborum doloribus corporis
              magnam numquam voluptatum ipsam et.</div>';
html += '<div class="price">499</div>';
html += '<button>Add to cards</button>';
html += '<br/>';
html += '<a class="more-info-link" href ="#">More info</a>';
html += '<div class="more-info">Lorem ipsum dolor sit,
         </div>';
html += '</div>;

$('#container').prepend(html);
});
$('container').on('click','.more-info-link',function(event)
{
  event.preventDefault();

  $(this).parent().find('.more-info').fadetoggle(slow);
});
$(this)
.animate({"opacity":0, "margin-left":10}, 'fast')
.animate({"opacity": 1.0, "margin-left":0}, 'fast');

$('container').on('click','.item-remove', function(){
$(this).parent().remove();
});
});