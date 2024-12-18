function redimensionaBarra(){
    if(!medio.ended)
        {
        var maximo=parseInt(getStyle('barra', "width"));
        var total=parseInt(medio.currentTime*maximo / medio.duration);
        progreso.style.width=total+'px';
        }
        else
        {
        progreso.style.width='0px';
        play.value='\u25BA';
        window.clearInterval(bucle);
        }
}

function desplazarMedio(e){
    if(!medio.paused && !medio.ended)
        {
        var ratonX=e.pageX-barra.offsetLeft;
        var maximo=parseInt(getStyle('barra', "width"));
        var nuevoTiempo=ratonX*medio.duration/maximo;
        medio.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+'px';
        }
}

function getStyle(nombreElemento, nombrePropiedad)
{
var elemento = document.getElementById(nombreElemento);
return window.getComputedStyle(elemento,null).getPropertyValue(nombrePropiedad);
}

function accionPlay(){

if(!medio.paused && !medio.ended){
medio.pause();
play.value='\u25BA';
window.clearInterval(bucle);
}else{
medio.play();
play.value='||';
bucle=setInterval(redimensionaBarra, 1000);
}
}

function reiniciar(){
    medio.currentTime=0;
    progreso.style.width='0px';
    play.value='\u25BA';
    window.clearInterval(bucle);
    bucle=setInterval(redimensionaBarra, 1000);
}

function retrasarMedio(){
    medio.currentTime-=5;
    progreso.style.width=(parseInt(progreso.style.width)-5)+'px';
}

function adelantarMedio(){
    medio.currentTime+=5;
    progreso.style.width=(parseInt(progreso.style.width)+5)+'px';
}

function silenciarMedio(){
    if(medio.muted==false){
    medio.muted=true;
    silenciar.value="escuchar";
    }else{
    medio.muted=false;
    silenciar.value="silenciar";
    }
}

function subirVolumen(){
    if(medio.volume<1){
        medio.volume+=0.1;
        }
}

function bajarVolumen(){
    if(medio.volume>0){
        medio.volume-=0.1;
        }
}

function iniciar(){
maximo=700;
medio=document.getElementById('medio');
barra=document.getElementById('barra');
progreso=document.getElementById('progreso');
play=document.getElementById('play');
reinicio = document.getElementById('reiniciar');
retraso = document.getElementById('retrasar');
adelantar = document.getElementById('adelantar');
silenciar = document.getElementById('silenciar');
masVolumen =  document.getElementById('masVolumen');
menosVolumen =  document.getElementById('menosVolumen');
 /* obtener los objetos del resto de elementos necesarios */
play.addEventListener('click', accionPlay, false);
reinicio.addEventListener('click', reiniciar, false);
retraso.addEventListener('click', retrasarMedio, false);
adelantar.addEventListener('click', adelantarMedio, false);
silenciar.addEventListener('click', silenciarMedio, false);
masVolumen.addEventListener('click', subirVolumen, false);
menosVolumen.addEventListener('click', bajarVolumen, false);
/* crear los manejadores de eventos para el resto de botones */
barra.addEventListener('click', desplazarMedio, false);
}
window.addEventListener('load', iniciar, false);