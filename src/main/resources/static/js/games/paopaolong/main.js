function CBall(a,d){var b,c,g,f,e;this._init=function(a,f){b=a;c=0;e=f;var d=s_oSpriteLibrary.getSprite("ball_"+b);BALL_DIAMETER=d.width;BALL_DIAMETER_SQUARE=BALL_DIAMETER*BALL_DIAMETER;BALL_RADIUS=BALL_DIAMETER/2;d=new createjs.SpriteSheet({images:[d],frames:{width:BALL_DIAMETER,height:BALL_DIAMETER,regX:BALL_RADIUS,regY:BALL_RADIUS},animations:{move:[0,49]}});g=new createjs.Sprite(d);g.stop();e.addChild(g)};this.unload=function(){e.removeChild(f);e.removeChild(g)};this.nextFrame=function(){g.gotoAndStop(50===
g.currentFrame+1?0:g.currentFrame+1)};this.prevFrame=function(){g.gotoAndStop(0>g.currentFrame-1?49:g.currentFrame-1)};this.setPos=function(a,e){a>c?this.nextFrame():a<c&&this.prevFrame();c=a;g.x=e[c][0];g.y=e[c][1];g.rotation=e[c][2]-90};this.changePos=function(a,e){g.x=a;g.y=e};this.increasePosWithNumbers=function(a,e){g.x+=a;g.y+=e};this.decreasePos=function(a,e){g.x-=a;g.y-=e};this.increasePos=function(a,e){this.setPos(c+a,e)};this.setContainer=function(a){g.mask=null;e=a};this.explode=function(){var a=
{images:[s_oSpriteLibrary.getSprite("explosion")],frames:{width:62,height:62,regX:31,regY:31},animations:{show:[0,19],hide:[20]}},c=this,a=new createjs.SpriteSheet(a,"show");f=new createjs.Sprite(a);f.addEventListener("animationend",function(){c.onExplosionEnd()});e.addChild(f);f.x=g.x;f.y=g.y;f.gotoAndPlay("show");g.visible=!1};this.onExplosionEnd=function(){e.removeChild(f)};this.rollInStage=function(){};this.getFotogram=function(){return c};this.getSprite=function(){return g};this.getIndex=function(){return b};
this.getX=function(){return g.x};this.getY=function(){return g.y};this._init(a,d)}
function CSpriteLibrary(){var a,d,b,c,g,f;this.init=function(e,n,q){b=d=0;c=e;g=n;f=q;a={}};this.addSprite=function(e,c){a.hasOwnProperty(e)||(a[e]={szPath:c,oSprite:new Image},d++)};this.getSprite=function(e){return a.hasOwnProperty(e)?a[e].oSprite:null};this._onSpritesLoaded=function(){g.call(f)};this._onSpriteLoaded=function(){c.call(f);++b===d&&this._onSpritesLoaded()};this.loadSprites=function(){for(var e in a)a[e].oSprite.oSpriteLibrary=this,a[e].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[e].oSprite.src=a[e].szPath};this.getNumSprites=function(){return d}}
var CANVAS_WIDTH=1024,CANVAS_HEIGHT=768,FPS_TIME=1E3/24,DISABLE_SOUND_MOBILE=!0,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,STATE_GAME_ROLL_IN=0,STATE_GAME_BALL_MOVE=1,STATE_GAME_ROLL_OUT=2,STATE_GAME_SHOOTING=3,STATE_GAME_ATTRACT_BALLS=4,STEP_LENGTH=2,BALL_COLORS=5,BALL_ROLLING_IN,BALL_SHOOTED_SPEED=36,COMBO_VALUE,EXTRA_SCORE,BALL_DIAMETER,BALL_RADIUS,BALL_DIAMETER_SQUARE;
function CTweenController(){this.tweenValue=function(a,d,b){return a+b*(d-a)};this.easeLinear=function(a,d,b,c){return b*a/c+d};this.easeInCubic=function(a,d,b,c){c=(a/=c)*a*a;return d+b*c};this.easeBackInQuart=function(a,d,b,c){c=(a/=c)*a;return d+b*(2*c*c+2*c*a+-3*c)};this.easeInBack=function(a,d,b,c){return b*(a/=c)*a*(2.70158*a-1.70158)+d};this.easeOutCubic=function(a,d,b,c){return b*((a=a/c-1)*a*a+1)+d}}
function CToggle(a,d,b){var c,g,f;this._init=function(a,d,b){c=[];g=[];b=new createjs.SpriteSheet({images:[b],frames:{width:b.width/2,height:b.height,regX:b.width/2/2,regY:b.height/2},animations:{on:[0,1],off:[1,2]}});f=s_bAudioActive?new createjs.Sprite(b,"on"):new createjs.Sprite(b,"off");f.x=a;f.y=d;f.stop();s_oStage.addChild(f);this._initListener()};this.unload=function(){f.off("mousedown",this.buttonDown);f.off("pressup",this.buttonRelease);s_oStage.removeChild(f)};this._initListener=function(){f.on("mousedown",
this.buttonDown);f.on("pressup",this.buttonRelease)};this.addEventListener=function(a,f,d){c[a]=f;g[a]=d};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but");f.scaleX=1;f.scaleY=1;(s_bAudioActive=!s_bAudioActive)?f.gotoAndStop("on"):f.gotoAndStop("off");c[ON_MOUSE_UP]&&c[ON_MOUSE_UP].call(g[ON_MOUSE_UP])};this.buttonDown=function(){f.scaleX=.9;f.scaleY=.9;c[ON_MOUSE_DOWN]&&c[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])};this._init(a,d,b)}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4))})(navigator.userAgent||navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}
function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,d=CANVAS_HEIGHT,b=window.innerWidth;multiplier=Math.min(window.innerHeight/d,b/a);a*=multiplier;d*=multiplier;$("#canvas").css("width",a+"px");$("#canvas").css("height",d+"px");$("#canvas").css("left",b/2-a/2+"px")}}function randomFloatBetween(a,d,b){"undefined"===typeof b&&(b=2);return parseFloat(Math.min(a+Math.random()*(d-a),d).toFixed(b))}
function shuffle(a){for(var d=a.length,b,c;0!==d;)c=Math.floor(Math.random()*d),d-=1,b=a[d],a[d]=a[c],a[c]=b;return a}function formatTime(a){a/=1E3;var d=Math.floor(a/60);a=parseFloat(a-60*d).toFixed(1);var b="",b=10>d?b+("0"+d+":"):b+(d+":");return b=10>a?b+("0"+a):b+a}function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3===a.nodeType&&(a=a.parentNode);var d=document.createEvent("MouseEvents");d.initEvent("click",!0,!0);a.dispatchEvent(d)}}};
function CTextButton(a,d,b,c,g,f,e){var n,q,p,m,s,l,x,v,w;this._init=function(a,e,c,f,d,b,g){n=!1;m=[];s=[];w=new createjs.Bitmap(c);q=c.width;p=c.height;var z=Math.ceil(g/20);x=new createjs.Text(f,"bold "+g+"px "+d,"#000000");x.textAlign="center";var u=x.getBounds();x.x=c.width/2+z;x.y=(c.height-u.height)/2+z;v=new createjs.Text(f,"bold "+g+"px "+d,b);v.textAlign="center";u=v.getBounds();v.x=c.width/2;v.y=(c.height-u.height)/2;l=new createjs.Container;l.x=a;l.y=e;l.regX=c.width/2;l.regY=c.height/
2;l.addChild(w,x,v);s_oStage.addChild(l);this._initListener()};this.unload=function(){l.off("mousedown");l.off("pressup");s_oStage.removeChild(l)};this.setVisible=function(a){l.visible=a};this.enable=function(){n=!1;w.filters=[];w.cache(0,0,q,p)};this.disable=function(){n=!0;var a=(new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);w.filters=[new createjs.ColorMatrixFilter(a)];w.cache(0,0,q,p)};this._initListener=function(){oParent=this;l.on("mousedown",this.buttonDown);l.on("pressup",
this.buttonRelease)};this.addEventListener=function(a,c,e){m[a]=c;s[a]=e};this.buttonRelease=function(){n||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but"),l.scaleX=1,l.scaleY=1,m[ON_MOUSE_UP]&&m[ON_MOUSE_UP].call(s[ON_MOUSE_UP]))};this.buttonDown=function(){n||(l.scaleX=.9,l.scaleY=.9,m[ON_MOUSE_DOWN]&&m[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN]))};this.setPosition=function(a,c){l.x=a;l.y=c};this.changeText=function(a){v.text=a;x.text=a};this.setX=function(a){l.x=a};this.setY=
function(a){l.y=a};this.getButtonImage=function(){return l};this.getX=function(){return l.x};this.getY=function(){return l.y};this._init(a,d,b,c,g,f,e);return this}
function CPreloader(){var a;this._init=function(){this._onAllPreloaderImagesLoaded()};this._onPreloaderImagesLoaded=function(){};this._onAllPreloaderImagesLoaded=function(){a=new createjs.Text("","bold 22px Arial center","#ffffff");a.x=CANVAS_WIDTH/2-40;a.y=CANVAS_HEIGHT/2;s_oStage.addChild(a)};this.unload=function(){s_oStage.removeChild(a)};this.refreshLoader=function(d){a.text=d+"%"};this._init()}
function CNextLevel(){var a,d,b,c,g,f;this._init=function(){a=new createjs.Bitmap(s_oSpriteLibrary.getSprite("msg_box"));a.x=0;a.y=0;b=new createjs.Text("","bold 58px Chewy","#000");b.x=CANVAS_WIDTH/2+32;b.y=CANVAS_HEIGHT/2-138;b.textAlign="center";d=new createjs.Text("","bold 58px Chewy","#ffffff");d.x=CANVAS_WIDTH/2+30;d.y=CANVAS_HEIGHT/2-140;d.textAlign="center";g=new createjs.Text("","bold 44px Chewy","#000");g.x=CANVAS_WIDTH/2+32;g.y=CANVAS_HEIGHT/2+40;g.textAlign="center";c=new createjs.Text("",
"bold 44px Chewy","#ffffff");c.x=CANVAS_WIDTH/2+30;c.y=CANVAS_HEIGHT/2+38;c.textAlign="center";f=new createjs.Container;f.alpha=0;f.visible=!1;f.addChild(a,b,d,g,c);s_oStage.addChild(f)};this.show=function(a,n){b.text=TEXT_LEVEL+" "+a;d.text=TEXT_LEVEL+" "+a;g.text=TEXT_SCORE+" "+n;c.text=TEXT_SCORE+" "+n;f.visible=!0;var q=this;createjs.Tween.get(f).to({alpha:1},500).call(function(){q._initListener()})};this._initListener=function(){f.on("mousedown",this._onExit)};this._onExit=function(){f.off("mousedown");
f.alpha=0;f.visible=!1;s_oGame.nextLevel()};this._init()}
function CMenu(){var a,d,b,c;this._init=function(){a=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var g=s_oSpriteLibrary.getSprite("but_bg");d=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-100,g,TEXT_PLAY,"Chewy","#ffffff",40);d.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)g=s_oSpriteLibrary.getSprite("audio_icon"),b=new CToggle(CANVAS_WIDTH-g.width/2+20,g.height/2+20,g),b.addEventListener(ON_MOUSE_UP,this._onAudioToggle,
this),s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:100});c=new createjs.Shape;c.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(c);createjs.Tween.get(c).to({alpha:0},1E3).call(function(){c.visible=!1})};this.unload=function(){d.unload();d=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)b.unload(),b=null;s_oStage.removeChild(a);a=null;s_oStage.removeChild(c);c=null};this._onButPlayRelease=function(){this.unload();s_oMain.gotoGame()};this._onAudioToggle=
function(){createjs.Sound.setMute(!s_bAudioActive)};this._init()}
function CMain(a){var d=0,b=0,c=STATE_LOADING,g,f,e;this.initContainer=function(){var a=document.getElementById("canvas");s_oStage=new createjs.Stage(a);createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&s_oStage.enableMouseOver(20);s_oLevelSettings=new CLevelSettings;s_iPrevTime=(new Date).getTime();createjs.Ticker.setFPS(35);createjs.Ticker.on("tick",this._update);!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds();s_oSpriteLibrary=new CSpriteLibrary;f=new CPreloader;
this._loadImages()};this.soundLoaded=function(){d++;d===b&&(f.unload(),this.gotoMenu())};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["mp3"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/games/paopaolong/press_but.ogg","press_but"),createjs.Sound.registerSound("./sounds/games/paopaolong/win.ogg","win"),createjs.Sound.registerSound("./sounds/games/paopaolong/game_over.ogg",
"game_over"),createjs.Sound.registerSound("./sounds/games/paopaolong/combo.ogg","combo"),createjs.Sound.registerSound("./sounds/games/paopaolong/shot.ogg","shot"),createjs.Sound.registerSound("./sounds/games/paopaolong/soundtrack.ogg","soundtrack")):(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/games/paopaolong/press_but.mp3","press_but"),createjs.Sound.registerSound("./sounds/games/paopaolong/win.mp3","win"),createjs.Sound.registerSound("./sounds/games/paopaolong/game_over.mp3",
"game_over"),createjs.Sound.registerSound("./sounds/games/paopaolong/combo.mp3","combo"),createjs.Sound.registerSound("./sounds/games/paopaolong/shot.mp3","shot"),createjs.Sound.registerSound("./sounds/games/paopaolong/soundtrack.mp3","soundtrack")),b+=6)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("but_bg","./img/games/paopaolong/but_play_bg.png");s_oSpriteLibrary.addSprite("but_exit","./img/games/paopaolong/but_exit.png");s_oSpriteLibrary.addSprite("bg_menu","./img/games/paopaolong//bg_menu.jpg");s_oSpriteLibrary.addSprite("audio_icon",
"./img/games/paopaolong/audio_icon.png");s_oSpriteLibrary.addSprite("hero","./img/games/paopaolong/hero.png");s_oSpriteLibrary.addSprite("hit_area","./img/games/paopaolong/hit_area.png");s_oSpriteLibrary.addSprite("explosion","./img/games/paopaolong/explosion.png");s_oSpriteLibrary.addSprite("msg_box","./img/games/paopaolong/msg_box.png");s_oSpriteLibrary.addSprite("extra_score","./img/games/paopaolong/extra_score.png");s_oSpriteLibrary.addSprite("end_path","./img/games/paopaolong/end_path.png");for(var a=0;a<BALL_COLORS;a++)s_oSpriteLibrary.addSprite("ball_"+a,"./img/games/paopaolong/ball_"+a+".png");
for(a=0;a<s_oLevelSettings.getNumLevels();a++)s_oSpriteLibrary.addSprite("bg_game_"+(a+1),"./img/games/paopaolong/bg_game_"+(a+1)+".jpg");b+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){d++;f.refreshLoader(Math.floor(d/b*100));d===b&&(f.unload(),this.gotoMenu())};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.gotoMenu=function(){new CMenu;c=STATE_MENU};this.gotoGame=function(){e=new CGame(g);c=STATE_GAME;
$(s_oMain).trigger("game_start")};this.gotoHelp=function(){new CHelp;c=STATE_HELP};this._update=function(a){var f=(new Date).getTime();s_iTimeElaps=f-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=f;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);c===STATE_GAME&&e.update();void 0!==s_oStage&&s_oStage.update(a)};s_oMain=this;g=a;this.initContainer()}
var s_bMobile,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_oSoundtrack,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary,s_oLevelSettings;
function CLevelSettings(){var a,d,b,c,g;this._init=function(){this._initBallSpeed();this._initBallNumber();this._initBallColors();this._initHeroPos();this._initCurveLevel()};this._initBallSpeed=function(){a=[50,40,30]};this._initBallNumber=function(){d=[60,80,100]};this._initBallColors=function(){b=[];b[0]=BALL_COLORS-1;b[1]=BALL_COLORS;b[2]=BALL_COLORS};this._initHeroPos=function(){c=[];c[0]=new createjs.Point(500,400);c[1]=new createjs.Point(500,400);c[2]=new createjs.Point(500,400)};this._initCurveLevel=
function(){g=[[[-102,262],[-42,226],[120,154],[168,136],[215,120],[264,104],[313,92],[363,83],[414,76],[464,71],[516,68],[566,66],[617,66],[668,71],[718,84],[765,100],[810,125],[851,154],[891,188],[923,226],[950,269],[967,317],[969,368],[948,413],[902,433],[855,417],[825,375],[805,329],[781,284],[755,240],[719,204],[676,178],[628,158],[578,151],[528,151],[477,159],[428,169],[378,179],[328,192],[280,208],[233,227],[187,250],[145,278],[105,309],[75,350],[57,397],[51,447],[56,498],[68,548],[91,593],
[122,634],[163,663],[210,681],[260,690],[311,694],[359,697],[419,698],[479,698],[529,696],[579,692],[632,685],[687,674],[737,661],[787,643],[827,625],[872,598],[897,565],[897,523],[867,495],[829,477],[789,477],[749,492],[717,514],[679,541],[634,571],[592,592],[552,605],[512,613],[469,615],[422,612],[379,604],[339,593],[296,576],[254,551],[224,519],[205,476]],[[378,-39],[498,3],[618,51],[670,74],[720,97],[768,122],[810,147],[853,175],[890,204],[935,245],[971,290],[992,328],[999,369],[990,410],[967,
448],[936,483],[898,515],[856,545],[806,575],[763,597],[718,618],[663,640],[615,656],[558,673],[505,686],[440,697],[373,704],[298,701],[240,691],[189,671],[142,636],[105,591],[83,544],[68,497],[60,444],[59,382],[65,329],[76,282],[93,234],[119,187],[149,148],[184,120],[224,100],[272,92],[319,95],[366,101],[409,110],[482,128],[552,149],[609,169],[707,212],[776,250],[840,297],[872,347],[865,386],[842,423],[802,458],[754,491],[709,515],[606,555],[529,577],[456,591],[379,593],[339,585],[299,557],[276,
517],[264,475],[259,422],[264,365],[273,320],[291,272],[318,235],[348,217],[383,216],[428,223],[487,240],[555,265],[632,298]],[[-49,228],[22,181],[81,150],[181,113],[253,95],[343,78],[421,71],[476,71],[542,72],[593,76],[651,85],[703,97],[758,114],[811,136],[863,166],[903,200],[933,237],[954,277],[970,325],[978,375],[962,472],[900,550],[845,586],[803,611],[758,631],[710,646],[664,657],[619,665],[567,670],[519,672],[467,671],[410,667],[363,660],[315,651],[265,637],[218,620],[175,598],[122,561],[82,
513],[58,468],[47,418],[46,370],[59,330],[96,304],[137,310],[164,346],[160,389],[169,431],[193,476],[226,509],[263,535],[323,560],[401,577],[473,584],[546,584],[616,579],[689,564],[744,540],[796,503],[829,461],[849,413],[854,371],[839,331],[802,311],[759,318],[741,358],[736,401],[714,439],[677,468],[634,486],[587,497],[540,501],[475,501],[420,493],[372,480],[327,456],[293,423],[274,378],[272,338]]]};this.getBallSpeedForLevel=function(c){return a[c-1]};this.getBallNumberForLevel=function(a){return d[a-
1]};this.getBallColorsForLevel=function(a){return b[a-1]};this.getHeroPosForLevel=function(a){return c[a-1]};this.getCurveForLevel=function(a){return g[a-1]};this.getNumLevels=function(){return g.length};this._init()}TEXT_GAMEOVER="GAME OVER";TEXT_CONGRATS="CONGRATULATIONS";TEXT_PLAY="PLAY";TEXT_SCORE="SCORE";TEXT_LEVEL="LEVEL";TEXT_FINAL_SCORE="FINAL SCORE";
function CInterface(){var a,d,b,c,g,f;this._init=function(){a=new createjs.Text(TEXT_SCORE+" 0","bold 38px Chewy","#fff");a.x=10;a.y=10;a.textAlign="left";s_oStage.addChild(a);var e=this;b=new createjs.Bitmap(s_oSpriteLibrary.getSprite("hit_area"));s_oStage.addChild(b);b.on("pressup",function(a){e._onTapScreen(a.stageX,a.stageY)});var n=s_oSpriteLibrary.getSprite("but_exit");d=new CGfxButton(CANVAS_WIDTH-n.width/2-10,n.height/2+10,n,!0);d.addEventListener(ON_MOUSE_UP,this._onExit,this);if(!1===DISABLE_SOUND_MOBILE||
!1===s_bMobile)c=new CToggle(d.getX()-n.width,n.height/2+10,s_oSpriteLibrary.getSprite("audio_icon")),c.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this);f=new CNextLevel;g=new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"))};this.unload=function(){d.unload();d=null;!1===DISABLE_SOUND_MOBILE&&(c.unload(),c=null);s_oStage.removeAllChildren()};this._onTapScreen=function(a,c){s_oGame.onShot(a,c)};this.gameOver=function(a){g.show(a,!1)};this.win=function(a){g.show(a,!0)};this.nextLevel=function(a,
c){f.show(a,c)};this.refreshScore=function(c){a.text=TEXT_SCORE+" "+c};this._onExit=function(){s_oGame.onExit()};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};s_oInterface=this;this._init();return this}var s_oInterface;
function CHero(){var a=!1,d,b,c,g,f,e,n,q,p,m;this._init=function(){var a=s_oSpriteLibrary.getSprite("hero");m=new createjs.Container;m.regX=a.width/2;m.regY=a.height/2;s_oStage.addChild(m);n=new createjs.Bitmap(a);n.x=0;n.y=0;m.addChild(n);q=new createjs.Shape;q.graphics.beginFill("rgba(255,0,0,0.01)").drawCircle(40,110,16);m.addChild(q);p=new createjs.Shape;p.graphics.beginFill("rgba(255,0,0,0.01)").drawCircle(120,60,6);m.addChild(p);d=a.width;b=a.height};this.reset=function(a,d){c=d;void 0!==f&&
null!==f&&f.unload();void 0!==e&&null!==e&&e.unload();m.x=a.x;m.y=a.y;g=[];for(var b=0;b<c;b++)g[b]=!0};this.unload=function(){};this.rotate=function(a){m.rotation=a};this.start=function(){f=this._getRandomBall();f.changePos(d/2-25,b/2+20);f.getSprite().mask=q;e=this._getRandomBall();e.changePos(120,b/2-12);e.getSprite().mask=p;var a=this;createjs.Tween.get(f.getSprite()).to({y:f.getY()+25},300).call(function(){a._onBallReady()});createjs.Tween.get(e.getSprite()).to({y:e.getY()+16},300)};this._getRandomBall=
function(){var a;if(!0===this._checkIfAllColorsNotAvailable())return null;do{var d=Math.floor(Math.random()*c),b=!1;if(!0===g[d]){a=new CBall(d,m);break}}while(!1===b);return a};this._checkIfAllColorsNotAvailable=function(){for(var a=!0,c=0;c<g.length;c++)!0===g[c]&&(a=!1);return a};this._nextShoot=function(){null!==f&&f.unload();f=e;f.changePos(d/2-25,b/2+20);f.getSprite().mask=q;e=this._getRandomBall();e.changePos(120,b/2-12);e.getSprite().mask=p;var a=this;createjs.Tween.get(f.getSprite()).to({y:f.getY()+
25},300).call(function(){a._onBallReady()});createjs.Tween.get(e.getSprite()).to({y:e.getY()+16},300)};this.colorCleared=function(a){g[a]=!1;f.getIndex()===a&&(f.unload(),f=this._getRandomBall(),null!==f&&(f.changePos(d/2-25,b/2+45),f.getSprite().mask=q));e.getIndex()===a&&(e.unload(),e=this._getRandomBall(),null!==e&&(e.changePos(120,b/2+4),e.getSprite().mask=p))};this._onBallReady=function(){a=!0};this.getCurrentBall=function(){a=!1;var c=f;this._nextShoot();return c};this.getX=function(){return m.x};
this.getY=function(){return m.y};this.getRotation=function(){return m.rotation};this.canShoot=function(){return a};this._init()}
function CGfxButton(a,d,b){var c,g,f=[],e;this._init=function(a,d,b){c=[];g=[];e=new createjs.Bitmap(b);e.x=a;e.y=d;e.regX=b.width/2;e.regY=b.height/2;s_oStage.addChild(e);this._initListener()};this.unload=function(){e.off("mousedown",this.buttonDown);e.off("pressup",this.buttonRelease);s_oStage.removeChild(e)};this.setVisible=function(a){e.visible=a};this._initListener=function(){e.on("mousedown",this.buttonDown);e.on("pressup",this.buttonRelease)};this.addEventListener=function(a,d,b){c[a]=d;g[a]=
b};this.addEventListenerWithParams=function(a,d,b,e){c[a]=d;g[a]=b;f=e};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but");e.scaleX=1;e.scaleY=1;c[ON_MOUSE_UP]&&c[ON_MOUSE_UP].call(g[ON_MOUSE_UP],f)};this.buttonDown=function(){e.scaleX=.9;e.scaleY=.9;c[ON_MOUSE_DOWN]&&c[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN],f)};this.setPosition=function(a,c){e.x=a;e.y=c};this.setX=function(a){e.x=a};this.setY=function(a){e.y=a};this.getButtonImage=function(){return e};
this.getX=function(){return e.x};this.getY=function(){return e.y};this._init(a,d,b);return this}
function CGame(a){var d=!1,b,c,g,f=1,e,n,q,p,m=-1,s,l,x,v,w,C,h,k,t,r,y=null,G=null,z=null,u,D,A,E,B,H,F;this._init=function(){s_oBezier=new CBezier;F=new createjs.Container;D=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_game_"+f));F.addChild(D);s_oStage.addChild(F);u=new CHero;p=0;B=new createjs.Container;E=new createjs.Container;H=new createjs.Container;this.reset();s_oStage.addChild(B);s_oStage.addChild(E);s_oStage.addChild(H);A=new CInterface;if(!1===s_bMobile){var a=this;s_oStage.addEventListener("stagemousemove",
function(c){a._onMouseMove(c.stageX,c.stageY)})}d=!0};this.unload=function(){d=!1;clearInterval(x);createjs.Sound.stop();A.unload();u.unload();s_oStage.removeAllChildren()};this.reset=function(){b=!0;g=c=!1;q=s_oLevelSettings.getBallSpeedForLevel(f);n=s_oLevelSettings.getBallNumberForLevel(f);w=s_oLevelSettings.getBallColorsForLevel(f);BALL_ROLLING_IN=Math.floor(.33*n);s=0;e=l=1;C=0;u.reset(s_oLevelSettings.getHeroPosForLevel(f),w);null!==G&&(B.removeChild(G),B.removeChild(z));this._initCurve();this._initBall()};
this._normalize=function(a){var c=this._length(a);return 0<c?{x:a.x/c,y:a.y/c}:a};this._length=function(a){return Math.sqrt(a.x*a.x+a.y*a.y)};this._dotProductV2=function(a,c){return a.x*c.x+a.y*c.y};this._angleBetweenVectors=function(a,c){var d=Math.acos(this._dotProductV2(a,c)/(this._length(a)*this._length(c)));return!0===isNaN(d)?0:d};this._rot90CW=function(a){return{x:a.y,y:-a.x}};this._rot90CCW=function(a){return{x:-a.y,y:a.x}};this._rotateVector2D=function(a,c){var d=c.x*Math.cos(a)+c.y*Math.sin(a),
b=c.x*-Math.sin(a)+c.y*Math.cos(a);return{x:d,y:b}};this._initCurve=function(){var a,c;a=s_oLevelSettings.getCurveForLevel(f);var d=new createjs.Graphics;d.setStrokeStyle(2);d.beginStroke("#fff");d.moveTo(a[0][0],a[0][1]);for(c=1;c<a.length-2;++c)d.quadraticCurveTo(a[c][0],a[c][1],(a[c][0]+a[c+1][0])/2,(a[c][1]+a[c+1][1])/2);d.quadraticCurveTo(a[c][0],a[c][1],a[c+1][0],a[c+1][1]);k=[];for(c=0;c<a.length-2;++c)for(var b=0===c?new createjs.Point(a[0][0],a[0][1]):new createjs.Point((a[c][0]+a[c+1][0])/
2,(a[c][1]+a[c+1][1])/2),e=new createjs.Point(a[c+1][0],a[c+1][1]),g=c<=a.length-4?new createjs.Point((a[c+1][0]+a[c+2][0])/2,(a[c+1][1]+a[c+2][1])/2):new createjs.Point(a[c+2][0],a[c+2][1]),b=s_oBezier.init(b,e,g,STEP_LENGTH),e=1;e<=b;++e)g=s_oBezier.getAnchorPoint(e),k.push(g);d.setStrokeStyle(4);d.beginStroke("#00a29b");d.beginFill("#221910");b={x:k[1][0]-k[0][0],y:k[1][1]-k[0][1]};b=this._normalize(b);b=this._rot90CW(b);b.x*=16;b.y*=16;b.x+=k[0][0];b.y+=k[0][1];a=b.x;c=b.y;d.moveTo(b.x,b.y);for(e=
1;e<k.length-1;e++)b={x:k[e+1][0]-k[e][0],y:k[e+1][1]-k[e][1]},b=this._normalize(b),b=this._rot90CW(b),b.x*=16,b.y*=16,b.x+=k[e][0],b.y+=k[e][1],d.lineTo(b.x,b.y);d.lineTo(b.x,b.y);b={x:k[k.length-1][0]-k[k.length-2][0],y:k[k.length-1][1]-k[k.length-2][1]};b=this._normalize(b);b=this._rot90CCW(b);b.x*=16;b.y*=16;b.x+=k[k.length-1][0];b.y+=k[k.length-1][1];d.lineTo(b.x,b.y);for(e=k.length-2;1<e;e--)b={x:k[e][0]-k[e-1][0],y:k[e][1]-k[e-1][1]},b=this._normalize(b),b=this._rot90CCW(b),b.x*=16,b.y*=16,
b.x+=k[e][0],b.y+=k[e][1],d.lineTo(b.x,b.y);d.lineTo(a,c);d.endFill();G=new createjs.Shape(d);B.addChild(G);d=k.length;a=s_oSpriteLibrary.getSprite("end_path");z=new createjs.Bitmap(a);z.x=k[d-9][0];z.y=k[d-9][1];z.regX=a.width/2;z.regY=a.height/2;B.addChild(z)};this._initBall=function(){h=[];var a=this.getRandomBall();h.unshift(a);a.setPos(16,k);m=STATE_GAME_ROLL_IN};this.getRandomBall=function(){n--;var a=Math.floor(Math.random()*w);return new CBall(a,E)};this._pushNextBall=function(a,d){var f=
[];f.push(h[a]);for(var l=a;l<h.length-1;++l)if(16>=h[l+1].getFotogram()-h[l].getFotogram())16>h[l+1].getFotogram()-h[l].getFotogram()&&h[l+1].setPos(h[l].getFotogram()+16,k),f.push(h[l+1]);else break;for(l=0;l<f.length;++l)f[l].increasePos(d,k);if(h[h.length-1].getFotogram()>=k.length-17){b=!1;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack.pause(),createjs.Sound.play("game_over").addEventListener("complete",this._onSoundGameOverComplete);s_oStage.removeEventListener("stagemousemove");
g=c=!1;e=1;h[h.length-1].unload();h.splice(h.length-1,1);m=STATE_GAME_ROLL_OUT}};this.onIntroduceBall=function(){if(0!==h.length&&(s_oGame._pushNextBall(0,1),32===h[0].getFotogram()&&0!==n)){var a=s_oGame.getRandomBall();h.unshift(a);a.setPos(16,k)}};this.shoot=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("shot");var a=(u.getRotation()+90)*Math.PI/180,c=u.getCurrentBall();c.changePos(u.getX()+60*Math.cos(a),u.getY()+60*Math.sin(a));E.addChild(c.getSprite());c.setContainer(E);
t.push([c,a]);m=STATE_GAME_SHOOTING};this._checkCollision=function(a){a=a[0];for(var c=0;c<h.length;++c)if((h[c].getX()-a.getX())*(h[c].getX()-a.getX())+(h[c].getY()-a.getY())*(h[c].getY()-a.getY())<=BALL_DIAMETER_SQUARE)return c;return-1};this._insertBall=function(a,b,d){var e;"next"===d?(e=h[b].getFotogram()+16,h[b+1]&&32>h[b+1].getFotogram()-h[b].getFotogram()&&(r.push([a,h[b+1]]),c=!0)):h[b-1]&&32>h[b].getFotogram()-h[b-1].getFotogram()?(e=h[b-1].getFotogram()+16,r.push([a,h[b]]),c=!0):e=h[b].getFotogram()-
16;b=k[e][0];d=k[e][1];var f=this;createjs.Tween.get(a.getSprite()).to({x:b,y:d},200).call(function(){f.motionFinished(a,e)})};this.motionFinished=function(a,c){for(var b,d=0;d<h.length;++d){if(h[d].getFotogram()>c){b=d;break}d===h.length-1&&(b=d+1)}r.splice(r.indexOf(a),1);a.setPos(c,k);h.splice(b,0,a);h[b-1]&&h[b-1].getIndex()===h[b].getIndex()&&17<h[b].getFotogram()-h[b-1].getFotogram()&&this._addToBallAttracted(h[b]);h[b+1]&&h[b+1].getIndex()===h[b].getIndex()&&17<h[b+1].getFotogram()-h[b].getFotogram()&&
this._addToBallAttracted(h[b+1]);this._clearCheck(b,!0)};this._addToBallAttracted=function(a){null===y&&(y=[]);y.push(a);setTimeout(function(){g=!0},400)};this._clearCheck=function(a,b){var c=[];c.push(h[a]);for(var d=h[a].getIndex(),e=a+1;h[e];)if(h[e].getIndex()===d)if(17>=h[e].getFotogram()-h[e-1].getFotogram())c.push(h[e]),++e;else if(b)break;else c.push(h[e]),++e;else break;for(e=a-1;h[e];)if(h[e].getIndex()===d)if(17>=h[e+1].getFotogram()-h[e].getFotogram())c.push(h[e]),--e;else if(b)break;
else c.push(h[e]),--e;else break;++e;2<c.length&&b&&this._clearBall(e,c);return c.length};this._attract=function(){if(0!==y.length)for(var a=0;a<y.length;++a){var b=h.indexOf(y[a]);if(-1!==b&&h[b-1])if(y[a].getIndex()===h[b-1].getIndex()){var c=19<y[a].getFotogram()-h[b-1].getFotogram()?3:y[a].getFotogram()-h[b-1].getFotogram()-16;this._pushNextBall(b,-c);16>=y[a].getFotogram()-h[b-1].getFotogram()&&(e++,y.splice(a,1),this._clearCheck(b-1,!0),0===y.length&&(g=!1,e=1))}else y.splice(a,1),s>l&&(l=s),
s=0}else g=!1,e=1};this._checkPushCollision=function(){if(0!==r.length)for(var a=0;a<r.length;++a){for(var b=(r[a][0].getX()-r[a][1].getX())*(r[a][0].getX()-r[a][1].getX())+(r[a][0].getY()-r[a][1].getY())*(r[a][0].getY()-r[a][1].getY()),b=b<BALL_DIAMETER_SQUARE?!0:!1,d=0;b;)++d,b=(r[a][0].getX()-k[r[a][1].getFotogram()+d][0])*(r[a][0].getX()-k[r[a][1].getFotogram()+d][0])+(r[a][0].getY()-k[r[a][1].getFotogram()+d][1])*(r[a][0].getY()-k[r[a][1].getFotogram()+d][1]),b=b<BALL_DIAMETER_SQUARE?!0:!1;b=
h.indexOf(r[a][1]);-1!==b&&this._pushNextBall(b,d)}else c=!1};this._clearBall=function(a,c){++s;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("combo");for(var d=0,f=0;f<c.length;++f)c[f].explode(),d+=COMBO_VALUE;d*=e;p+=d;A.refreshScore(p);h.length===c.length&&(b=!1,v=h[h.length-1].getFotogram(),setTimeout(this._gamePass,600),!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)&&(s_oSoundtrack.pause(),createjs.Sound.play("win").addEventListener("complete",this._onSoundGameOverComplete));h.splice(a,
c.length);0===n&&this._checkColor(c[0].getIndex());h[a-1]&&h[a]&&h[a-1].getIndex()===h[a].getIndex()?(3>this._clearCheck(a,!1)&&(s>l&&(l=s),s=0),this._addToBallAttracted(h[a])):(s>l&&(l=s),s=0)};this._gamePass=function(){x=setInterval(s_oGame._extraScore,q)};this._extraScore=function(){v+16<k.length-17?(v+=16,new CExtraScore(k[v][0],k[v][1],H),p+=EXTRA_SCORE,A.refreshScore(p)):(clearInterval(x),s_oStage.removeEventListener("stagemousemove"),b=!1,f++,f>s_oLevelSettings.getNumLevels()?A.win(p):A.nextLevel(f,
p))};this._checkColor=function(a){for(var b=0;b<h.length;++b)if(h[b].getIndex()===a)return;for(b=0;b<t.length;++b)if(t[b].getIndex()===a)return;u.colorCleared(a)};this.nextLevel=function(){F.removeChild(D);D=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_game_"+f));F.addChild(D);this.reset();d=!0};this.onShot=function(a,c){if(b&&u.canShoot()){if(s_bMobile){var d=a-u.getX(),e=c-u.getY(),d=Math.atan2(e,d);u.rotate(180*d/Math.PI-90)}this.shoot()}};this._onMouseMove=function(a,b){var c=a-u.getX(),
d=b-u.getY(),c=Math.atan2(d,c);u.rotate(180*c/Math.PI-90)};this.onExit=function(){createjs.Sound.stop();this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this._onSoundGameOverComplete=function(){s_oSoundtrack.resume()};this._updateMove=function(){C+=s_iTimeElaps;C>q&&(C=0,this.onIntroduceBall())};this._updateRollOut=function(){for(var a=h.length-1;0<=a;--a)h[a].getFotogram()>k.length-17?(h[a].unload(),h.splice(a,1),0===h.length&&(m=-1,A.gameOver(p))):h[a].increasePos(8,k)};this._updateRollIn=
function(){if(h.length<BALL_ROLLING_IN){for(var a=0;a<h.length;++a)h[a].increasePos(4,k);32===h[0].getFotogram()&&(a=this.getRandomBall(),h.unshift(a),a.setPos(16,k))}else m=-1,t=[],r=[],u.start(),m=STATE_GAME_BALL_MOVE};this._updateShooting=function(){if(0!==t.length)for(var a=0;a<t.length;++a)if(0<t[a][0].getX()&&t[a][0].getX()<CANVAS_WIDTH&&0<t[a][0].getY()&&t[a][0].getY()<CANVAS_HEIGHT){var b=this._checkCollision(t[a]);if(-1===b)t[a][0].increasePosWithNumbers(Math.cos(t[a][1])*BALL_SHOOTED_SPEED,
Math.sin(t[a][1])*BALL_SHOOTED_SPEED);else{var c=t[a][0],d=t[a][1],e=Math.sqrt((h[b].getX()-c.getX())*(h[b].getX()-c.getX())+(h[b].getY()-c.getY())*(h[b].getY()-c.getY()));t[a][0].decreasePos((BALL_DIAMETER-e)*Math.cos(d),(BALL_DIAMETER-e)*Math.sin(d));var d=k[h[b].getFotogram()-BALL_RADIUS][0],e=k[h[b].getFotogram()-BALL_RADIUS][1],d=Math.sqrt((c.getX()-d)*(c.getX()-d)+(c.getY()-e)*(c.getY()-e)),e=k[h[b].getFotogram()+BALL_RADIUS][0],f=k[h[b].getFotogram()+BALL_RADIUS][1],c=Math.sqrt((c.getX()-e)*
(c.getX()-e)+(c.getY()-f)*(c.getY()-f));this._insertBall(t[a][0],b,d>c?"next":"previous");t.splice(a,1)}}else t[a][0].unload(),t.splice(a,1);else m=-1};this.update=function(){if(!1!==d)switch(!0===g&&this._attract(),!0===c&&this._checkPushCollision(),m){case STATE_GAME_ROLL_IN:this._updateRollIn();break;case STATE_GAME_ROLL_OUT:this._updateRollOut();break;case STATE_GAME_SHOOTING:this._updateShooting();this._updateMove();break;default:this._updateMove()}};s_oGame=this;COMBO_VALUE=a.combo_value;EXTRA_SCORE=
a.extra_score;this._init()}var s_oGame,s_oBezier;function CExtraScore(a,d,b){var c;this._init=function(a,b,d){var n=s_oSpriteLibrary.getSprite("extra_score");c=new createjs.Bitmap(n);c.x=a;c.y=b;c.regX=n.width/2;c.regY=n.height/2;c.alpha=0;d.addChild(c);createjs.Tween.get(c).to({alpha:1},1E3).call(function(){d.removeChild(c)})};this._init(a,d,b)}
function CEndPanel(a){var d,b,c,g,f,e;this._init=function(a){d=new createjs.Bitmap(a);d.x=0;d.y=0;f=new createjs.Text("","bold 48px Chewy","#000");f.x=CANVAS_WIDTH/2+2;f.y=CANVAS_HEIGHT/2-138;f.textAlign="center";g=new createjs.Text("","bold 48px Chewy","#ffffff");g.x=CANVAS_WIDTH/2;g.y=CANVAS_HEIGHT/2-140;g.textAlign="center";b=new createjs.Text("","bold 32px Chewy","#000");b.x=CANVAS_WIDTH/2+1;b.y=CANVAS_HEIGHT/2+11;b.textAlign="center";c=new createjs.Text("","bold 32px Chewy","#ffffff");c.x=CANVAS_WIDTH/
2;c.y=CANVAS_HEIGHT/2+10;c.textAlign="center";e=new createjs.Container;e.alpha=0;e.visible=!1;e.addChild(d,b,c,f,g);s_oStage.addChild(e)};this.unload=function(){e.off("mousedown",this._onExit);s_oStage.removeChild(e)};this._initListener=function(){e.on("mousedown",this._onExit)};this.show=function(a,d){d?(f.text=TEXT_CONGRATS,g.text=TEXT_CONGRATS):(f.text=TEXT_GAMEOVER,g.text=TEXT_GAMEOVER);b.text=TEXT_FINAL_SCORE+": "+a;c.text=TEXT_FINAL_SCORE+": "+a;e.visible=!0;var p=this;createjs.Tween.get(e).to({alpha:1},
500).call(function(){p._initListener()});$(s_oMain).trigger("save_score",a)};this._onExit=function(){e.off("mousedown");s_oGame.onExit()};this._init(a);return this}
function CBezier(){var a,d,b,c,g,f,e,n,q,p,m,s;this.init=function(l,x,v,w){a=l;d=x;b=v;g=a.x-2*d.x+b.x;f=a.y-2*d.y+b.y;e=2*d.x-2*a.x;n=2*d.y-2*a.y;q=4*(g*g+f*f);p=4*(g*e+f*n);m=e*e+n*n;s=this._length(1);c=Math.floor(s/w);s%w>w/2&&c++;return c};this._speed=function(a){return Math.sqrt(q*a*a+p*a+m)};this._length=function(a){var b=Math.sqrt(m+a*(p+q*a)),c=2*q*a*b+p*(b-Math.sqrt(m)),d=Math.log(p+2*Math.sqrt(q)*Math.sqrt(m));a=Math.log(p+2*q*a+2*Math.sqrt(q)*b);return(2*Math.sqrt(q)*c+(p*p-4*q*m)*(d-a))/
(8*Math.pow(q,1.5))};this.invertL=function(a,b){var c=a,d;do{d=c-(this._length(c)-b)/this._speed(c);if(1E-6>Math.abs(c-d))break;c=d}while(1);return d};this.getAnchorPoint=function(e){if(0<=e&&e<=c){var f=e/c,f=this.invertL(f,f*s);e=(1-f)*(1-f)*a.x+2*(1-f)*f*d.x+f*f*b.x;var g=(1-f)*(1-f)*a.y+2*(1-f)*f*d.y+f*f*b.y,m=new createjs.Point((1-f)*a.x+f*d.x,(1-f)*a.y+f*d.y),f=new createjs.Point((1-f)*d.x+f*b.x,(1-f)*d.y+f*b.y),m=180*Math.atan2(f.y-m.y,f.x-m.x)/Math.PI;return[e,g,m]}return[]}};