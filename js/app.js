function addDetails() {
    console.log('Add button clicked');
    // Check if user has entered all required data
    // If not show error message
    // Else post it
    if (validateFirstName()) {
        $('#errForFirstName').hide();
        if (validateFullName()) {
            $('#errForFullName').hide();
            if (validateDesignation())  {
                $('#errForDesignation').hide();
                if (validateEmployee())  {
                    $('#errForEmployee').hide();
                    if (validateBlood())  {
                        $('#errForBlood').hide();
                        if (validateMobile())  {
                            $('#errForMobile').hide();
            postData();
            
            
             } 
             else {
                
                 displayErrorMessageForMobile();
                  }
                
                  }  else {
                
                 displayErrorMessageForBlood();
                  }
                 } else {
                
                 displayErrorMessageForEmployee();
                  }
                 } else {
           
            displayErrorMessageForDesignation();
             }
    }
        else {
           
            displayErrorMessageForFullName();
        }
     } else {
        
        displayErrorMessageForFirstName();
    }

 


}

function displayErrorMessageForFirstName() {
    $('#errForFirstName').show();
}


function displayErrorMessageForFullName() {
    $('#errForFullName').show();
}
function displayErrorMessageForDesignation() {
    $('#errForDesignation').show();
}
function displayErrorMessageForEmployee() {
    $('#errForEmployee').show();
}
function displayErrorMessageForBlood(){
    $('#errForBlood').show();
}
function displayErrorMessageForMobile(){
    $('#errForMobile').show();
}
function validateFirstName() {
    const firstName = $('#firstName').val();
    if (firstName === '') {
        return false;
    }
        else if(/^[A-Za-z\s]+$/.test(firstName))
            {
                 return true;
    }
   
}

function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '') {
        return false;
       
    } else if(/^[A-Za-z\s]+$/.test(fullName))
    {
         return true;
}
    
}
function validateDesignation(){
    const designation = $('#designation').val();
    if (designation === '') {
        return false;
    }
        else if(/^[A-Za-z\s]+$/.test(designation))
            {
                 return true;
    }
}
function validateEmployee(){
    const employee = $('#employee').val();
    if (employee === '') 
    {
        return false;
    }
 
        else if(/^[0-9\s]+$/.test(employee))
            {
                 return true;
    }
}
function validateBlood(){
    const blood = $('#blood').val();
    if (blood === '') {
        return false;
    }
        else if(/^[A-Za-z\s]+$/.test(blood))
            {
                 return true;
    }
}
function validateMobile(){
    const mobile = $('#mobile').val();
    if (mobile === '') 
    {
        return false;
    }
 
        else if(/^[0-9\s]+$/.test(mobile))
            {
                 return true;
    }
}

function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val(),
        designation: $('#designation').val(),
        employee: $('#employee').val(),
        blood: $('#blood').val(),
        mobile: $('#mobile').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://id-application-form.firebaseio.com/applicationIds.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    // Initialize
    $('.span-for-errors').hide();
});
