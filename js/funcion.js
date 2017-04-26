// JavaScript Document
function Resolver (operador)
{
	var F1=new Array(2);
	var F2=new Array(2);
	var R=new Array(2);
	var h=new Array(2);
	var resultado1=new Array(1);
	var resultado2=new Array(1);
	F1[0]=document.getElementById("X1").value;
	F2[0]=document.getElementById("X2").value;
	F1[1]=document.getElementById("Y1").value;
	F2[1]=document.getElementById("Y2").value;
			switch (operador)
	{
		case '=':
				document.getElementById("operador")
				h[0]=F2[0]-F1[0];
				h[1]=F2[1]-F1[1];
				R[0]=h[0]*h[0];
				R[1]=h[1]*h[1];
				resultado1[0]=R[0]+R[1];
				resultado2[0]=Math.sqrt(resultado1);
				break;
					case 'b':
				document.getElementById("operador")
				document.getElementById("X1").value="";
				document.getElementById("X2").value="";
				document.getElementById("Y1").value="";
				document.getElementById("Y2").value="";
				
				resultado1[0]="";
				break;
				
	}
	document.getElementById("R1").value=resultado2[0];


}