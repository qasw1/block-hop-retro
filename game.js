var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(600, 600); 
        frameRate(30);
        
        //Sub page:
//https://www.khanacademy.org/computer-programming/endeavours-sub-page/6256973864271872

//Use the level creator to make levels, then fill in the name and creator slots in the userlevel and post in the T&T


frameRate(60);
smooth();
//Change this variable to true if your computer is slow
var lowLag=false;
//Change this variable to true if your computer is extremely slow
var lagless=false;








{
    frameRate(30);
var scene="load";
var introv=[];
var ff=-50;
var x2=300;
var introCount=0;
var l=0;
var health=100;

var enemies=[];
var currLevel={
    blocks:[],
    message:""
};
var level=0;
var levelStart=true;
var keys=[];
var blockNum=0;
var tnum=0;
var art=[
    //{    
    [
       [0,6,6,6,6,6,6,6],[6,0,0,6,0,0,0,0],[6,0,0,6,0,0,0,0],[6,0,0,6,0,0,0,0],[0,6,6,6,6,6,6,6], 
        ],
    [
       [6,6,6,6,6,6,6,6],[6,0,0,6,0,0,0,6],[6,6,6,6,0,0,0,6],[0,0,0,6,0,0,0,6],[0,0,0,6,6,6,6,6],
 
        ],
    [
       [6,6,6,6,6,6,6,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],
 
        ],
    [
       [6,6,6,6,6,6,6,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],[0,6,6,6,6,6,6,0], 
        ],
    [
      [6,6,6,6,6,6,6,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,0,0,0,0,6],  
        ],
    [
      [6,6,6,6,6,6,6,6],[6,0,0,6,0,0,0,0],[6,0,0,6,0,0,0,0],[6,0,0,0,0,0,0,0],[6,0,0,0,0,0,0,0],
  
        ],
    [
      [6,6,6,6,6,6,6,6],[6,0,0,0,0,0,0,6],[6,0,0,0,6,0,0,6],[6,0,0,0,6,0,0,6],[6,0,0,0,6,6,6,6],
  
        ],
    [
      [6,6,6,6,6,6,6,6],[0,0,0,6,0,0,0,0],[0,0,0,6,0,0,0,0],[0,0,0,6,0,0,0,0],[6,6,6,6,6,6,6,6],
  
        ],
    [
      [6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],[6,6,6,6,6,6,6,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],  
        ],
    [
      [6,0,0,0,0,0,6,0],[6,0,0,0,0,0,0,6],[6,6,6,6,6,6,6,6],[6,0,0,0,0,0,0,0],[6,0,0,0,0,0,0,0],  
        ],
    [
      [6,6,6,6,6,6,6,6],[0,0,0,6,6,0,0,0],[0,0,6,0,0,6,0,0],[0,6,0,0,0,0,6,0],[6,0,0,0,0,0,0,6],  
        ],
    [
      [6,6,6,6,6,6,6,6],[0,0,0,0,0,0,0,6],[0,0,0,0,0,0,0,6],[0,0,0,0,0,0,0,6],[0,0,0,0,0,0,0,6],  
        ],
    [
      [6,6,6,6,6,6,6,6],[0,6,0,0,0,0,0,0],[0,0,6,0,0,0,0,0],[0,6,0,0,0,0,0,0],[6,6,6,6,6,6,6,6],  
        ],
    [
      [6,6,6,6,6,6,6,6],[0,0,6,0,0,0,0,0],[0,0,0,6,0,0,0,0],[0,0,0,0,6,0,0,0],[6,6,6,6,6,6,6,6],  
        ],
    [
      [6,6,6,6,6,6,6,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,6],[6,6,6,6,6,6,6,6],  
        ],
    [
      [6,6,6,6,6,6,6,6],[6,0,0,6,0,0,0,0],[6,0,0,6,0,0,0,0],[6,0,0,6,0,0,0,0],[6,6,6,6,0,0,0,0],  
        ],
    [
      [6,6,6,6,6,6,6,6],[6,0,0,0,0,0,0,6],[6,0,0,0,0,6,6,6],[6,0,0,0,0,0,6,6],[6,6,6,6,6,6,6,6],  
        ],
    [
      [6,6,6,6,6,6,6,6],[6,0,0,6,6,0,0,0],[6,0,0,6,0,6,0,0],[6,0,0,6,0,0,6,0],[6,6,6,6,0,0,0,6],
  
        ],
    [
      
[6,6,6,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,6,6,6,6],  
        ],
    [
      [6,0,0,0,0,0,0,0],[6,0,0,0,0,0,0,0],[6,6,6,6,6,6,6,6],[6,0,0,0,0,0,0,0],[6,0,0,0,0,0,0,0],  
        ],
    [
      [6,6,6,6,6,6,6,0],[0,0,0,0,0,0,0,6],[0,0,0,0,0,0,0,6],[0,0,0,0,0,0,0,6],[6,6,6,6,6,6,6,0],  
        ],
    [
      [6,6,6,6,6,6,0,0],[0,0,0,0,0,0,6,0],[0,0,0,0,0,0,0,6],[0,0,0,0,0,0,6,0],[6,6,6,6,6,6,0,0],  
        ],
    [
      [6,6,6,6,6,6,6,6],[0,0,0,0,0,0,6,0],[0,0,0,0,0,6,0,0],[0,0,0,0,0,0,6,0],[6,6,6,6,6,6,6,6],  
        ],
    [
      [6,0,0,0,0,0,0,6],[0,6,6,0,0,6,6,0],[0,0,0,6,6,0,0,0],[0,6,6,0,0,6,6,0],[6,0,0,0,0,0,0,6],  
        ],
    [
    [6,0,0,0,0,0,0,0],[0,6,0,0,0,0,0,0],[0,0,6,6,6,6,6,6],[0,6,0,0,0,0,0,0],[6,0,0,0,0,0,0,0],
    ],
    [
      [6,0,0,0,0,0,6,6],[6,0,0,0,0,6,0,6],[6,0,0,0,6,0,0,6],[6,0,0,6,0,0,0,6],[6,6,6,0,0,0,0,6],  
        ],
    //}//Letters
    //{
    [
      [6,6,6,6,6,6,6,6],[6,0,0,0,6,0,0,6],[6,0,0,6,0,0,0,6],[6,0,6,0,0,0,0,6],[6,6,6,6,6,6,6,6],  
        ],
    [
      [0,0,6,0,0,0,0,6],[0,6,0,0,0,0,0,6],[6,6,6,6,6,6,6,6],[0,0,0,0,0,0,0,6],[0,0,0,0,0,0,0,6],  
        ],
    [
      [6,0,0,6,6,6,6,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,6,6,6,0,0,0,6],  
        ],
    [
      
[6,0,0,0,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,6,6,6,6,6,6,6],  
        ],
    [
      [6,6,6,6,0,0,0,0],[0,0,0,6,0,0,0,0],[0,0,0,6,0,0,0,0],[0,0,0,6,0,0,0,0],[6,6,6,6,6,6,6,6],  
        ],
    [
      [6,6,6,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,6,6,6,6],  
        ],
    [
      
[6,6,6,6,6,6,6,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,6,6,6,6],  
        ],
    [
      [6,0,0,0,0,0,0,6],[6,0,0,0,0,0,6,0],[6,0,0,0,0,6,0,0],[6,0,0,0,6,0,0,0],[6,6,6,6,0,0,0,0],  
        ],
    [
      [6,6,6,6,6,6,6,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,0,0,6,0,0,0,6],[6,6,6,6,6,6,6,6],  
        ],
    [
      [6,6,6,6,0,0,0,0],[6,0,0,6,0,0,0,0],[6,0,0,6,0,0,0,0],[6,0,0,6,0,0,0,0],[6,6,6,6,6,6,6,6],  
        ],
        //}//Numbers
    //{
    [
      [0,0,0,0,0,0,0,6],  
        ],
    [
      [6,6,6,6,6,6,0,6],  
        ],
    [
      [6,0,0,0,0,0,0,0],[6,0,0,6,6,6,0,6],[6,0,0,6,0,0,0,0],[6,0,0,6,0,0,0,0],[0,6,6,0,0,0,0,0],  
        ],
    [
      [0,6,0,0,0,0,6,0],  
        ],
    [
    [0,0,0,0,0,0,6,6],
    ],
    [
      [0,6,0,0,0,0,6,6],  
        ],
    [
      
[0,0,0,0,0,0,0,6],[0,0,0,0,0,6,6,0],[0,0,0,6,6,0,0,0],[0,6,6,0,0,0,0,0],[6,0,0,0,0,0,0,0],  
        ],
        //}//Symbols
    [[0,0,0,12,12,12,12,12,12,12,12,12,0,0,0],[0,0,12,13,13,13,13,13,13,13,13,13,12,0,0],[0,12,13,14,14,14,14,14,14,14,14,14,13,12,0],[12,13,14,15,15,15,15,15,15,15,15,15,14,13,12],[12,13,14,15,15,16,16,15,16,16,15,15,14,13,12],[12,13,14,15,16,15,16,15,16,15,16,15,14,13,12],[12,13,14,15,16,16,15,15,15,16,16,15,14,13,12],[12,13,14,15,15,15,15,12,15,15,15,15,14,13,12],[12,13,14,15,16,16,15,15,15,16,16,15,14,13,12],[12,13,14,15,16,15,16,15,16,15,16,15,14,13,12],[12,13,14,15,15,16,16,15,16,16,15,15,14,13,12],[12,13,14,15,15,15,15,15,15,15,15,15,14,13,12],[0,12,13,14,14,14,14,14,14,14,14,14,13,12,0],[0,0,12,13,13,13,13,13,13,13,13,13,12,0,0],[0,0,0,12,12,12,12,12,12,12,12,12,0,0,0],],//Tree 1
    [[0,0,0,0,0,6,0,0,0,0,0,0,0],[0,0,0,0,0,0,6,0,0,0,0,0,0],[0,0,0,0,6,6,6,6,0,0,0,0,0],[0,0,6,6,6,0,6,0,0,6,6,0,0],[0,6,6,0,0,6,0,0,0,0,6,6,0],[0,6,0,0,0,0,0,0,0,0,0,6,0],[6,6,0,0,0,0,0,0,0,0,0,6,6],[6,0,0,0,0,0,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,0,0,0,0,0,6],[6,6,0,0,0,0,0,0,0,0,0,6,6],[0,6,0,0,0,0,0,0,0,0,0,6,0],[0,6,6,0,0,0,0,6,0,0,6,6,0],[0,0,6,6,0,0,6,0,6,6,6,0,0],[0,0,0,0,0,6,6,6,6,0,0,0,0],[0,0,0,0,0,0,6,0,0,0,0,0,0],[0,0,0,0,0,0,0,6,0,0,0,0,0],],//UFO
    [
        [0,0,0,42,42,42,42,42,0,0,0,0,0,0],[0,0,42,43,43,43,43,43,42,0,0,0,0,0],[0,42,43,44,44,44,44,44,43,42,0,0,0,0],[42,43,44,45,45,45,45,45,44,43,42,0,0,0],[42,43,44,45,46,46,46,46,45,44,43,42,0,0],[0,42,43,44,45,46,41,41,46,45,44,43,42,0],[0,0,42,43,44,45,46,41,41,46,45,44,43,42],[0,0,42,43,44,45,46,41,41,46,45,44,43,42],[0,42,43,44,45,46,41,41,46,45,44,43,42,0],[42,43,44,45,46,46,46,46,45,44,43,42,0,0],[42,43,44,45,45,45,45,45,44,43,42,0,0,0],[0,42,43,44,44,44,44,44,43,42,0,0,0,0],[0,0,42,43,43,43,43,43,42,0,0,0,0,0],[0,0,0,42,42,42,42,42,0,0,0,0,0,0],
    
            ],//Hole
    [
      [0,0,0,0,0,0,6,6,6,6,6,6,6,6,6],[0,0,0,0,0,6,6,6,1,1,1,1,1,1,6],[0,0,0,0,6,6,1,6,1,1,1,1,1,1,6],[0,0,0,6,6,1,1,6,1,1,1,1,1,1,6],[0,0,6,6,1,1,1,6,1,1,1,1,1,1,6],[0,0,6,1,1,1,1,6,1,1,1,1,1,1,6],[0,0,6,1,1,1,1,6,1,1,1,1,1,1,6],[0,0,6,1,1,1,1,6,6,6,6,6,6,6,6],[0,0,6,1,1,1,6,6,1,1,1,1,1,6,6],[0,0,6,1,1,6,6,1,1,1,1,1,6,6,0],[0,0,6,1,6,6,1,1,1,1,1,6,6,0,0],[0,0,6,6,6,1,1,1,1,1,6,6,0,0,0],[0,0,6,6,6,6,6,6,6,6,6,0,0,0,0],  
        ],//Box
    [
      [38,41,40,37,39],[39,40,40,41,38],[39,40,39,38,40],[41,39,41,41,39],[40,40,41,37,41],
  ],//Ground
    [
    [43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],
  
      ],//Lava 1
    [
    [43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],
  
      ],//Lava 2
    [
    [43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],[43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4)),43+floor(random(0,4))],
  
      ],//Lava 3
    [
    [48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],
  
      ],//Water 1
    [
    [48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],
  
      ],//Water 2
    [
    [48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],[48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4)),48+floor(random(0,4))],
  
      ],//Water 3
    [
      [9,10],[11,11],[11,9],[10,9],[9,11],
  ],//Ground
    [
      [0,0,0,0,0,0,0,0,0,0,5],[0,0,0,0,0,0,0,0,5,5,5],[0,0,0,0,0,0,5,5,5,5,5],[0,0,0,0,5,5,5,5,5,5,5],[0,0,5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5,5,5],[0,0,5,5,5,5,5,5,5,5,5],[0,0,0,0,5,5,5,5,5,5,5],[0,0,0,0,0,0,5,5,5,5,5],[0,0,0,0,0,0,0,0,5,5,5],[0,0,0,0,0,0,0,0,0,0,5],  
        ],//Spike
    [
      [0,47,47,47,47,47,47,47,47,0],[47,47,13,13,13,13,13,13,47,47],[47,30,13,31,31,13,13,13,13,47],[47,30,13,31,31,13,13,6,13,47],[47,30,13,13,13,13,13,6,13,47],[47,30,13,13,13,13,13,6,13,47],[47,30,13,31,31,13,13,6,13,47],[47,30,13,31,31,13,13,13,13,47],[47,47,13,13,13,13,13,13,47,47],[0,47,47,47,47,47,47,47,47,0],  
        ],//Player (Standing)
    [
      [0,47,47,47,47,47,47,47,47,0],[47,47,13,13,13,13,13,13,47,47],[47,30,13,13,13,13,13,13,13,47],[47,30,13,31,31,13,13,13,13,47],[47,30,13,31,31,13,13,6,13,47],[47,30,13,13,13,13,13,6,13,47],[47,30,13,13,13,13,13,6,13,47],[47,30,13,31,31,13,13,6,13,47],[47,47,13,31,31,13,13,13,47,47],[0,47,47,47,47,47,47,47,47,0],  
        ],//Player  
    [
      [0,47,47,47,47,47,47,47,47,0],[47,47,13,31,31,13,13,13,47,47],[47,30,13,31,31,13,13,6,13,47],[47,30,13,13,13,13,13,6,13,47],[47,30,13,13,13,13,13,6,13,47],[47,30,13,31,31,13,13,6,13,47],[47,30,13,31,31,13,13,13,13,47],[47,30,13,13,13,13,13,13,13,47],[47,47,13,13,13,13,13,13,47,47],[0,47,47,47,47,47,47,47,47,0],  
        ],//Player
    [
      [0,47,47,47,47,47,47,47,47,0],[47,47,13,13,13,13,13,13,47,47],[47,30,31,31,13,13,13,13,13,47],[47,30,31,31,13,13,6,13,13,47],[47,30,13,13,13,13,6,13,13,47],[47,30,13,13,13,13,6,13,13,47],[47,30,31,31,13,13,6,13,13,47],[47,30,31,31,13,13,13,13,13,47],[47,47,13,13,13,13,13,13,47,47],[0,47,47,47,47,47,47,47,47,0],  
        ],//Player
    [
      [0,47,47,47,47,47,47,47,47,0],[47,47,13,13,13,13,13,13,47,47],[47,30,13,13,31,31,13,13,13,47],[47,30,13,13,31,31,13,13,6,47],[47,30,13,13,13,13,13,13,6,47],[47,30,13,13,13,13,13,13,6,47],[47,30,13,13,31,31,13,13,6,47],[47,30,13,13,31,31,13,13,13,47],[47,47,13,13,13,13,13,13,47,47],[0,47,47,47,47,47,47,47,47,0],  
        ],//Player
    [
      [11,11],[10,9],[11,10],[9,7],[10,11],  
        ],//Grass
    [
      [24,25],[25,24],[24,25],[25,22],[25,24],  
        ],//Trampoline
    [
      [5,5],[4,3],[5,4],[3,2],[4,5],  
        ],//Platform
    [
      [0,12,12,12,12,12,12,12,12,0],[12,12,42,42,12,12,12,12,12,12],[12,12,42,42,12,27,27,27,12,12],[12,12,12,12,12,27,42,27,12,12],[12,12,12,12,12,27,44,27,12,12],[12,12,42,42,12,27,27,27,12,12],[12,12,42,42,12,12,12,12,12,12],[12,12,12,12,12,12,12,12,12,12],[12,12,12,12,12,12,12,12,12,12],[0,12,12,12,12,12,12,12,12,0],  
        ],//Enemy (Left)
    [
      [0,12,12,12,12,12,12,12,12,0],[12,12,12,12,12,12,12,12,12,12],[12,12,12,12,12,12,12,12,12,12],[12,12,42,42,12,12,12,12,12,12],[12,12,42,42,12,27,27,27,12,12],[12,12,12,12,12,27,44,27,12,12],[12,12,12,12,12,27,42,27,12,12],[12,12,42,42,12,27,27,27,12,12],[12,12,42,42,12,12,12,12,12,12],[0,12,12,12,12,12,12,12,12,0],  
        ],//Enemy (Right)
    [
      [3,3,3,3,3,3,3,3],[3,2,3,3,3,3,2,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3],[3,2,3,3,3,3,2,3],[3,3,3,3,3,3,3,3],  
        ],//Crate
    [
      [2,5,6,4,5],[6,3,4,6,5],[3,5,4,3,6],[4,6,2,5,5],[5,4,6,6,3],  
        ],//Gravel
    [
      [40,40,40,41,40],[37,41,40,40,37],[41,41,37,40,41],[41,41,41,40,38],[39,41,39,40,39],  
        ],//Fake
    [
      [3,3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3,3],[3,3,3,6,3,3,3,6,3,3,3],[3,3,3,3,6,3,6,3,3,3,3],[3,3,3,3,3,6,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3,3],[3,3,3,6,3,3,3,6,3,3,3],[3,3,3,3,6,3,6,3,3,3,3],[3,3,3,3,3,6,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3,3],  
        ],//Mover (Right)
    [
      [3,3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,6,3,3,3,3,3],[3,3,3,3,6,3,6,3,3,3,3],[3,3,3,6,3,3,3,6,3,3,3],[3,3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,6,3,3,3,3,3],[3,3,3,3,6,3,6,3,3,3,3],[3,3,3,6,3,3,3,6,3,3,3],[3,3,3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3,3],  
        ],//Mover (Left)
    [
      [3,3,3,3,3],[3,3,42,42,42],[3,42,3,3,3],[3,3,42,42,42],[3,3,3,3,3],
  
        ],//Magnet
    [
       [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,6,0,0],[30,30,30,30,30], 
        ],//One-way door (Right)
    [
       [30,30,30,30,30],[0,0,6,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
 
        ],//One-way door (Left)
    [
       [0,0,0,0,30],[0,0,0,0,30],[0,0,0,6,30],[0,0,0,0,30],[0,0,0,0,30], 
        ],//One-way door (Down)
    [
       [30,0,0,0,0],[30,0,0,0,0],[30,6,0,0,0],[30,0,0,0,0],[30,0,0,0,0], 
        ],//One-way door (Up)
    [
      [0,0,0,0,12,12,0,0,0,0],[0,0,0,12,13,13,12,0,0,0],[0,0,12,13,14,14,13,12,0,0],[0,12,13,14,15,15,14,13,12,0],[12,13,14,15,16,16,15,14,13,12],[12,13,14,15,16,16,15,14,13,12],[0,12,13,14,15,15,14,13,12,0],[0,0,12,13,14,14,13,12,0,0],[0,0,0,12,13,13,12,0,0,0],[0,0,0,0,12,12,0,0,0,0],  
        ],//Portal
];

var cols=[    
    color(255,0),
    color(255),
    color(200),
    color(150),
    color(100),
    color(50),
    color(0),
    color(0,255,0),
    color(0,205,0),
    color(0,155,0),
    color(0,105,0),
    color(0,55,0),
    color(255,255,0),
    color(205,205,0),
    color(155,155,0),
    color(105,105,0),
    color(55,55,0),
    color(0,255,255),
    color(0,205,205),
    color(0,155,155),
    color(0,105,105),
    color(0,55,55),
    color(255,0,255),
    color(205,0,205),
    color(155,0,155),
    color(105,0,105),
    color(55,0,55),
    color(255, 145, 0),
    color(255*4/5, 145*4/5, 0),
    color(255*3/5, 145*3/5, 0),
    color(255*2/5, 145*2/5, 0),
    color(255*1/5, 145*1/5, 0),
    color(21, 219, 124),
    color(21*4/5, 219*4/5, 124*4/5),
    color(21*3/5, 219*3/5, 124*3/5),
    color(21*2/5, 219*2/5, 124*2/5),
    color(21*1/5, 219*1/5, 124*1/5),
    color(140, 61, 0),
    color(140*4/5, 61*4/5, 0),
    color(140*3/5, 61*3/5, 0),
    color(140*2/5, 61*2/5, 0),
    color(140*1/5, 61*1/5, 0),
    color(255, 0, 0),
    color(205, 0, 0),
    color(155, 0, 0),
    color(105, 0, 0),
    color(55, 0, 0),
    color(0, 0, 255),
    color(0, 0, 205),
    color(0, 0, 155),
    color(0, 0, 105),
    color(0, 0, 55),
    ];

var letters=[];
var numbers=[];
var symbols=[];
var graphics=[];
var crates=[];
var platforms=[];
var num=0;
var N=0;
var createArt=function(k){
    background(255,0);
    noStroke();
    for(var i=0;i< art[k].length;i++){
        for(var j=0;j<art[k][i].length;j++){
            fill(cols[art[k][i][j]]);
            rect(i*20,j*20,20,20);
        }
    }
    if(k<26){
        letters[k]=get(0,0,art[k][0].length*20,art[k][0].length*20);
    }
    else if(k<36){
        numbers[k-26]=get(0,0,art[k][0].length*20,art[k][0].length*20);
    }
    else if(k<43){
        symbols[k-36]=get(0,0,art[k][0].length*20,art[k][0].length*20);
    }
    else{
    graphics[k-43]=get(0,0,art[k].length*20,art[k][0].length*20);
    }
};
var Text=function(mess,x,y,sz){
    //var letters=letters+symbols;
    var sz=sz||20;
    for(var i=0;i<mess.length;i++){
        var n=false;
        switch(mess[i].toLowerCase()){
            case "a":
                n=0;
                break;
            case "b":
                n=1;
                break;
            case "c":
                n=2;
                break;
            case "d":
                n=3;
                break;
            case "e":
                n=4;
                break;
            case "f":
                n=5;
                break;
            case "g":
                n=6;
                break;
            case "h":
                n=7;
                break;
            case "i":
                n=8;
                break;
            case "j":
                n=9;
                break;
            case "k":
                n=10;
                break;
            case "l":
                n=11;
                break;
            case "m":
                n=12;
                break;
            case "n":
                n=13;
                break;
            case "o":
                n=14;
                break;
            case "p":
                n=15;
                break;
            case "q":
                n=16;
                break;
            case "r":
                n=17;
                break;
            case "s":
                n=18;
                break;
            case "t":
                n=19;
                break;
            case "u":
                n=20;
                break;
            case "v":
                n=21;
                break;
            case "w":
                n=22;
                break;
            case "x":
                n=23;
                break;
            case "y":
                n=24;
                break;
            case "z":
                n=25;
                break;
            case ".":
                n=26;
                break;
            case "!":
                n=27;
                break;
            case "?":
                n=28;
                break;
            case ":":
                n=29;
                break;
            case ",":
                n=30;
                break;
            case ";":
                n=31;
                break;
            case "/":
                n=32;
                break;
            case "0":
                n=33;
                break;
            case "1":
                n=34;
                break;
            case "2":
                n=35;
                break;
            case "3":
                n=36;
                break;
            case "4":
                n=37;
                break;
            case "5":
                n=38;
                break;
            case "6":
                n=39;
                break;
            case "7":
                n=40;
                break;
            case "8":
                n=41;
                break;
            case "9":
                n=42;
                break;
        }
        if(n!==false){
        image(n<26?letters[n]:n<33?symbols[n-26]:numbers[n-33],x+i*(sz*24/23),y,sz,sz);
        }
    }
};
var finished=false;
var player={
    x:20,
    y:20,
    w:25,
    h:25,
    rex:20,
    rey:20,
    speed:0,
    grav:3,
    gravimp:0.2,
    speedf:4,
    jumping:false,
    swimming:false,
    jumpTimer:60,
    onGround:true,
    falling:false,
    canMoveLeft:true,
    canMoveRight:true,
    health:100,
    draw: function() {
        
        if (this.swimming){
            this.speedf=2;
            this.gravimp=0;
            if(keys[UP]===true){
                this.grav=-2;
                
            }
            
            else{
                
                this.grav=2;
            }
        }
        else if(this.onGrass){
                this.speedf=2;
            }
        else{
            this.speedf=4;
            this.gravimp=0.2;
            if(keys[UP]&&this.onGround===true){
        this.grav=-5;
        this.onGround=false;
    }
        }
    if(keys[LEFT]&&this.canMoveLeft===true){
        this.speed=-this.speedf;
        tnum-=this.speedf;
        
            //trans-=this.speed;
        
        
    }
    else if(keys[RIGHT]&&this.canMoveRight===true){
        this.speed=this.speedf;
        tnum+=this.speedf;
        
            //trans-=this.speed;
        
        
    }
    else{
        this.speed=0;
    }
    if(this.onGround===true){
        //this.grav=0;
    }
    else if(this.onGround===false&&this.grav<10){
        this.grav+=this.gravimp;
    }
    
        if(this.onGround===false){
            //constrain(transy,0,levels[level].length*20);
            //transy-=this.grav;
            
        }
        
        
        //constrain(transy,0,levels[level].length*20);
    //else{this.speed=3;}
    
    //fill(colors[col][0]);
    
    
    //fill(colors[col][1]);
    if(this.speed>0){
    image(graphics[14],this.x,this.y,this.w,this.h);
    }
    else if(this.speed<0){
        image(graphics[15],this.x,this.y,this.w,this.h);
    }
    else if(this.grav<0&&this.onGround===false){
        image(graphics[16],this.x,this.y,this.w,this.h);
    }
    else if(this.grav>0&&this.onGround===false){
        image(graphics[17],this.x,this.y,this.w,this.h);
    }
    else{
        image(graphics[13],this.x,this.y,this.w,this.h);
    }
    
   
    this.y+=this.grav;
    this.x+=this.speed;
},
};
var messages=[
    [
    "Welcome to Block Hop retro","",
    "You are the square with a face.","LEFT and RIGHT","arrow keys to move,","UP arrow to jump.","","The yellow diamond is the portal.","move onto it to progress","to the next level.",
    ],
    [
    "Spikes!", "Avoid them unless you","really have to jump",
    ],
    [
    "Trampolines!","They make you jump,","of course",
    ],
    [
    "Grass slows you down","and prevents you from jumping.",
    ],
    [
    "Lava","avoid it",
    ],
    [
    "Be careful, some of the","blocks are fake!",
    ],
    [
    "Swimming lesson.","UP to swim up,LEFT and RIGHT","to move horizontally,","You automatically sink.",
    ],
    [
    "This is an enemy.","It will kill you if you touch it.","Jump on its head to kill it.",
    ],
    [
    "","Magnets","","pull things up","","","","",
    "                     One way doors","",
    "Crates","You can","push them","","",
    "                  Movers move you","","                   and crates",
    
    ],
    [
    "Gravel","It vanishes if you","stand on it for too long",
    ],
    [
    "Platforms","They move you, but enemies","and crates go straight through",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    [
    "",
    ],
    ];
var speedc=60;
var savec=millis();
var speed=function(){
    if(frameCount%20===0){
    speedc=1/((millis()-savec)/1000);
    savec=millis();
    }
    return round(speedc*20);
};


var levels=[
    [
        "gggggggggggggggggggg",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                 @g",
        "g               gggg",
        "g              ggggg",
        "gx            gggggg",
        "gi        i  ggggggg",
        "gggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "gxi    gsssg    ss     ssg  @g",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggg",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                 @g",
        "g                  g",
        "g                gtg",
        "g                g g",
        "g                g g",
        "g                g g",
        "g              gtg g",
        "g              g   g",
        "g              g   g",
        "gxi            g   g",
        "ggggggggggggggtggggg",
    ],
    [
        "gggggggggggggggggggg",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "gxi   G   G       @g",
        "gGGGGgGGGgGGGGGGGGGg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "gx i      gllllgllllg       @g",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g i                          g",
        "g gffgffgffgffgffgffgffgffgf g",
        "gxgllllllllllllllllllllllllg@g",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "gxi                          g",
        "ggg                          g",
        "gwwwwwwwwwwwwwwwwwwwwwwwwwwwwg",
        "gwwwwwwwwwwwwwwwwwwwwwwwwwwwwg",
        "gwwwwwwwwwwwwwwwwwwwwwwwwwwwwg",
        "gwwwwwwwwwwwwwwwwwwwwwwwwwwwwg",
        "gwwwwwwwwwwwwwwwwwwwwwwwwwww@g",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                           @g",
        "g                         gggg",
        "g                        ggggg",
        "g                       gggggg",
        "gx     ig          e   ggggggg",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        
        "ggggggg^^ggggggggggg",
        ">        gg@    ,  g",
        ">c       gggggggg  g",
        "g>>>>>>>>gg     gg g",
        "g        gg'gggvgg'g",
        "g^^^^^^^ggg   g    g",
        "gi       gggg'gggggg",
        "g gllllg   i. g    g",
        "g'gggggggggggggggggg",
        "g                  g",
        "gggggggggg'ggggggggg",
        "g        gtg      cg",
        "g   c    g g<<<<<<<g",
        "g        gt> ggggggg",
        "g   c    g >c      g",
        "g        gtg>>>>>>>g",
        "g   c    g         g",
        "g        ggg<<<<<< g",
        "gxi c       i      g",
        "gggggggggggg>>>>>>gg",
        
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "gxi                         @g",
        "gggVVVVVVVVVVVVVVVVVVVVVVVVVgg",
    ],
    [
        "gggggggggggggggggggg",
        "g@                 g",
        "gVVVVVVVVVVVVVVVVV g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "gggggggggg  e      g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                  g",
        "g                 _g",
        "g              cg Vg",
        "gxi              -Vg",
        "ggglllllllllllllllVg",
    ],
    [
        "ggggggggggggggggggggggggggggggggggggggggg",
        "g                                       g",
        "g    tttt    tttt    tttt    tttt    tttg",
        "g                                       g",
        "g                                       g",
        "g     ttttt     ttttt     ttttt     ttttg",
        "g                                       g",
        "g                                       g",
        "g      tttttt      tttttt      tttttt   g",
        "g                                       g",
        "g                                       g",
        "g       tttttttt       ttttttt        ttg",
        "g                                       g",
        "g                                       g",
        "g        tttttttt        tttttttt       g",
        "g                                       g",
        "g                                       g",
        "g         ttttttttt         ttttttttt   g",
        "gxi                                    @g",
        "gggggggggggttttttttttggggggggggtttttttttg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "gx                           g",
        "ggVVVVVVVVVVVVVVVVVVVVVVVVVVvg",
        "glllllllllllllllllllllllllll g",
        "gg^^^^^^^^^^^^^^^^^^^^^^^^^^ g",
        "g                            g",
        "g                            g",
        "g lllllllllllllllllllllllllllg",
        "g ccc                        g",
        "g >>>>>>>>>>>>>>>>>>>>>>>>>> g",
        "g                  g         g",
        "g                  g <<<<<<<<g",
        "g                  g         g",
        "g                  g>>>>>>>> g",
        "g                            g",
        "g <<<<<<<<<<<<<<<<<<<<<<<<<<<g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g>>>>>>>>>>>>>>>>>>>>>>>>>>> g",
        "g                            g",
        "g <<<<<<<<<<<<<<<<<<<<<<<<<<<g",
        "g                            g",
        "g>>>>>>>>>>>>>>>>>>>>>>>>>>> g",
        "g                            g",
        "g <<<<<<<<<<<<<<<<<<<<<<<<<<<g",
        "g                            g",
        "g>>>>>>>>>>>>>>>>>>>>>>>>>>> g",
        "g@                           g",
        "gVVVVVVVVVVVVVVVVVVVVVVV gg<<g",
    ],
    [
        "gggggggggg",
        "gx  iggggg",
        "gg  gggggg",
        "g   gggggg",
        "g gg@    g",
        "g        g",
        "ggg      g",
        "ggg      g",
        "g ,e     g",
        "gggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "gx                           g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g tt ttt  tt    tt t t t  t tg",
        "g t    tt t tt t t tt ttt  t g",
        "g t t t  t  tt tt  t   tt  ttg",
        "gffffffffffffffffffffffffffffg",
        "g                            g",
        "g    t                       g",
        "g      ttt t t t t ft t      g",
        "g t    t                    fg",
        "g   f       t t    t  g    t g",
        "g  t  tfttt ttgt tt  t t   t g",
        "gt  t t  ttf tt ttt t ttvtt  g",
        "g t t t   t  t  t  t  t  t t@g",
        "g    t  t   tt tt t t  t tgggg",
        "g    t ttt ttt  t  t     ggggg",
        "g                       gggggg",
        "g                      ggggggg",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "gx        l        gt  gt  g@g",
        "ggg                gtg gtg   g",
        "g                  gtg gtg   g",
        "g  ssgg            gtg gtg  tg",
        "g         g   g  gggtg gtg   g",
        "g          sss ss  gtg gtg   g",
        "g  ggggll          gtg gtg   g",
        "g                  gtg gtg   g",
        "gwwwwwwwwwwwwwwwwwwgtg gtg   g",
        "g                  gtg gtg   g",
        "g g                gtg gtg   g",
        "gs ssg             gtg gtg   g",
        "g     sg           gtg gtg   g",
        "g       sg         gtg gtg   g",
        "g         sG       gtg gtg   g",
        "g           sG     gtg gtg   g",
        "g             sG  Ggtg gtg   g",
        "g                G gtg gtg   g",
        "g            GGGG  gtg gtg   g",
        "g         Gss      gtg gtg   g",
        "g      Gss         gtg gtg   g",
        "g   Gss            gtg gtg   g",
        "g                  gtg gtg   g",
        "gG                 gtg gtg   g",
        "g  g               gtg gtg   g",
        "g     g            gtg gtg   g",
        "g        g     g   gtg gtg   g",
        "g                   tg  tgsssg",
        "gGGGGGGGGGGGGGGGGGGGGgGGGgGGGg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g g                          g",
        "gxgllllllwwwlllllllllllllllg@g",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                            g",
        "g g  e                       g",
        "gxgllllllwwwlllllllllllllllg@g",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "gx                           g",
        "gtttttttttttttttttttttttttvvvg",
        "ggggggggggggggggggggggggggggwg",
        "g     tg  tg  tg  tg  tg  tg g",
        "g ggggtg gtg gtg gtg gtg gtg g",
        "g    gtg gtg gtg gtg gtg gtg g",
        "gggg gtg gtg gtg gtg gtg gtg g",
        "g    gtg gtg gtg gtg gtg gtg g",
        "g ggggtg gtg gtg gtg gtg gtg g",
        "g    gtg gtg gtg gtg gtg gtg g",
        "gggg gtg gtg gtg gtg gtg gtg g",
        "g    gtg gtg gtg gtg gtg gtg g",
        "g ggggtg gtg gtg gtg gtg gtg g",
        "g    gt  gt  gt  gt  gt  gt  g",
        "gggg ggggggggggggggggggggggggg",
        "ge   e   e   e   e   e   e   g",
        "gggggggggggggggggggggggggggg g",
        "g e   e   e   e   e   e   e  g",
        "g gggggggggggggggggggggggggggg",
        "g  e   e   e   e   e   e   e g",
        "gggggggggggggggggggggggggggg g",
        "ge   e   e   e   e   e   e   g",
        "g gggggggggggggggggggggggggggg",
        "gwwwwwwllwwwwwwllwwwwwwllwwwwg",
        "gwwwwwwllwwwwwwllwwwwwwllwwwwg",
        "gllllwwwwwwllwwllwwllwwllwwlwg",
        "gllllwwwwwwllwwwwwwllwwwwwwlwg",
        "gllllllllllllwwwwwwllwwwwwwl@g",
        "gggggggggggggggggggggggggggggg",
    ],
    [
        "gggggggggggggggggggggggggggggg",
        "g                           xg",
        "g                           gg",
        "g                          l g",
        "g                         w  g",
        "g                        f   g",
        "geeeeeeeeeeeeeeeeeeeeeeeeeeeeg",
        "gvllllllllllllllllllllllgllllg",
        "gwwwwwwwwwwwwwwwwwwwwwwwwwwwwg",
        "g                            g",
        "g                            g",
        "g                            g",
        "g                        wt  g",
        "g                       w    g",
        "g                            g",
        "gl ttl lt t lt    l t      ttg",
        "g                            g",
        "g ltlt   lt ll telt l l    l g",
        "g                            g",
        "ge ltll flt lt fef  ftledtelfg",
        "g                            g",
        "g                            g",
        "g               gggggggggggggg",
        "g               g            g",
        "gwwwwwwwwwwwwwwwg  ggggvgggggg",
        "g               g  g         g",
        "g               g  g   gggggvg",
        "g               g  g   g     g",
        "g               feeg   g    @g",
        "gggggggggggggggggggggggggggggg",
    ],
    [
    "gggggggggggggggggggggggggggggggggggggggggggggg",
    "g                                            g",
    "gx                                           g",
    "gggggg   stts                                g",
    "g               sst    GGGGG             g   g",
    "g                     sggggg             g   g",
    "g   llllllllllllllllllg     ggvgvgvgwlwwwg   g",
    "g   ggggggggggggggggggg      g g g gwwwlwg   g",
    "g                            gsgsgsgwlwwwg   g",
    "g                             g g ggwwwlwg   g",
    "g                                   llwwwg   g",
    "g         t   s  t   ggggggggggggggggwllwlg  g",
    "gvvgg                                        g",
    "g    gvvg                                    g",
    "g        ggvgvvgg                            g",
    "g                  tt   gg                   g",
    "gllg                        tt     GGGGGG    g",
    "gllg gllg                          ggggggvvvgg",
    "gggg gllg g    g                             g",
    "g    gggg gwwwwg                        gggvvg",
    "g         gssssg              stv  t ggg     g",
    "g         gggggg        tstss                g",
    "g                       gllllllllllllllllllllg",
    "g                   gggggggggggggggggggggggggg",
    "gvvvvggggggggggggggggwwwwwwwwwwwwllllwwwwwwwlg",
    "gwwwwwwwwlllllwwwwwwwwwwwwwwlllwwwwwwwlllllwwg",   
    "gwwwllwwwlllllwwwlllwwllllllllllllllllllllllwg",
    "gllllllwwwwwwwwwwlllwwwwwwwwwwwwwwwwwwwwwwww@g",
    "gggggggggggggggggggggggggggggggggggggggggggggg",
        ],
    [
        "gggggggggggggggggggggggggggggggggggggg",
        "gx                                   g",
        "gGVVVVVV                             g",
        "g          stts          llG         g",
        "gllllllllllllllll sst   sllg  s      g",
        "gsssssssssssssssllllll  gvgvvgv swwlwg",
        "g               ssssslllllllllllswwwwg",
        "g@                   sssssssssssswwwwg",
        "gG                   gg         slwwlg",
        "g   g                           slwwlg",
        "g      g                        s    g",
        "gt       geeeeeeee              s    g",
        "g                  s  st        s    g",
        "g gggggggggg       s  st        s    g",
        "g ^                s  st        s    g",
        "g  ^               s  st        s    g",
        "gt  ^^^^^^^^^^^^^  s  st        s    g",
        "gt                    stlll          g",
        "glllllllllllllllll     slllg         g",
        "gggggggggggggggggggggggggggggggggggggg",
    ],
];
var collide = function(obj1, obj2) {
        return obj1.y+obj1.h>obj2.y&&obj1.x+obj1.w>obj2.x&&obj1.x<obj2.x+obj2.w&&obj1.y<obj2.y+obj2.h;
    };
var gi=function(x1,y1,x2,y2,col){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.col=col;
    this.timer=0;
};
gi.prototype.draw= function() {
    stroke(this.col);
    line(this.x1,this.y1,this.x2,this.y2);
    if(this.timer>60){
        introv.splice(this,1);
    }
    this.timer++;
};

var block=function(x,y,type){
    this.type=type;
    this.x=x;
    this.y=y;
    this.w=30;
    this.h=30;
};
block.prototype.draw= function() {
    rectMode(CORNER);
    noStroke();
    switch(this.type){
        case "ground":
            image(graphics[4],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=true;
            this.rightc=true;
            this.topc=true;
            this.bottomc=true;
            break;
        case "left":
            image(graphics[27],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=true;
            this.rightc=true;
            this.topc=true;
            this.bottomc=true;
            break;
        case "right":
            image(graphics[26],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=true;
            this.rightc=true;
            this.topc=true;
            this.bottomc=true;
            break;
        case "up":
            image(graphics[28],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=true;
            this.rightc=true;
            this.topc=true;
            this.bottomc=true;
            break;
        case ".":
            image(graphics[29],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=false;
            this.rightc=true;
            this.topc=true;
            this.bottomc=true;
            break;
        case ",":
            image(graphics[30],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=true;
            this.rightc=false;
            this.topc=true;
            this.bottomc=true;
            break;
        case "'":
            image(graphics[32],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=true;
            this.rightc=true;
            this.topc=true;
            this.bottomc=false;
            break;
        case "v":
            image(graphics[31],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=true;
            this.rightc=true;
            this.topc=false;
            this.bottomc=true;
            break;
        case "grass":
            image(graphics[4],this.x,this.y,this.w,this.h);
            image(graphics[11],this.x,this.y-this.h/5,this.w/2,this.h/5);
            image(graphics[18],this.x+this.w/2,this.y-this.h/5,this.w/2,this.h/5);
            this.damage=0;
            this.leftc=true;
            this.rightc=true;
            this.topc=true;
            this.bottomc=true;
            break;
        case "lava":
            image(graphics[5+floor(frameCount%12/4)],this.x,this.y,this.w,this.h);
    this.damage=5;
    this.leftc=false;
            this.rightc=false;
            this.topc=false;
            this.bottomc=false;
            break;
        case "water":
            image(graphics[8+floor(frameCount%12/4)],this.x,this.y,this.w,this.h);
    this.damage=0;
    this.leftc=false;
            this.rightc=false;
            this.topc=false;
            this.bottomc=false;
            break;
        case "air":
            this.leftc=false;
            this.rightc=false;
            this.topc=false;
            this.bottomc=false;
            break;
        case "fake":
            image(graphics[25],this.x,this.y,this.w,this.h);
            this.damage=0;
            this.leftc=false;
            this.rightc=false;
            this.topc=false;
            this.bottomc=false;
            break;
    }
};
block.prototype.operate=function(){
    if(this.type==="up"&&player.x+player.w>=this.x&&player.y+player.h>=this.y+2&&player.x<=this.x+this.w+2&&player.y<=this.y+this.h*3){
            player.y=this.y+this.h;
        }
    
    if(collide(player,this)){
        if(this.type==="water"||this.type==="lava"){
            player.swimming=true;
            if(this.type==="lava"){
                player.health-=5;
            }
        }
        else{
            player.swimming=false;
        }
        
        
        if (player.y+player.h>=this.y&&player.y+player.h<=this.y+this.h/2&&this.topc){
            
        if(this.type==="grass"){
            player.onGrass=true;
            player.y=(this.y-player.h);
        }
        else if(this.type==="left"){
            player.x-=3;
            player.y=(this.y-player.h)-1;
            //trans+=3;
        }
        else if(this.type==="right"){
            player.x+=3;
            player.y=(this.y-player.h)-1;
            //trans-=3;
        }
        else{
        player.onGrass=false;
        }
            player.y=(this.y-player.h)-1;
            
        
        player.onGround=true;
        //player.grav=0;
        player.canMoveRight=true;
        player.canMoveLeft=true;
                
    }
    else if (player.y<=this.y+this.h&&player.y>=this.y+this.h/2&&this.bottomc){
        if(this.type==="left"){
            player.x-=2;
            player.y=(this.y+this.h)+1;
            //trans+=2;
        }
        else if(this.type==="right"){
            player.x+=2;
            player.y=(this.y+this.h)+1;
            //trans-=2;
        }
        player.onGround=false;
        player.grav=0;
        player.jumping=false;
        player.canMoveRight=true;
        player.canMoveLeft=true;
        player.jumpTimer=60;
        player.y=this.y+this.h+1;
    }
    else if(player.x+player.w>=this.x&&player.x+player.w<=this.x+this.w/2&&this.leftc===true){
        player.x=(this.x-player.w-1);
        player.canMoveRight=false;
        player.canMoveLeft=true;
        //player.speed=0;
        keys[RIGHT]=false;
    }
    else if(player.x<=this.x+this.w&&player.x>=this.x+this.w/2&&this.rightc===true){
        player.x=this.x+this.w+1;
        player.canMoveRight=true;
        player.canMoveLeft=false;
        //player.speed=0;
        keys[LEFT]=false;
    }
    else{
        player.canMoveLeft=true;
        player.canMoveRight=true;
        player.onGround=false;
    }
    
    
    
    if(this.type!=="grass"){
        player.onGrass=false;
    }
    }
    else{
        player.canMoveLeft=true;
        player.canMoveRight=true;
    }
    for(var i in crates){
        var c=crates[i];
        if(this.type==="up"&&c.x+c.w>=this.x&&c.y+c.h>=this.y&&c.x<=this.x+this.w&&c.y<=this.y+this.h*3){
            crates[i].grav=-5;
            crates.onGround=false;
        }
        if(collide(c,this)){
            if (c.y+c.h>=this.y&&c.y+c.h<=this.y+this.h/2&&this.topc===true){
            
        if(this.type==="grass"){
            
            crates[i].y=(this.y-c.h)-1;
        }
        else if(this.type==="left"){
            crates[i].x-=2;
            crates[i].y=(this.y-c.h);
        }
        else if(this.type==="right"){
            crates[i].x+=2;
            crates[i].y=(this.y-c.h);
        }
        else{
            crates[i].y=(this.y-c.h)-1;
            
        }
        crates[i].onGround=true;
        
                
    }
    else if (c.y<=this.y+this.h&&c.y>=this.y+this.h/2&&this.bottomc===true){
        if(this.type==="left"){
            crates[i].x-=2;
            crates[i].y=(this.y+this.h+1);
        }
        else if(this.type==="right"){
            crates[i].x+=2;
            crates[i].y=(this.y+this.h+1);
        }
        crates[i].onGround=false;
        
        crates[i].y=this.y+this.h+1;
    }
    else if(c.x+c.w>=this.x&&c.x+c.w<=this.x+this.w/2&&this.leftc===true){
        if(this.type==="left"){
            crates[i].x-=2;
            
        }
        //crates[i].onGround=false;
        crates[i].x=(this.x-c.w)-1;
        crates[i].speed=0;
    }
    else if(c.x<=this.x+this.w&&c.x>=this.x+this.w/2&&this.rightc===true){
        if(this.type==="right"){
            crates[i].x+=2;
            
        }
        //crates[i].onGround=false;
        crates[i].x=this.x+this.w+1;
        crates[i].speed=0;
    }
    else{
        crates[i].onGround=false;
    }
        }
        
    }
    
    
    health-=this.damage;
};
var enemy=function(x,y){
    
    this.x=x;
    this.y=y;
    this.w=30;
    this.h=29;
    this.speed=3;
    
};
enemy.prototype.draw= function() {
    
        var e=this;
    if(e.speed<0){
        image(graphics[21],e.x,e.y,e.w,e.h);
    }
    else if(e.speed>0){
        image(graphics[22],e.x,e.y,e.w,e.h);
    }
    e.x+=e.speed;
    
};
var sands=[];
var sand=function(x,y){
    this.x=x;
    this.y=y;
    this.h=30;
    this.w=30;
    this.timer=15;
};
sand.prototype.draw= function() {
    //tint(255,255,255,255);
    image(graphics[24],this.x,this.y,this.w,this.h);
    //noTint();
};
sand.prototype.operate=function(){
    
};

var platform=function(x,y,tp){
    this.x=x;
    this.y=y;
    this.w=29;
    this.h=15;
    this.hSpeed=2;
    this.vSpeed=2;
    this.tp=tp;
};
platform.prototype.draw= function() {
    image(graphics[20],this.x,this.y,this.w,this.h*2/5);
};
platform.prototype.operate=function(){
    if(collide(player,this)){
        
        
        if (player.y+player.h>=this.y&&player.y+player.h<this.y+this.h/2){
            
        
            player.y=(this.y-player.h)-1;
            player.onGrass=false;
        
        player.onGround=true;
        /*if(this.tp==="H"){
            player.x+=this.hSpeed;
        }**/
        if(this.tp==="V"){
            player.grav=this.vSpeed;
        }
                
    }
    else if (player.y<=this.y+this.h&&player.y>this.y+this.h/2){
        player.onGround=true;
        player.grav=0;
        player.jumping=false;
        player.jumpTimer=60;
        player.y=this.y-player.h-1;
    }
    else{
        player.canMoveLeft=true;
        player.canMoveRight=true;
        player.onGround=false;
    }
    
    
    
    }
    else{
        player.canMoveLeft=true;
        player.canMoveRight=true;
    }
    if(this.tp==="H"){
        this.x+=this.hSpeed;
    }
    else if(this.tp==="V"){
        this.y+=this.vSpeed;
    }
};
var crate=function(x,y){
    this.x=x;
    this.y=y;
    this.h=30;
    this.w=28;
    this.grav=0;
    this.onGround=false;
    this.speed=0;
};
crate.prototype.draw= function() {
    image(graphics[23],this.x,this.y,this.w,this.h);
};
crate.prototype.operate=function(){
    if(collide(player,this)){
        
        
        if (player.y+player.h>=this.y&&player.y+player.h<this.y+this.h/2){
            
        
            player.y=constrain(player.y,0,this.y-player.h+1);
            player.onGrass=false;
        
        player.onGround=true;
        player.grav=0;
                
    }
    else if (player.y<=this.y+this.h&&player.y>this.y+this.h/2){
        this.onGround=true;
        this.grav=0;
        //player.onGround=false;
        //player.grav=0;
        //player.jumping=false;
        //player.jumpTimer=60;
        this.y=constrain(this.y,0,player.y-this.h+1);
    }
    else if(player.x+player.w>this.x&&player.x+player.w<this.x+this.w/2){
        player.x=(this.x-player.w);
        this.speed=player.speed;
    }
    else if(player.x<this.x+this.w&&player.x>this.x+this.w/2){
        player.x=this.x+this.w;
        this.speed=player.speed;
    }
    }
    
    if(this.onGround===false&&this.grav<9){
        this.grav+=0.4;
    }
    
    this.y+=this.grav;
    this.x+=this.speed;
    if(this.speed>0){
        this.speed--;
    }
    else if(this.speed<0){
        this.speed++;
    }
};
var squas=[];
var ready=true;
var Background2=function(){
    background(0, 217, 255);
    //for(var j=0;j<height;j+=70){
    //for(var i=0;i<width;i+=30){
    image(graphics[0],500,0,100,100);
    //}
    //}
};
var spike=function(x,y){
    this.x=x;
    this.y=y;
    this.w=30;
    this.h=30;
};
spike.prototype.draw= function() {
    image(graphics[12],this.x,this.y,this.w,this.h);
};
spike.prototype.operate=function(){
    if(collide(player,this)){
        player.grav=-6;
        player.health-=20;
    }
};
var tramp=function(x,y){
    this.x=x;
    this.y=y;
    this.w=30;
    this.h=30;
};
tramp.prototype.draw= function() {
    image(graphics[19],this.x,this.y,this.w,this.h*2/5);
};
tramp.prototype.operate= function() {
    if(collide(player,this)){
        player.grav=-8;
    }
};
var portal=function(x,y){
    this.x=x;
    this.y=y;
    this.w=30;
    this.h=30;
};
portal.prototype.draw= function() {
    image(graphics[33],this.x,this.y,this.w,this.h);
};
var testLevel={
    q:[],
blocks:[],
enemies:[],
sands:[],
crates:[],
platforms:[],
};//blocks enemies sands crates platforms
var createLevel=function(array){
var x=0;
    var y=0;
    var p=0;
    for (var i=0;i< array.length;i++){
        
        for(var j=0;j< array[i].length;j++){
            
            var b=array[i][j];
            if(array.length*array[i].length>blockNum){
                    switch(b){
                case "l":
                    currLevel.blocks.push(new block(x,y,"lava"));
                    break;
                case "g":
                    currLevel.blocks.push(new block(x,y,"ground"));
                    break;
                case "f":
                    currLevel.blocks.push(new block(x,y,"fake"));
                    break;
                case "v":
                    currLevel.blocks.push(new block(x,y,"v"));
                    break;
                case "u":
                    currLevel.blocks.push(new block(x,y,"unuse1"));
                    break;
                case "U":
                    currLevel.blocks.push(new block(x,y,"unuse2"));
                    break;
                case "'":
                    currLevel.blocks.push(new block(x,y,"'"));
                    break;
                case "<":
                    currLevel.blocks.push(new block(x,y,"left"));
                    break;
                case ">":
                    currLevel.blocks.push(new block(x,y,"right"));
                    break;
                case "^":
                    currLevel.blocks.push(new block(x,y,"up"));
                    break;
                case ",":
                    currLevel.blocks.push(new block(x,y,","));
                    break;
                case ".":
                    currLevel.blocks.push(new block(x,y,"."));
                    break;
                
                case "G":
                    currLevel.blocks.push(new block(x,y,"grass"));
                    break;
                case "w":
                    currLevel.blocks.push(new block(x,y,"water"));
                    break;
                case "s":
                    currLevel.blocks.push(new spike(x,y));
                    break;
                case " ":
                    currLevel.blocks.push(new block(x,y,"air"));
                    break;
                case "e":
                    enemies.push(new enemy(x,y));
                    currLevel.blocks.push(new block(x,y,"air"));
                    break;
                case "L":
                    enemies.push(new enemy(x,y));
                    currLevel.blocks.push(new block(x,y,"lava"));
                    break;
                case "F":
                    enemies.push(new enemy(x,y));
                    currLevel.blocks.push(new block(x,y,"fake"));
                    break;
                case "V":
                    sands.push(new sand(x,y));
                    currLevel.blocks.push(new block(x,y,"air"));
                    break;
                case "W":
                    enemies.push(new enemy(x,y));
                    currLevel.blocks.push(new block(x,y,"water"));
                    break;
                case "T":
                    enemies.push(new enemy(x,y));
                    currLevel.blocks.push(new tramp(x,y));
                    break;
                case "t":
                    currLevel.blocks.push(new tramp(x,y));
                    break;
                case "@":
                    currLevel.blocks.push(new portal(x,y));
                    break;
                case "x":
                    player.rex=x+1;
                    player.rey=y-1;
                    player.x=x+1;
                    player.y=y-1;
                    currLevel.blocks.push(new block(x,y,"air"));
                    break;
                case "X":
                    player.rex=x+1;
                    player.rey=y-1;
                    player.x=x+1;
                    player.y=y-1;
                    currLevel.blocks.push(new block(x,y,"unuse2"));
                    break;
                case "c":
                    crates.push(new crate(x,y));
                    currLevel.blocks.push(new block(x,y,"air"));
                    break;
                case "-":
                    platforms.push(new platform(x,y,"H"));
                    currLevel.blocks.push(new block(x,y,"air"));
                    break;
                case "_":
                    platforms.push(new platform(x,y,"V"));
                    currLevel.blocks.push(new block(x,y,"air"));
                    break;
            }
           x+=30;
           blockNum++;
           p++;
            }
        }
        x=0;
        y+=30;
        p+=10;
    }
    //currLevel.message=messages[level];
};
portal.prototype.operate= function() {
    if(collide(player,this)){
        if(scene==="game"){
        level++;
        levelStart=true;
        player.health=100;
        createLevel(levels[level]);
        blockNum=0;
        player.grav=0;
        crates=[];
        sands=[];
        platforms=[];
        currLevel.blocks=[];
        enemies=[];
        }
        else{
           scene="create"; 
        }
    }
};
var userLevel=function(name,creator,array){
    messages[levels.length]=[name,"by "+creator];
    levels.push(array);
    
};
}//Vars
{
    var load=function(){
    if(art.length!==(graphics.length+letters.length+numbers.length+symbols.length)){
    createArt(num);
    num++;
    }
    else{
        finished=true;
    }
    background(150, 157, 255);
    fill(0,255,0);
    rectMode(CORNER);
    rect(200,400,num*200/art.length,40);
    if(finished){
        scene="menu";
    }
    else{
        stroke(0);
        noFill();
        strokeWeight(10);
        arc(300,250,100,100,N-20,N+20);
        arc(300,250,100,100,N-(360/3)-20,N-(360/3)+20);
        arc(300,250,100,100,N-(360*2/3)-20,N-(360*2/3)+20);
            N+=2;
            noStroke();
    }
};
var menu=function(){
    Background2();
    Text("BLOCK HOP",120,134,40);
    Text("retro",205,194,40);
    Text("play",40,545,20);
    Text("create",450,545,20);
    image(graphics[1],250,250,100,100);
};
var q=0;
var howTo= function(){
    
    noStroke();
    
    Background2();
    textSize(20);
    //Display stuff
    //rectMode(CORNER);
    //button(40,25,80,50,21,"menu","< Back","howTo");
    {
    pushMatrix();
    if(keys[ENTER]){
        scene="create";
    }
    //q=constrain(q,-980,0);
    /*if(keys[32]){
        println(q);
    }*/
    //translate(0,q);
    fill(0);
    textSize(60);
    textAlign(LEFT,TOP);
    Text("How To use",50,18,25);
    Text("the level creator",50,45,25);
    textSize(40);
    Text("Click on a box on the grid to place", 50,100,15);
    Text("a block of the type selected.Click", 50,125,15);
    Text("on the sidebar to change your", 50,150,15);
    Text("selection.The first one is ground,", 50,175,15);
    Text("the one that looks like it is fake.", 50,200,15);
    Text("press space to get your code,edit", 50,225,15);
    Text("the creator and name,and post it in", 50,250,15);
    Text("the Tips and thanks to have it", 50,275,15);
    Text("added to the game.", 50,300,15);
    Text("Enter to return", 220,350,10);
    popMatrix();
    }
};
var L=[];
for(var i=0;i<55;i++){
    L.push([]);
    for(var j=0;j<55;j++){
        L[i].push(-1);
    }
}
var keyc="glwGsxt_ecVf><^.,v'@";
keyc=keyc.split("");
keyc[-1]=" ";
var s=0;
var st=true;
var create=function(){
    stroke(0);
    strokeWeight(1);
    background(255);
    var pics=[];
    for(var i=4;i<graphics.length;i===5?i+=3:i===8?i+=3:i===13?i+=6:i===20?i+=2:i++){
        pics.push(i);
    }
    for(var i=0;i<pics.length;i++){
        rect(0,i*27+50,25,25);
        if(graphics[pics[i]].width===graphics[pics[i]].height){
        image(graphics[pics[i]],0,i*27+50,25,25);
        }
        else{
        image(graphics[pics[i]],0,i*27+50+15,25,10);    
        }
        
    }
    for(var i=0;i<L.length;i++){
        for(var j=0;j<L[i].length;j++){
            if(L[i][j]===-1){
                noFill();
                rect(i*10+30,j*10+30,10,10);
            }
            else{
                image(graphics[pics[L[i][j]]],i*10+30,j*10+30+(graphics[pics[L[i][j]]].width===graphics[pics[L[i][j]]].height?0:8),10,graphics[pics[L[i][j]]].width===graphics[pics[L[i][j]]].height?10:4);
            }
        }
    }
    Text("selected:",250,5,20);
    image(graphics[pics[s]],450,5,20,20);
    rect(520,0,80,30);
    Text("test",530,7,15);
    rect(0,0,80,30);
    Text("back",10,7,15);
    rect(120,0,80,30);
    Text("how",140,7,15);
    if(mouseIsPressed&&mouseX<25&&mouseY>50){
        s=floor((mouseY-25)/27)-1;
    }
    else if(mouseIsPressed&&mouseX>30&&mouseY>30&&mouseX<580&&mouseY<580){
        if(mouseButton===LEFT){
        L[floor((mouseX-30)/10)][floor((mouseY-30)/10)]=s;
        }
        else{
        L[floor((mouseX-30)/10)][floor((mouseY-30)/10)]=-1;    
        }
    }
    else if(mouseIsPressed&&mouseX>520&&mouseY<30){
        scene="test";
        st=true;
    }
    else if(mouseIsPressed&&mouseX<80&&mouseY<30){
        scene="menu";
        st=true;
    }
    else if(mouseIsPressed&&mouseX>120&&mouseX<200&&mouseY<30){
        scene="how";
        st=true;
    }
    if(keys[32]){
        println("userLevel('name','creator',[");
        for(var i=0;i<L.length;i++){
            print("'");
        //testLevel.q[i]=[];
        for(var j=0;j<L[i].length;j++){
            if(L[j][i]===3){
            }
            else if(L[j][i-1]===3){
                print("G");
            }
            else{
            print(keyc[L[j][i]]);
            }
            //print(",");
        }
        print("',\n");
    }
    println("]);");
    }
};

var trans=0;
var transy=0;
var test=function(){
    noTint();
    Background2();   
    pushMatrix();
    //scale(2);
    trans=-player.x+300;
    transy=-player.y+300;
    player.x=constrain(player.x,30,testLevel.q.length*30);
    translate(trans,transy);
if(st===true){
    for(var i=0;i<L.length;i++){
        testLevel.q[i]=[];
        for(var j=0;j<L[i].length;j++){
            if(L[j][i]===3){
                testLevel.q[i][j+1]="G";
                testLevel.q[i][j]=" ";
            }
            else if(L[j][i-1]===3){
                testLevel.q[i][j]="G";
            }
            else{
            testLevel.q[i][j]=keyc[L[j][i]];
            }
        }
    }
    //println(L);
    //println(testLevel.q);
        player.x=player.rex;
        player.y=player.rey;
        createLevel(testLevel.q);
        player.health=100;
        player.grav=0;
        st=false;
        trans=0;
        transy=0;
        
    }
else{
        createLevel(testLevel.q);

    if(player.health<=0||player.y>=testLevel.q.length*30){
        st=true;
        player.health=100;
        currLevel.blocks=[];
        enemies=[];
        crates=[];
        sands=[];
        platforms=[];
        blockNum=0;
    }
for(var i=0;i<enemies.length;i++){
        var e=enemies[i];
        e.draw();
    if(collide(player,e)){
        player.health-=2;
    }
    else if(dist(player.x,player.y+player.h,player.x,e.y)<=player.grav+1&&player.x>e.x-player.w&&player.x<e.x+e.w){
        player.grav=-8;
        enemies.splice(i,1);
    }
    else if(e.x<0-e.w){
        enemies.splice(i,1);
    }
    }
    for (var i=0;i< currLevel.blocks.length;i++){
            var b=currLevel.blocks[i];
            for(var j=0;j<enemies.length;j++){
                var e=enemies[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)&&b.leftc){
                enemies[j].speed=-3;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)&&b.rightc){
                enemies[j].speed=3;    
                }
                
            }
            for(var j=0;j<platforms.length;j++){
                var e=platforms[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)&&b.leftc){
                platforms[j].hSpeed=-4;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)&&b.rightc){
                platforms[j].hSpeed=4;    
                }
                if(e.x+e.w>=b.x&&e.x<b.x+b.w&&e.y>=b.y-e.h&&e.y+e.h<b.y+b.h/2&&b.topc){
                platforms[j].vSpeed=-4;    
                }
                else if(e.x+e.w>=b.x&&e.x<b.x+b.w&&e.y>=b.y+b.h/2&&e.y<b.y+b.h+e.h&&b.bottomc){
                platforms[j].vSpeed=4;    
                }
            }
            b.operate();
            b.draw();
    }
    
    for (var i=0;i<crates.length;i++){
        var b=crates[i];
        for(var j=0;j<enemies.length;j++){
                var e=enemies[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                enemies[j].speed=-3;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                enemies[j].speed=3;    
                }
                
            }
        crates[i].draw();
        crates[i].operate();
    }
for(var i=0;i<crates.length;i++){
        var c=crates[i];
        for(var j=0;j<crates.length;j++){
            var t=crates[j];
        if(i!==j){
            if (c.y+c.h/2>=t.y-c.h/2&&c.y+c.h/2<t.y+t.h/2-c.h/2&&c.x+c.w/2>t.x-c.w/2&&c.x+c.w/2<t.x+t.w/2+c.w/2){
            
        
            crates[i].y=(t.y-c.h)-1;
            
        
        crates[i].onGround=true;
        //this.grav=0;
                
    }
    else if (c.y+c.h/2<=t.y+t.h+c.h/2&&c.y+c.h/2>t.y+t.h/2+c.h/2&&c.x+c.w/2>t.x-c.w/2&&c.x+c.w/2<t.x+t.w+c.w/2){
        
        //crates[i].onGround=true;
        //crates[i].grav=0;
        crates[j].y=c.y-c.h-1;
        //crates[i].speed=0;
        crates[j].onGround=true;
    }
    else if(((c.x+c.w/2)>=t.x-c.w/2&&c.x+c.w/2<t.x+t.w/2-c.w/2&&c.y+c.h/2>=t.y-c.h/2&&(c.y+c.h/2)<=(t.y+t.h+c.h/2))){
        //crates[i].onGround=false;
        crates[i].x=(t.x-c.w)-1;
        crates[i].speed=0;
        
    }
    else if((c.x+c.w/2)<=t.x+t.w+c.w/2&&c.x+c.w/2>t.x+t.w/2+c.w/2&&c.y+c.h/2>=t.y-c.h&&(c.y+c.h/2)<=(t.y+t.h+c.h/2)){
        //crates[i].onGround=false;
        crates[i].x=t.x+t.w+1;
        crates[i].speed=0;
        
    }
    }
        }
    }
    for (var i=0;i< sands.length;i++){
            var b=sands[i];
            for(var j=0;j<enemies.length;j++){
                var e=enemies[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                enemies[j].speed=-3;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                enemies[j].speed=3;    
                }
                
            }
            for(var j=0;j<platforms.length;j++){
                var e=platforms[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                platforms[j].hSpeed=-3;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                platforms[j].hSpeed=3;    
                }
                if(e.x+e.w>=b.x&&e.x<b.x+b.w&&e.y>=b.y-e.h&&e.y+e.h<b.y+b.h/2){
                platforms[j].vSpeed=-3;    
                }
                else if(e.x+e.w>=b.x&&e.x<b.x+b.w&&e.y>=b.y+b.h/2&&e.y<b.y+b.h+e.h){
                platforms[j].vSpeed=3;    
                }
            }
            //b.operate();
            b.draw();
            if(collide(player,b)){
        
        
        if (player.y+player.h>=b.y&&player.y+player.h<b.y+b.h/2){
            
        
            player.y=(b.y-player.h);
            player.onGrass=false;
        
        player.onGround=true;
        sands[i].timer-=2;
                
    }
    else if (player.y<=b.y+b.h&&player.y>b.y+b.h/2){
        player.onGround=false;
        player.grav=0;
        player.jumping=false;
        player.jumpTimer=60;
        player.y=b.y+b.h+1;
    }
    else if(player.x+player.w>b.x&&player.x+player.w<b.x+b.w/2){
        player.x=(b.x-player.w)-1;
    }
    else if(player.x<b.x+b.w&&player.x>b.x+b.w/2){
        player.x=b.x+b.w+1;
    }
    }
            if(b.timer<0){
                sands.splice(i,1);
            }
    }
    for(var i=0;i<platforms.length;i++){
        platforms[i].draw();
        platforms[i].operate();
    }
    player.draw();
var t=0;
popMatrix();
    fill(34, 255, 0);
    rect(30,2,player.health/1.5,15);
    fill(255, 0, 0,200);
    textAlign(CENTER,CENTER);
    textSize(40);
    Text("enter to return to create",50,100,20);
    fill(30, 65, 235,200);
    textAlign(RIGHT,TOP);
    Text("Level "+(level+1)+"/"+levels.length,300,35);
    Text(speed()+" fps",35,35,10);
    fill(0,0,0,200);
    textSize(15);
if(keys[82]){
        st=true;
        currLevel.blocks=[];
        enemies=[];
        crates=[];
        sands=[];
        platforms=[];

        blockNum=0;
        createLevel(testLevel.q);
    }
    if(keys[ENTER]){
        st=true;
        scene="create";
    }
    //println(player.speedf);
}
};

var game=function(){
    noTint();
    Background2();   
    pushMatrix();
    //scale(2);
    trans=-player.x+300;
    transy=-player.y+300;
    trans=constrain(trans,-(levels[level][0].length-20)*30,0);
    transy=constrain(transy,-(levels[level].length-20)*30,0);
    //player.x=constrain(player.x,30,levels[level][0].length*30);

    if(levels[level].length===10||levels[level][0].length===10){
        //translate(trans,transy);
        scale(2);
        
    }
    else{
    translate(trans,transy);
    }
if(levelStart===true){
        player.x=player.rex;
        player.y=player.rey;
        createLevel(levels[level]);
        player.health=100;
        player.grav=0;
        levelStart=false;
        trans=0;
        transy=0;
        
    }
else{
        createLevel(levels[level]);

    if(player.health<=0||player.y>=levels[level].length*30){
        levelStart=true;
        player.health=100;
        currLevel.blocks=[];
        enemies=[];
        crates=[];
        sands=[];
        platforms=[];
        blockNum=0;
    }
for(var i=0;i<enemies.length;i++){
        var e=enemies[i];
        e.draw();
    if(collide(player,e)){
        player.health-=2;
    }
    else if(dist(player.x,player.y+player.h,player.x,e.y)<=player.grav+1&&player.x>e.x-player.w&&player.x<e.x+e.w){
        player.grav=-8;
        enemies.splice(i,1);
    }
    else if(e.x<0-e.w){
        enemies.splice(i,1);
    }
    }
    for (var i=0;i< currLevel.blocks.length;i++){
            var b=currLevel.blocks[i];
            for(var j=0;j<enemies.length;j++){
                var e=enemies[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)&&b.leftc){
                enemies[j].speed=-3;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)&&b.rightc){
                enemies[j].speed=3;    
                }
                
            }
            for(var j=0;j<platforms.length;j++){
                var e=platforms[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)&&b.leftc){
                platforms[j].hSpeed=-4;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)&&b.rightc){
                platforms[j].hSpeed=4;    
                }
                if(e.x+e.w>=b.x&&e.x<b.x+b.w&&e.y>=b.y-e.h&&e.y+e.h<b.y+b.h/2&&b.topc){
                platforms[j].vSpeed=-4;    
                }
                else if(e.x+e.w>=b.x&&e.x<b.x+b.w&&e.y>=b.y+b.h/2&&e.y<b.y+b.h+e.h&&b.bottomc){
                platforms[j].vSpeed=4;    
                }
            }
            b.operate();
            b.draw();
    }
    
    for (var i=0;i<crates.length;i++){
        var b=crates[i];
        for(var j=0;j<enemies.length;j++){
                var e=enemies[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                enemies[j].speed=-3;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                enemies[j].speed=3;    
                }
                
            }
        crates[i].draw();
        crates[i].operate();
    }
for(var i=0;i<crates.length;i++){
        var c=crates[i];
        for(var j=0;j<crates.length;j++){
            var t=crates[j];
        if(i!==j){
            if (c.y+c.h/2>=t.y-c.h/2&&c.y+c.h/2<t.y+t.h/2-c.h/2&&c.x+c.w/2>t.x-c.w/2&&c.x+c.w/2<t.x+t.w/2+c.w/2){
            
        
            crates[i].y=(t.y-c.h)-1;
            
        
        crates[i].onGround=true;
        //this.grav=0;
                
    }
    else if (c.y+c.h/2<=t.y+t.h+c.h/2&&c.y+c.h/2>t.y+t.h/2+c.h/2&&c.x+c.w/2>t.x-c.w/2&&c.x+c.w/2<t.x+t.w+c.w/2){
        
        //crates[i].onGround=true;
        //crates[i].grav=0;
        crates[j].y=c.y-c.h-1;
        //crates[i].speed=0;
        crates[j].onGround=true;
    }
    else if(((c.x+c.w/2)>=t.x-c.w/2&&c.x+c.w/2<t.x+t.w/2-c.w/2&&c.y+c.h/2>=t.y-c.h/2&&(c.y+c.h/2)<=(t.y+t.h+c.h/2))){
        //crates[i].onGround=false;
        crates[i].x=(t.x-c.w)-1;
        crates[i].speed=0;
        
    }
    else if((c.x+c.w/2)<=t.x+t.w+c.w/2&&c.x+c.w/2>t.x+t.w/2+c.w/2&&c.y+c.h/2>=t.y-c.h&&(c.y+c.h/2)<=(t.y+t.h+c.h/2)){
        //crates[i].onGround=false;
        crates[i].x=t.x+t.w+1;
        crates[i].speed=0;
        
    }
    }
        }
    }
    for (var i=0;i< sands.length;i++){
            var b=sands[i];
            for(var j=0;j<enemies.length;j++){
                var e=enemies[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                enemies[j].speed=-3;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                enemies[j].speed=3;    
                }
                
            }
            for(var j=0;j<platforms.length;j++){
                var e=platforms[j];
                
                
                if((e.x+e.w)>=b.x&&e.x<b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                platforms[j].hSpeed=-3;    
                }
                else if((e.x)<=b.x+b.w&&e.x>b.x+b.w/2&&e.y>=b.y&&(e.y+e.h)<=(b.y+b.h)){
                platforms[j].hSpeed=3;    
                }
                if(e.x+e.w>=b.x&&e.x<b.x+b.w&&e.y>=b.y-e.h&&e.y+e.h<b.y+b.h/2){
                platforms[j].vSpeed=-3;    
                }
                else if(e.x+e.w>=b.x&&e.x<b.x+b.w&&e.y>=b.y+b.h/2&&e.y<b.y+b.h+e.h){
                platforms[j].vSpeed=3;    
                }
            }
            //b.operate();
            b.draw();
            if(collide(player,b)){
        
        
        if (player.y+player.h>=b.y&&player.y+player.h<b.y+b.h/2){
            
        
            player.y=(b.y-player.h);
            player.onGrass=false;
        
        player.onGround=true;
        sands[i].timer-=2;
                
    }
    else if (player.y<=b.y+b.h&&player.y>b.y+b.h/2){
        player.onGround=false;
        player.grav=0;
        player.jumping=false;
        player.jumpTimer=60;
        player.y=b.y+b.h+1;
    }
    else if(player.x+player.w>b.x&&player.x+player.w<b.x+b.w/2){
        player.x=(b.x-player.w)-1;
    }
    else if(player.x<b.x+b.w&&player.x>b.x+b.w/2){
        player.x=b.x+b.w+1;
    }
    }
            if(b.timer<0){
                sands.splice(i,1);
            }
    }
    for(var i=0;i<platforms.length;i++){
        platforms[i].draw();
        platforms[i].operate();
    }
    player.draw();
var t=0;
popMatrix();
    fill(34, 255, 0);
    rect(30,2,player.health/1.5,15);
    fill(255, 0, 0,200);
    textAlign(CENTER,CENTER);
    textSize(40);
    if(level===8){
       for(var i=0;i<messages[level].length;i++){
        Text(messages[level][i],50,35+i*30,14);
    } 
    }else{
    for(var i=0;i<messages[level].length;i++){
    Text(messages[level][i],50,100+i*25,16);
    }
    }
    fill(30, 65, 235,200);
    textAlign(RIGHT,TOP);
    Text("Level "+(level+1)+"/"+levels.length,300,35);
    Text(speed()+" fps",35,35,10);
    fill(0,0,0,200);
    textSize(15);
if(keys[82]){
        levelStart=true;
        currLevel.blocks=[];
        enemies=[];
        crates=[];
        sands=[];
        platforms=[];

        blockNum=0;
        createLevel(level);
    }
    else if(keys[ENTER]){
        levelStart=true;
        level=13;
        currLevel.blocks=[];
        enemies=[];

        platforms=[];
        crates=[];
        sands=[];
        blockNum=0;
        createLevel(13);
    }
    //println(player.speedf);
}
};
}//Scenes
{
draw= function() {
    this[["KAInfiniteLoopCount"]]=-Infinity;
    switch(scene){
        case "load":
            load();
            break;
        case "menu":
            menu();
            break;
        case "game":
            game();
            break;
        case "create":
            create();
            break;
        case "test":
            test();
            break;
        case "how":
            howTo();
            break;
    }
};
keyPressed=function(){
    
    keys[keyCode]=true;
};
keyReleased=function(){
    keys[keyCode]=false;
};
mouseClicked=function(){
    if(scene==="menu"){
        if(mouseX<150&&mouseY>440){
        scene="game";
        ready=true;
        }
        else if(mouseX>450&&mouseY>440){
        scene="create";
        ready=true;
        }
    }
    else if(scene==="intro"){
        scene="menu";
    }
};
}//JS
userLevel('crates','endeavour',[
'  c                                ',
'  >>>>>                            ',
' gggggg                            ',
' gx  eg ggg                        ',
' ggfggg cggggg                     ',
' wwwwww   c  g                     ',
' llllllGG g  g                     ',
'      gggg   g                     ',
'      g      g                     ',
'      g      g                     ',
'      g      g                   @ ',
'      g  ggggg             l       ',
'      g                    l       ',
'      g       g          t l       ',
'      g       g            l       ',
'      g       g            l       ',
'      gggggggggssssssssssssl       ',
]);
userLevel('dodge','endeavour',[
'g  xggggggggggg',
'g   g_    g@llg',
'gl Gg g llg   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g g   glltg',
'g   g gll g   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g g   g   g',
'gll g g   g   g',
'g   g g   gltlg',
'g   g g llg   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g g   gtllg',
'g   g gl lg   g',
'g   g g   g   g',
'g llg g   g   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g g   g  tg',
'g   g g llglltg',
'g   g g   g   g',
'g   g g   g   g',
'gl lg g   g   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g gl lgtllg',
'g   g g   g   g',
'g   g g   g   g',
'g   g g   g   g',
'gll g g   g   g',
'g   g g   g   g',
'g   g gll g t g',
'g   g g   gltlg',
'g   g g   g   g',
'g   g g   g   g',
'g llg g   g   g',
'g   g g   g   g',
'g   g g   g   g',
'g   g g llgtllg',
'g   g g   g   g',
'g   g g   g   g',
'gl lg g   g   g',
'g   g g   g   g',
'g   g g   gt  g',
'g   g g   g   g',
'g   g g   g   g',
'g l g gll glltg',
'g     g       g',
'ggggggggggggggg',
]);
userLevel('volcano','endeavour',[
'                                                       ',
'                                                       ',
'                                                       ',
'                                 x                     ',
'                l       g       gg                     ',
'                        gllllllllg                     ',
'                       ggllllllllg                     ',
'                       glllllllllg                     ',
'                      gglllllllllg                     ',
'                     ggllllllllllg                     ',
'                    gg@          g                     ',
'                    g            g                     ',
'               ll  ggl  llllll   g                     ',
'              l l  g l gll  gg  lg                     ',
'             ll l  g     l  llg  g                     ',
'            ll  l gg  g  l  g l gg                     ',
'           l    l g     g        g                     ',
'          ll   ll g  g    l  llg                       ',
'         lll   l  g   l g     l  g                     ',
'        ll     l  g      glg   l                       ',
'       ll     <<<<llll   l   g   g                     ',
'       l       lggl   l       l gg                     ',
'      ll l     lg           gll  g                     ',
'      l       llg     glgllg     g                     ',
'     ll       lggg   l        l  g                     ',
'    ll        lg  l          l   g                     ',
'    l         lg   glg     l   g g                     ',
'   ll   l    sl    l  ggl        g                     ',
'  ll         gl        g glg     g                     ',
' ll         sg  l        g l g   g                     ',
' l     ll   gg   l          g    g                     ',
'            g l    ll        g   g                     ',
'       l   sg    gg l   g  g  l gg                     ',
'     l     gg   gl  l gl l       g                     ',
'          sg    l l  l g   g ggg g                     ',
'          gg g       l ggg l l   g                     ',
'    l     gl   g     l           g                     ',
'        sgg  lg   gl        lg g g                     ',
'        gg     llg l      ll g   g                     ',
'     l  g    l      gll    l  l  g                     ',
'       sg   l  l       g  ll   l g                     ',
'       gg    l  g   ll  l    ll  g                     ',
'      gg g g  l gl     l g    l lg                     ',
'      g       gglg   l       l  lg                     ',
'     ggl    lgg l      l    g    g                     ',
'     g ll   gg     g l   g   l l g                     ',
'     g  llgg       gl gg  gg   g g                     ',
'    gg     l    l   g    gl     gg                     ',
'   gg           ggl  gg  gl      g                     ',
'   g    g l         lg g g     l g                     ',
'   .        ll           g ggg   g                     ',
' ggggggggggggggggggggggggggggggggg                     ',
]);
userLevel('underground','endeavour',[
'                                                   x  ',
'                                                      ',
'ggffffffffffffffffffffffffffffffffffffffffffffffffffgg',
'ggffffffffffffffffffffffffffffffffffffffffffffffffffgg',
'ggggffffffffffffffffffffffffffffffffffffffffffffffffgg',
'ggggffffffffffffffffffffffffffffffffffffffffffffffffgg',
'ggggffggffffffffffffffffffffffffffffffffffffffffffffgg',
'ggggffggffffffffffffffffffffffffffffffffffffffffffffgg',
'ggggffggffggffffffffffffffffffffffffffffffffffffffffgg',
'ggggffggffggffffffffffffffffffffffffffffffffffffffffgg',
'ggggffggffggffggffffffffffffffffffffffffffffffffffffgg',
'ggggffggffggffggffffffffffffffffffffffffffffffffffffgg',
'ggggffggffggffggffggffffffffffffffffffffffffffffffffgg',
'ggggffggffggffggffggffffffffffffffffffffffffffffffffgg',
'ggggffggffggffggffggffggffffffffffffffffffffffffffffgg',
'ggggffggffggffggffggffggffffffffffffffffffffffffffffgg',
'ggggffggffggffggffggffggffggffffffffffffffffffffffffgg',
'ggggffggffggffggffggffggffggffffffffffffffffffffffffgg',
'ggggffggffggffggffggffggffggffggffffffffffffffffffffgg',
'ggggffggffggffggffggffggffggffggffffffffffffffffffffgg',
'ggggffggffggffggffggffggffggffggffggffffffffffffffffgg',
'ggggffggffggffggffggffggffggffggffggffffffffffffffffgg',
'ggggffggffggffggffggffggffggffggffggffggffffffffffffgg',
'ggggffggffggffggffggffggffggffggffggffggffffffffffffgg',
'ggggggggffggffggffggffggffggffggffggffggffggffffffffgg',
'ggggggggffggffggffggffggffggffggffggffggffggffffffffgg',
'ggffffggggggffggffggffggffggffggffggffggffggffggffffgg',
'ggffffggggggffggffggffggffggffggffggffggffggffggffffgg',
'ggffffffffggggggffggffggffggffggffggffggffggffggffgggg',
'ggffffffffggggggffggffggffggffggffggffggffggffggffgggg',
'ggffffffffffffggffggffggffggffggffggffggffggffggffgggg',
'ggffffffffffffggffggffggffggffggffggffggffggffggffgggg',
'ggffffffffffffffffggggggffggffggffggffggffggffggffgggg',
'ggffffffffffffffffggggggffggffggffggffggffggffggffgggg',
'ggffffffffffffffffffffggggggffggffggffggffggffggffgggg',
'ggffffffffffffffffffffggggggffggffggffggffggffggffgggg',
'ggffffffffffffffffffffffffggggggffggffggffggffggffgggg',
'ggffffffffffffffffffffffffggggggffggffggffggffggffgggg',
'ggffffffffffffffffffffffffffffggggggffggffggffggffgggg',
'ggffffffffffffffffffffffffffffggggggffggffggffggffgggg',
'ggffffffffffffffffffffffffffffffffggggggffggffggffgggg',
'ggffffffffffffffffffffffffffffffffggggggffggffggffgggg',
'ggffffffffffffffffffffffffffffffffffffggggggffggffgggg',
'ggffffffffffffffffffffffffffffffffffffggggggffggffgggg',
'ggffffffffffffffffffffffffffffffffffffffffggggggffgggg',
'ggffffffffffffffffffffffffffffffffffffffffggggggffgggg',
'ggffffffffffffffffffffffffffffffffffffffffffffgggggggg',
'ggffffffffffffffffffffffffffffffffffffffffffffgggggggg',
'ggffffffffffffffffffffffffffffffffffffffffffffffff@@gg',
'ggffffffffffffffffffffffffffffffffffffffffffffffff@@gg',
'gggggggggggggggggggggggggggggggggggggggggggggggggggggg',
'gggggggggggggggggggggggggggggggggggggggggggggggggggggg',
]);
userLevel('think outside the box','endeavour',[
'ggfggggggggggggggggg',
'g                  g',
'g g             g  g',
'g    g       g     g',
'g       g g        g',
'g      g   g       g',
'g   g         g    g',
'gg               g g',
'g                  g',
'gg               g g',
'g   g         g    g',
'g      g   g       g',
'g       g g        g',
'g    g       g     g',
'g g             g  g',
'gx   g       g     g',
'g       g g        g',
'gggggggggggggggggggg',
'g@                  ',
'gggggggggggggggggggg',
]);

    }};
