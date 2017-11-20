function getE(id){
    return document.getElementById(id);}


document.querySelectorAll('.services-icon')[0].onclick=function(){
	var j=0;
	document.querySelectorAll('.services-blok2')[j].style.display = 'block';
	document.querySelectorAll('.services-blok3')[j].style.display = 'block';
	
	for(var i=0;i<4;i++){
		if(i!=j){
			debugger;
	document.querySelectorAll('.services-blok2')[i].style.display = 'none';
	document.querySelectorAll('.services-blok3')[i].style.display = 'none';}
	}	
};


document.querySelectorAll('.services-icon')[1].onclick=function(){
	var j=1;
	document.querySelectorAll('.services-blok2')[j].style.display = 'block';
	document.querySelectorAll('.services-blok3')[j].style.display = 'block';
	
	for(var i=0;i<4;i++){
		if(i!=j){
			debugger;
	document.querySelectorAll('.services-blok2')[i].style.display = 'none';
	document.querySelectorAll('.services-blok3')[i].style.display = 'none';}
	}	
};


document.querySelectorAll('.services-icon')[2].onclick=function(){
	var j=2;
	document.querySelectorAll('.services-blok2')[j].style.display = 'block';
	document.querySelectorAll('.services-blok3')[j].style.display = 'block';
	
	for(var i=0;i<4;i++){
		if(i!=j){
			debugger;
	document.querySelectorAll('.services-blok2')[i].style.display = 'none';
	document.querySelectorAll('.services-blok3')[i].style.display = 'none';}
	}	
};



document.querySelectorAll('.services-icon')[3].onclick=function(){
	var j=3;
	document.querySelectorAll('.services-blok2')[j].style.display = 'block';
	document.querySelectorAll('.services-blok3')[j].style.display = 'block';
	
	for(var i=0;i<4;i++){
		if(i!=j){
			debugger;
	document.querySelectorAll('.services-blok2')[i].style.display = 'none';
	document.querySelectorAll('.services-blok3')[i].style.display = 'none';}
	}	
};





