    $("input").addClass("border border-dark");
    function submitFunction()
    {
        var name = $("#name").val();
        var patternName = /^[A-Za-z ]{0,50}$/i;
        var surname = $("#surname").val();
        var number = $("#number").val(); 
        var patternNumber = /(7|8|9)\d{9}/;
        var address = $("#address").val(); 
        var patternAddress = /^[#.0-9a-zA-Z\s,-]+$/; 
        var email = $("#email").val();
        var patternEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
        var education = $("#education").val();
        var country = $("#country").val();
        var state = $("#stateregion").val();
        var password = $("#password").val();

        if(name.trim() == "") 
        {     
            $("#nameError").fadeIn().html("Please Enter Name");     
            setTimeout(function(){$("#nameError").fadeOut();}, 3000);
            $("#name").focus();  
            return false;        
        }
        else if(!patternName.test(name)) 
        {     
            $("#name-error").fadeIn().html("Enter Valid Name");        
            setTimeout(function(){$("#name-error").fadeOut();}, 3000);
            $("#name").focus(); 
            return false; 
        }

        if(surname.trim() == "") 
        {     
            $("#surnameError").fadeIn().html("Enter Surname");     
            setTimeout(function(){$("#surnameError").fadeOut();}, 3000);
            $("#surname").focus();  
            return false;        
        }
        else if(!patternName.test(surname)) 
        {     
            $("#surnameError").fadeIn().html("Enter Valid Surname");       
            setTimeout(function(){$("#surnameError").fadeOut();}, 3000);
            $("#surname").focus(); 
            return false; 
        }
        
        if(number.trim() == "") 
        {     
            $("#numberError").fadeIn().html("Please Enter Number");     
            setTimeout(function(){$("#numberError").fadeOut();}, 3000);
            $("#number").focus();   
            return false;         
        }
        else if(!patternNumber.test(number))  
        {     
            $("#numberError").fadeIn().html("Please Enter Valid Number");       
            setTimeout(function(){$("#numberError").fadeOut();}, 3000);
            $("#number").focus();  
            return false; 
        }

        if(address.trim() == "") 
        {     
            $("#addressError").fadeIn().html("Please Enter Address");     
            setTimeout(function(){$("#addressError").fadeOut();}, 3000);
            $("#address").focus();   
            return false;         
        }
        else if(!patternAddress.test(number))   
        {     
            $("#addressError").fadeIn().html("Please Enter Valid Address");       
            setTimeout(function(){$("#addressError").fadeOut();}, 3000);
            $("#address").focus();   
            return false; 
        }

        if(email.trim() == "")
        {     
            $("#emailError").fadeIn().html("Please Enter Email");     
            setTimeout(function(){$("#emailError").fadeOut();}, 3000);
            $("#email").focus();  
            return false;      
        }
        else if(!patternEmail.test(email)) 
        {     
            $("#emailError").fadeIn().html("Please Enter Valid Email");        
            setTimeout(function(){$("#emailError").fadeOut();}, 3000);
            $("#email").focus(); 
            return false; 
        }

        if(education.trim() == "") 
        {      
            $("#educationError").fadeIn().html("Please Enter Education");     
            setTimeout(function(){$("#educationError").fadeOut();}, 3000);
            $("#education").focus();  
            return false;         
        }
        else if(!patternName.test(education))  
        {     
            $("#educationError").fadeIn().html("Please Enter Valid Education");       
            setTimeout(function(){$("#educationError").fadeOut();}, 3000);
            $("#education").focus(); 
            return false; 
        }

        if(country.trim() == "") 
        {     
            $("#countryError").fadeIn().html("Enter Country");     
            setTimeout(function(){$("#countryError").fadeOut();}, 3000);
            $("#country").focus();   
            return false;         
        }
        else if(!patternName.test(country))  
        {     
            $("#countryError").fadeIn().html("Enter Valid Country");       
            setTimeout(function(){$("#countryError").fadeOut();}, 3000);
            $("#country").focus(); 
            return false; 
        }

        if(state.trim() == "")  
        {      
            $("#stateregionError").fadeIn().html("Enter State");     
            setTimeout(function(){$("#stateregionError").fadeOut();}, 3000);
            $("#stateregion").focus();   
            return false;         
        } 
        else if(!patternName.test(state))   
        {     
            $("#stateregionError").fadeIn().html("Enter Valid State");     
            setTimeout(function(){$("#stateregionError").fadeOut();}, 3000);
            $("#stateregion").focus();   
            return false; 
        }
    } 

    function submitexpFunction()
    {
        var exp = $("#experience").val();
        var addde = $("#adddetails").val();
        var patternAdd = /^[A-Za-z ]{0,50}$/i; 
        if( exp.trim() == "") 
        {
            $("#experienceError").fadeIn().html("Please Enter Experience");     
            setTimeout(function(){$("#experienceError").fadeOut();}, 3000);
            $("#experience").focus();    
            return false;
        }

        if(addde.trim() == "")
        {
            $("#adddetailsError").fadeIn().html("Please Enter Additional Details");     
            setTimeout(function(){$("#adddetailsError").fadeOut();}, 3000);
            $("#adddetails").focus();    
            return false;
        }

        else if(!patternAdd.test(addde))    
        {
            $("#adddetailsError").fadeIn().html("Please Enter Additional Details");     
            setTimeout(function(){$("#adddetailsError").fadeOut();}, 3000);
            $("#adddetails").focus();    
            return false;
        }
    }
