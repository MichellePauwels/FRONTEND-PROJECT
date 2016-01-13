var ValidateModule = function ()
{
    console.log('initOut');

    var form;

    function init()
    {
        console.log('initIn');

        form = document.getElementsByTagName("form")[0];
        form.name = document.getElementById('name');
        form.question = document.getElementById('question');
        form.email = document.getElementById('email');
        form.submitButton = document.getElementById('submitButton');

        var arrElements = [form.name, form.email, form.question];

        for (var element in arrElements)
        {
            arrElements[element].addEventListener("focus", showFocus(element));
        }

        form.submitButton.addEventListener("click", function (event) { return validate(event); });
        form.action = "javascript:alert('verzonden');window.location = this.location";
    }

    var showFocus = function (element)
    {
        element.className = 'has-warning';
    };

    var validate = function (event)
    {
        if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }

        //validaties
        var arrElements = [form.name, form.email, form.question];

        for (element in arrElements)
        {
            arrElements[element].valid = isRequiredField(arrElements[element]);
            arrElements[2].valid = isValidEmail(arrElements[2].value);
            console.log(arrElements[2].value);
        }

        if (form.name.valid && form.email.valid && form.question.valid) { form.submit(); }
    };

    var isRequiredField = function (element)
    {
        if (element)
        {
            if (element.value === '')
            {
                element.className = 'has-error';
                return false;
            }

            else
            {
                element.className = 'has-success';
                return true;
            }
        }
    };

    var isValidEmail = function (email)
    {
        if (email)
        {
            if (email.value === '')
            {
                email.className = 'has-error';
                return false;
            }

            else
            {
                if(validateEmail(email))
                {
                    email.className = 'has-success';
                    return true;
                }

                else
                {
                    email.className = 'has-error';
                    return false;
                }
            }
        }
    };

    function validateEmail(email)
    {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return{
        init: init
    };
};

var foo = ValidateModule();
foo.init();

document.removeEventListener('focus', addScript, true);
