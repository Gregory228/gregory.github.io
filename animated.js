////////////////////Это анимация кнопок\\\\\\\\\\\\\\\\\\\\
var buttons = document.getElementsByClassName('butt'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    var addDiv  = document.createElement('div'),
        mValue  = Math.max(this.clientWidth, this.clientHeight),
        rect    = this.getBoundingClientRect();
        sDiv    = addDiv.style,
        px      = 'px';

    sDiv.width  = sDiv.height = mValue + px;
    sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}
////////////////////Это анимация кнопок\\\\\\\\\\\\\\\\\\\\

////////////////////Это переход по ссылке после выполнения анимации\\\\\\\\\\\\\\\\\\\\
var links = document.getElementsByTagName("a");
    for(var i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener("click", function(e) {
          e.preventDefault();
          var href = this.href,
              position = 0,
              nav = document.getElementById('an'),
              animate = function() {
                 position+=0;
                 nav.style.marginLeft = position + 'px';
                 if(position == 0) {
                   clearInterval(containerId);
                   window.location = href;
                 }
              }
 
          var containerId = setInterval(animate, 1000);
 
        }, false);
    }
////////////////////Это переход по ссылке после выполнения анимации\\\\\\\\\\\\\\\\\\\\
