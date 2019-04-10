var now=-1;
var pic = document.getElementsByClassName('pic');
var des = document.getElementsByClassName('des');
for (var i = 0; i < pic.length; i++) {
    pic[i].index=i;
    pic[i].onclick = function(){
        if (now!=-1){
            des[now].style.display='none';
        }
        if (now!=this.index){
            des[this.index].style.display='inline-block';
            now = this.index;
        }
        else{
            now=-1;
        }
    }
}