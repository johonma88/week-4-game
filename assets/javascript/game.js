


var characters = {
    darthvader: {
        name: 'darthVader',
        hp : 200,
        attackPower:20,
        countAttack:1,
        status:0,  // defender 0 , attacker1
        image: 'darth-vaider.png' },
    
    captainPlasma:{
        name: 'captainPlasma',
        hp :140,
        attackPower : 11,
        countAttack: 1,
        status:0,  // defender 0 , attacker1
        image: 'captainPlasma.png'},
   
    hanSolo: {
        name: 'hanSolo',
        hp : 150,
        attackPower : 9,
        countAttack : 1,
        status:0,  // defender 0 , attacker1
        image: 'hanSolo.png'},

    yoda:{
        name: 'yoda',
        hp :190,
        attackPower : 18,
       countAttack: 1,
       status:0,  // defender 0 , attacker1
       image: 'yoda.png'},

    chewbacca:{
        name: 'chewbacca',
        hp :130,
        attackPower : 7,
        countAttack: 1,
        status:0,  // defender 0 , attacker1
        image: 'chewbacca.png'}
    }

var character = "";
var playerstatus=0; //0 empty  1 full
var hpPlayer =0;
var attackResult=0;
var hpEnemy =0;
var attPlayer=0;
var attEnemy=0;
var hpPlayerResult=0;
var hpEnemyResult=0;
var playerName="";
var enemyName="";



console.log("health Power "+ characters.darthvader.hp); 

// $(".colCharacater").click(function(){
//     // newCharacter= (".this").append;
//     $(this).hide(); 
  
// });



