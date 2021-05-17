var Body = {
    setColor: function (color){
        document.querySelector('body').style.color=color;
    }, /*property 사이에 comma로 구분*/
    backgroundSetColor: function (color){
        document.querySelector('body').style.backgroundColor=color;
    }
}

var Links = {
    setColor: function (color){
        var alist = document.querySelectorAll('a'); 
        var i = 0;
        while(i < alist.length){
         alist[i].style.color= color;
         i = i + 1 ;
          }
        }
}

function nightDayHandler(self){
    var target = document.querySelector('body');

    if(self.value === 'night'){
        Body.backgroundSetColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
        }
    else{
        Body.backgroundSetColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}