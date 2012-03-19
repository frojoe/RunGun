class MusicClip

{
var clip : AudioClip;
var isEnergetic : boolean;
//var wasPlayed : boolean;

function MusicClip(AudioClip, musicType){

clip = AudioClip;
isEnergetic = musicType;

}

}

public var randomNumber : int = 0;
public var isAudioPlaying : boolean = false;
public var audioArray : AudioClip[];
public var playingSong : AudioClip;
public var masterMusicArray : MusicClip[];
public var tempMusicArray : MusicClip[];
public var currentAudio : int = 0;
function Start(){


}



function pickSong(){

if ( (tempMusicArray.GetLength(0) == 0)){tempMusicArray = masterMusicArray;} 

randomNumber = Random.Range(0, (tempMusicArray.GetLength(0)) );

playingSong = tempMusicArray[randomNumber].clip;
//tempMusicArray.removeAt(randomNumber);
audio.clip = playingSong;
audio.Play();

}

function Update () {

if(audio.isPlaying == false){
pickSong();
}
//
//if (isAudioPlaying == false){
//isAudioPlaying = true;
//audio.Play();
//}
//
//if (Input.anyKeyDown == true){
//currentAudio = currentAudio + 1;
//if (currentAudio > (audioArray.GetLength(0) - 1)  ){
//currentAudio = 0;
//}
//audio.clip = audioArray[currentAudio];
//audio.Play();
//
//}

}


