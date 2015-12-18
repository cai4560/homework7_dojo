function scoreToGrade(score){
	if(typeof(score) == "number" && score != null){	
		if(0 <=score && score <60)
		  return 'D';
		else if(60 <=score && score <70)
		  return 'C';
		else if(70 <=score && score <80)
		  return 'B';
		else if(80 <=score && score <90)
		  return 'A';
		else if(90 <=score && score <100)
		   return 'S';
		else
		   return "Out of input range";
	}
	else
		return "Error input type";
		
}
