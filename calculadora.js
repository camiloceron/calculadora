var resultado1,resultado2;
var ban=0, r=0, operador=0,bandatos=0;
function mostrarMensaje(x){	
	if(ban==1 && operador!=6) //cuando hay un operador
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
			if(operador==20 && bandatos!=0)//x2. limpiar campo cuando presiono x2
			{
				document.getElementById("result").value="";
				content = "";
			}
			else{
				content = document.getElementById("result").value;
			}			
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

	if(ban==1 || operador==6 || operador==5 || operador==7 || operador==8 || operador==9)
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
		else if(operador==5){//raiz cuadrada
			r = parseFloat(Math.sqrt(resultado1));
			document.getElementById("result").value = r;
			operador=20;
		}
		else if(operador==6 && resultado1!=null && resultado2==null){//x2			
			r= parseFloat(resultado1*resultado1);
			document.getElementById("result").value = r;
			operador=20;
		}
		else if(operador==7 && resultado1!=null && resultado2==null){
			r = Math.sin(resultado1);
			document.getElementById("result").value = r;
			operador=20;
		}
		else if(operador==8 && resultado1!=null && resultado2==null){
			r = Math.cos(resultado1);
			document.getElementById("result").value = r;
			operador=20;
		}
		else if(operador==9 && resultado1!=null && resultado2==null){
			r = Math.tan(resultado1);
			document.getElementById("result").value = r;
			operador=20;
		}
		resultado1=r;
		resultado2= null;			
	}
	if(operador==20){
		ban=0;		
	}	
	else{ban=1;}		
  }
}

function reiniciar(){
	resultado1=null;
	ban=0; r=0; operador=0; bandatos=0;
	document.getElementById("result").value ="";
}
