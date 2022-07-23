
/*===========================================
At this point we will get the javascript to change the css for the body
=============================================*/
const navbar = document.querySelector('.navbar')
const checkbox = document.getElementById('checkbox')
const nodes = document.querySelectorAll('.links-color')
const logo_color = document.querySelector('.site-logo-color')
const card_nodes = document.querySelectorAll('.card')
const pre_nodes = document.querySelectorAll('pre')


function App() {}

App.prototype.setState = function(state) {
  localStorage.setItem('checked', state);
}

App.prototype.getState = function() {
  return localStorage.getItem('checked');
}

function init() {
  var app = new App();
  var state = app.getState();
  var checkbox = document.getElementById('checkbox');

  if (state == 'true') {
    checkbox.checked = true;
    document.body.classList.add('body-toggle')
    navbar.classList.add('nav-night')
    logo_color.classList.add('navbar-light-color-1')

    nodes.forEach((node)=>{
       node.classList.add('text-color')
    })
    card_nodes.forEach((card_node)=>{
      card_node.classList.add('card-color')
   })
   pre_nodes.forEach((pre_node)=>{
     pre_node.classList.add('pre_color')
   })
  }

  checkbox.addEventListener('change', function() {
      app.setState(checkbox.checked);
      document.body.classList.toggle('body-toggle')
      navbar.classList.toggle('nav-night')
      logo_color.classList.toggle('navbar-light-color-1')
  
      nodes.forEach((node)=>{
         node.classList.toggle('text-color')
      })
      card_nodes.forEach((card_node)=>{
         card_node.classList.toggle('card-color')
      })
      pre_nodes.forEach((pre_node)=>{
        pre_node.classList.toggle('pre_color')
      })
  });
}

init();




/*==============================================
At this point we style our video

================================================*/

iframe_nodes = document.querySelectorAll('iframe')

iframe_nodes.forEach((node)=>{
   parent= node.parentNode.classList.add('video-position')
   console.log(parent)

})

/*================================================
  ADDING SOME JAVASCRIPT TO MAKE JUMP TO A SPECIFIC 
  LOCATION ON A PAGE
=================================================='*/

const post_nodes  = document.getElementById('post-id')
console.log(post_nodes)
// post_nodes.forEach((node)=>{
//    console.log(node)
// })


/*================================================
  adding some color to the pre when in dark mode 
=================================================='*/













