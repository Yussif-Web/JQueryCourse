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
html += '<div href = "#">More info</div>';
html += '<div class="more-info">Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Porro cumque enim
           quisquam saepe non quos optio, neque labore
          debitis dolor minus ea molestiae beatae, officiis, 
          perferendis ex excepturi exercitationem ipsum?
         </div>';
html += '</div>;

$('#container').prepend(html);

});
$('container').on('click','.item-remove', function(){
$(this).parent().remove();
});
});