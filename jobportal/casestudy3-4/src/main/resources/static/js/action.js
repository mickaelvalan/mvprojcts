var selectedRow = null

function onFormSubmit() {
    if (validateid()) {
		
      }
    else{
          event.preventDefault();
      }  
      
      if (validatenames()) {
		
      }
    else{
          event.preventDefault();
      }  
      
      if (validateage()) {
		
      }
      
        else{
          event.preventDefault();
      } 
      
       if (validatework()) {
		
      }
    else{
          event.preventDefault();
      }   
      
      if (validateemail()) {
		
      }
      
        else{
          event.preventDefault();
      }  
      
       if (validateexperience()) {
		
      }
      
        else{
          event.preventDefault();
      }      

}




function validateid() {
	
    isValid = true;
 
 if(document.getElementById("id").value != "")
 {
	
	var id= document.getElementById("id").value.trim();
	var pattan=/^[0-9]+$/;
   if(id.match(pattan))
      {
		  isValid = true;
		if (!document.getElementById("idValidationError").classList.contains("hide"))
            document.getElementById("idValidationError").classList.add("hide");
	}
	
     else {
       isValid = false;
        
            document.getElementById("idValidationError").classList.remove("hide");
    }
   
}
if(document.getElementById("id").value == "")
 {
	 
	  isValid = false;
        
            document.getElementById("idValidationError").classList.remove("hide");
 }
 return isValid;
}


function validatenames() {
	
    isValid = true;
 
 if(document.getElementById("names").value != "")
 {
	
	var names= document.getElementById("names").value.trim();
	var pattan=/^[a-zA-Z]*$/;
   if(names.match(pattan))
      {
		  isValid = true;
		if (!document.getElementById("namesValidationError").classList.contains("hide"))
            document.getElementById("namesValidationError").classList.add("hide");
	}
	
     else {
       isValid = false;
        
            document.getElementById("namesValidationError").classList.remove("hide");
    }
   
}
if(document.getElementById("names").value == "")
 {
	 
	  isValid = false;
        
            document.getElementById("namesValidationError").classList.remove("hide");
 }
 return isValid;
}





function validateage() {
	
    isValid = true;
 
 if(document.getElementById("age").value != "")
 {
	
	var id= document.getElementById("age").value.trim();
	var pattan=/^[0-9]+$/;
   if(id.match(pattan))
      {
		  isValid = true;
		if (!document.getElementById("ageValidationError").classList.contains("hide"))
            document.getElementById("ageValidationError").classList.add("hide");
	}
	
     else {
       isValid = false;
        
            document.getElementById("ageValidationError").classList.remove("hide");
    }
   
}
if(document.getElementById("age").value == "" || document.getElementById("age").value<=18|| document.getElementById("age").value>=58 )
 {
	 
	  isValid = false;
        
            document.getElementById("ageValidationError").classList.remove("hide");
 }
 return isValid;
}



function validatework() {
	
    isValid = true;
 
 if(document.getElementById("work").value != "")
 {
	
	var work= document.getElementById("work").value.trim();
	var pattan=/^[a-zA-Z]*$/;
   if(work.match(pattan))
      {
		  isValid = true;
		if (!document.getElementById("workValidationError").classList.contains("hide"))
            document.getElementById("workValidationError").classList.add("hide");
	}
	
     else {
       isValid = false;
        
            document.getElementById("workValidationError").classList.remove("hide");
    }
   
}
if(document.getElementById("work").value == "")
 {
	 
	  isValid = false;
        
            document.getElementById("workValidationError").classList.remove("hide");
 }
 return isValid;
}

function validateemail() {
	
    isValid = true;
 
 if(document.getElementById("email").value != "")
 {
	
	var email= document.getElementById("email").value.trim();
	var pattan=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
   if(email.match(pattan))
      {
		  isValid = true;
		if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
	}
	
     else {
       isValid = false;
        
            document.getElementById("emailValidationError").classList.remove("hide");
    }
   
}
if(document.getElementById("email").value == "")
 {
	 
	  isValid = false;
        
            document.getElementById("emailValidationError").classList.remove("hide");
 }
 return isValid;
}



function validateexperience() {
	
    isValid = true;
 
 if(document.getElementById("experience").value != "")
 {
	
	var experience= document.getElementById("experience").value.trim();
	var pattan=/^[0-9]+$/;
   if(experience.match(pattan))
      {
		  isValid = true;
		if (!document.getElementById("experienceValidationError").classList.contains("hide"))
            document.getElementById("experienceValidationError").classList.add("hide");
	}
	
     else {
       isValid = false;
        
            document.getElementById("experienceValidationError").classList.remove("hide");
    }
   
}
if(document.getElementById("experience").value == "" || document.getElementById("experience").value<0|| document.getElementById("experience").value>=50 )
 {
	 
	  isValid = false;
        
            document.getElementById("experienceValidationError").classList.remove("hide");
 }
 return isValid;
}



  

