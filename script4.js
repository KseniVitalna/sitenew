let imge = document.querySelectorAll(".imge");
let numberimg = 0;

function currentimg(index){
	for (let i=0; i<imge.length;i++){
	if (index=== i){
		imge[i].style.display = "block";
	}
	else{
		imge[i].style.display = "none";
	}
}
}

function next(){
	numberimg = (numberimg+1)%imge.length;
	currentimg(numberimg);
}

function prew(){
	numberimg = (numberimg-1+imge.length)%imge.length;
	currentimg(numberimg);
}

currentimg(numberimg);