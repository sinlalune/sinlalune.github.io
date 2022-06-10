// var nb_message = document.getElementsByClassName('message').length
// console.log(nb_message);
// document.getElementById('compteur').textContent='Message total : ' + nb_message

// *const count = function () { var nb_message = document.getElementsByClassName('message').length
// console.log(nb_message);
// document.getElementById('compteur').textContent='Message total : ' + nb_message}

// for(var i=0; i<document.getElementsByClassName('message').length; i++) {
//     document.getElementsByClassName('trash')[i].addEventListener("click",
//        function(){
//                     this.parentNode.remove()
//                     count()
//      })}
// const delete_message = function () {for(var i=0; i<document.getElementsByClassName('message').length; i++) {
//     document.getElementsByClassName('trash')[i].addEventListener("click",
//        function(){
//                     this.parentNode.remove()
//                     count()
//      })}}

// $('.trash').click(function() {
        
//                  $(this).parent().remove()
//                         count()
//  } )


console.log($('.message').length)

        const count = function () { 
        var nb_message = $('.message').length
        console.log(nb_message);
        $('#compteur').text('Message total : ' + nb_message)
    console.log('comptage réalisé');}






    const delete_message = function () {$('.trash').click(function() {
        
        $(this).parent().remove()
               count()
} )
         }



count()
delete_message ()

$('#add').on('click',
         function() {
             let new_message = $("#search").val()
             let new_author = $("#author").val()
            console.log(new_author);


let  messenger =  "<div class='ligne'><img class='man'src='man_3.png'alt='man'><div class='message'><h6 class='message_author'>" + new_author + "</h6><p class='text-message'>" + new_message + "</p></div><img class='trash'src='trash-bin.png'alt='trash'></div>"
$('#add_message').after(messenger)

$("#search").val('')
$("#author").val('')

count()
delete_message() })


$('#search0').on('click', function() {
    for (var i=0;i<$('.message').length;i++)  {
console.log($('.message_author')[i].textContent + ' author')
console.log($('#filter').val()+' search');
;
$('.message_author').each(
    function (){if ($(this).text() != $('#filter').val()) {

        $(this).parent().parent().fadeOut()}
    else {
        $(this).parent().parent().show()
    }})

    }}
)


             {/* const add_ligne = document.createElement("div");
             add_ligne.setAttribute('class','ligne');
             
             const add_img = document.createElement('img')
             add_img.setAttribute('src', "man_3.png" )
             add_img.setAttribute('class', "man" )
             
             
             const add_message_box = document.createElement('div');
             add_message_box.setAttribute('class','message');
            
             const add_h = document.createElement('h6');
             const na = document.createTextNode(new_author)
            
    
                 
             const add_p = document.createElement('p')
             add_p.setAttribute('class','text-message')
             const nm = document.createTextNode(new_message)

             
             
             const add_trash = document.createElement('img');
             add_trash.setAttribute('src', "trash-bin.png" );
             add_trash.setAttribute('class', "trash" );
         
            
             
             add_ligne.appendChild(add_img)
             add_ligne.appendChild(add_message_box);
             add_message_box.appendChild (add_h)

             add_h.appendChild(na)
        
             add_message_box.appendChild(add_p);
             add_p.appendChild(nm)
             add_ligne.appendChild(add_trash)
             count()
          

             console.log(add_ligne);
             console.log(new_message);
             const type_message = document.getElementById('add_message');
             type_message.insertAdjacentElement('afterend',add_ligne);
             count()
             delete_message()
         })
    

         div class="ligne">
            <img class="man"
            src="man_3.png"
            alt="man">
                <div class="message">
                <h6>new_author</h6>
                <p class="text-message">new_message </p>
                </div>
            <img class="trash"
            src="trash-bin.png"
            alt="trash">
        </div> */}