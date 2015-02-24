var resultado1,resultado2;
var ban=0, r=0, operador=0,bandatos=0;
function mostrarMensaje(x){	
	if(ban==1) //cuando hay un operador
	{
		if(document.getElementById("result").value != "" && bandatos==0)
		{
			content = document.getElementById("result").value;
		}
		else
		{		
			content = "";
		}
		document.getElementById("result").value = content+x;
		resultado2 =  parseInt(content+x);		
	}
	else{	
		if(document.getElementById("result").value != "")
		{
			content = document.getElementById("result").value;
		}
		else
		{		
			content = "";
		}
		document.getElementById("result").value = content+x;
		resultado1 =  parseInt(content+x);
	}
	bandatos=0;
}

function operacion(oper){
	bandatos=1;
	document.getElementById("result").value = "";		
	if(oper!=10){operador = oper;}
	
	if(ban==1)
	{
		if(operador==1)	{
			r = parseInt(resultado1+resultado2);
			document.getElementById("result").value = r;
		}		
    	if (operador==2){
			r = parseInt(resultado1-resultado2);					
			document.getElementById("result").value = r;	 		
		}
		resultado1=r;
		resultado2=0;			
	}		  	
	ban=1;

	if (oper==10) {
			document.getElementById("result").value = r;	
		}
}

function mostrarResultado(){
	/*if(operador==1)	{
		r = parseInt(resultado1+resultado2);
	}		
    if (operador==2){
		r = parseInt(resultado1-resultado2);	 		
	}*/
	document.getElementById("result").value = r;	
}