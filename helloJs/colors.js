var Links = {
    setColor: function(color){
    //     var ch = document.querySelectorAll('a');
    //     for(var i=0;i<ch.length;i++){
    //         ch[i].style.color=color;
    //     }
    $('a').css("color",color);
    }
}

var Body = {
    SetColor:function(color){
        //document.querySelector('body').style.color=color;    
        $('body').css('color',color);
    },
    SetBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor',color);
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        self.value='day';
        Links.setColor('powderblue');
    }else{
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value='night';
        Links.setColor('green');
    }
}