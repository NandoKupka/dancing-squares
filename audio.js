var audio = new Audio();
audio.src = 'naive.mp3';
audio.controls = true;
audio.loop = true;
audio.autoplay = true;


document.getElementById('audio_box').appendChild(audio);
var ctx = new AudioContext();
var analyser = ctx.createAnalyser();
source = ctx.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(ctx.destination);
var fqcArray = new Uint8Array(analyser.frequencyBinCount);
var bigger = 0;
var elements = [].slice.call(document.getElementsByClassName('grid__item__inside'));

function frameLooper(){
  loop = requestAnimationFrame(frameLooper);

  analyser.getByteFrequencyData(fqcArray);
  //console.log(fqcArray);
  for (var i = 0; i < elements.length; i++) {
    var size = ((fqcArray[i]*fqcArray[i]) - 1000) / 900;
    elements[i].style.transform = "scale("+size+")";
    if (fqcArray[i] > bigger) {
      bigger = fqcArray[i];
    }
  }
  document.getElementById('big').innerHTML = bigger;
}


frameLooper();
