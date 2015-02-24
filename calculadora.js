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
  if(resultado1!=null){
	bandatos=1;
	document.getElementById("result").value = "";		
	if(oper!=10){operador = oper;}
	if(ban==1)
	{
		if(operador==1 && resultado2!= null)	{
			r = parseFloat(resultado1+resultado2);
			document.getElementById("result").value = r;
		}		
    	else if (operador==2 && resultado2!= null){
			r = parseFloat(resultado1-resultado2);					
			document.getElementById("result").value = r;	 		
		}
		else if (operador==3 && resultado2!= null){
			r = parseFloat(resultado1*resultado2);
			
			document.getElementById("result").value = r;	 		
		}
		else if (operador==4 && resultado2!= null){
			if(resultado2==0)
			{
				document.getElementById("result").value ="Error de division entre 0";
			}
			else{
				r = parseFloat(resultado1/resultado2);					
				document.getElementById("result").value = r;	 		
			}	
		}
		resultado1=r;
		resultado2= null;			
	}		  	
	ban=1;	
  }
}

function reiniciar(){
	resultado1=null;
	ban=0; r=0; operador=0; bandatos=0;
	document.getElementById("result").value ="";
}
