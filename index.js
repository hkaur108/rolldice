var images=[
        './images/dice1.png',
        './images/dice2.png',
        './images/dice3.png',
        './images/dice4.png',
        './images/dice5.png',
        './images/dice6.png'
    ]
    



$(document).ready(function(){
    
    const randomNumber= ()=>{
    var randomNumber= Math.floor((Math.random()*images.length));
    return randomNumber
    }
    randdice1=randomNumber();
    randdice2=randomNumber();
    
    $('#firstdice').attr('src',images[randdice1])
    $('#seconddice').attr('src',images[randdice2])

    checkWinner(randdice1,randdice2)
}
    

)

$("#refresh").click(function(){
    location.reload(true)
})



$('#inst').css('cursor','pointer').click(function(){
    $('#desc').toggle()
})

function checkWinner(dice1val,dice2val){
    if(dice1val===dice2val){
        $('h1').text("It is a draw! ")
    }
    else if(dice1val>dice2val){
        $('h1').text('🚩 Player 1 Wins!')
    }
    else if(dice1val<dice2val){
        $('h1').text(' Player 2 Wins! 🚩')
    }
    else{
        $('h1').text('refresh me')
    }

}
