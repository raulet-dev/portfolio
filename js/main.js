$(document).ready(function(){

//hide not active content
$('.content#about').fadeOut(); // about ... put home for develop purpouse
$('.content#work').fadeOut(); // work ... put home for develop purpouse
$('.content#home').fadeOut(); // contact ... put home for develop purpouse

const quotes = [
    ['\"Like my friend Warren Buffett, I feel particularly lucky to do something every day that I love to do. He calls it \'tap-dancing to work.\'\"', '- Bill Gates.'],
    ['\"Impossible only means that you haven\'t found the solution yet.\"', '- Anonymous.'],
    ['\"All outstanding work, in art as well as in science, results from immense zeal applied to a great idea.\"', '- Santiago Ramon y Cajal.'],
    ['\"Above all, don\'t fear difficult moments. The best comes from them.\"', '- Rita Levi-Montalcini.'],
    ['\"Research is to see what everybody else has seen, and to think what nobody else has thought.\"', '- Albert Szent-Gyorgyi.'],
    ['\"If you want to have good ideas, you must have many ideas.\"', '- Linus Pauling.'],
    ['\"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.\"', '- Marie Curie.'],
    ['\"The important thing is to never stop questioning \(or learning\).\"', '- Albert Einstein.'],
    ['\"We cannot solve problems with the same thinking we used to create them.\"', '- Albert Einstein.'],
    ['\"On my business card, I am a corporate president. In my mind, I am a computer programmer. But in my heart, I am a gamer.\"', '- Satoru Iwata.'],
    ['\"It took us three years to build the NeXT computer. If we\'d given customers what they said they wanted, we\'d have built a computer they\'d have been happy with a year after we spoke to them - not something they\'d want now.\"', '- Steve Jobs.'],
    ['\"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.\"', '- Linus Torvalds.'],
    ['\"Computer science is not just for smart \'nerds\' in hoodies coding in basements. Coding is extremely creative and is an integral part of almost every industry.\"', '- Reshma Saujani.'],
    ['\"Any program is only as good as it is useful.\"', '- Linus Torvalds.'],
    ['\"The Linux philosophy is \'Laugh in the face of danger\'. Oops. Wrong One. \'Do it yourself\'. Yes, that\'s it.\"', '- Linus Torvalds.']
    ];
    
const getRndInteger = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

const rnd = getRndInteger(0, quotes.length);
const quote = quotes[rnd];
document.getElementById("quote-text").innerHTML = quote[0];
document.getElementById("quote-signature").innerHTML = quote[1];

// get display status of an element
const getContentDisplay = (elem) => (getComputedStyle(document.querySelector(elem)).display);

// switch contents
$('#top-home').click(function(){
    if (getContentDisplay('.content#home') === 'none'){
        $('.content').fadeOut(500);
        const rnd = getRndInteger(0, quotes.length);
        const quote = quotes[rnd];
        document.getElementById("quote-text").innerHTML = quote[0];
        document.getElementById("quote-signature").innerHTML = quote[1];
        $('.content#home').fadeIn(500);
    };
});
$('#top-about').click(function(){
    if (getContentDisplay('.content#about') === 'none'){
        $('.content').fadeOut(500);
        $('.content#about').fadeIn(500);
    };
});
$('#top-work').click(function(){
    console.log(getContentDisplay('.content#work'))
    if (getContentDisplay('.content#work') === 'none'){
        $('.content').fadeOut(500);
        $('.content#work').fadeIn(500);
    };
});
$('#top-contact').click(function(){
    console.log(getContentDisplay('.content#contact'))
    if (getContentDisplay('.content#contact') === 'none'){
        $('.content').fadeOut(500);
        $('.content#contact').fadeIn(500);
    };
});
// end switch contents

// send mail function
var mandrill = require('node-mandrill')('<your API Key>'); 

function sendEmail ( _name, _email, _subject, _message) {
    mandrill('/messages/send', {
        message: {
            to: [{email: _email , name: _name}],
            from_email: 'noreply@raulet.dev',
            subject: _subject,
            text: _message
        }
    }, function(error, response){
        if (error) console.log( error );
        else console.log(response);
    });
}

// define your own email api which points to your server.

app.post( '/api/sendemail/', function(req, res){

    var _name = req.body.name;
    var _email = req.body.email;
    var _subject = req.body.subject;
    var _messsage = req.body.message;

    //implement your spam protection or checks. 

    sendEmail ( _name, _email, _subject, _message );

});

// load screen fade off
$('#load').fadeOut(1500);
});