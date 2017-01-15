/*
* Extends String prototype.
*/

String.prototype.getWordsNumber = function(){
    var regex = /[A-Za-zÑñ_ÁÉÍÓÚáéíóú]+/g
    var result = this.match(regex)

    if(result)
        return result.length;
    return 0;
}

String.prototype.isEmail = function(){
    var regex = /^([A-Za-z])([A-Za-z\.\-_])+@([A-Za-z])([A-Za-z\.]+)\.([A-Za-z]){2,6}$/
    var result = this.match(regex)

    if(result)
        return true;
    return false;
}

String.prototype.isPhone = function(){
    var regex = /[0-9]{9}/
    var result = this.match(regex)

    if(result)
        return true;
    return false;
}



function initValidators(){
    var maxwordsFields = $('*[data-custom-validator=maxwords]');
    var emailFields = $('*[data-custom-validator=email]');
    var phoneFields = $('*[data-custom-validator=phone]');
    var dependientFields = $('*[data-dependient-field-selector]');

    function validateWordsNumber(event){
        var words = this.value.getWordsNumber();

        if(this.dataset.maxwords)
        {
            var isValid = words <= parseInt(this.dataset.maxwords);
            if(isValid)
                this.setCustomValidity('');
            else
                this.setCustomValidity('The words in field exceedes the max allowed')
        }
        else{
            console.error('Missing maxwords parameter. Use data-maxwords parameter in #' + this.id + ' element')
        }

        console.log(this.validity.valid)
    }

    function validateEmail(event){
        if(!this.value || this.value.isEmail())
            this.setCustomValidity('');
        else
            this.setCustomValidity('This value isn\'t allowed for email');
    }

    function validatePhone(event){
        if(!this.value || this.value.isPhone())
            this.setCustomValidity('');
        else
            this.setCustomValidity('This value isn\'t allowed for phone. The format is XXXXXXXXX');
    }

    function showOrHideDependingField(element){
        if(element.dataset.valueForShow)
            if(element.dataset.valueForShow == element.value)
                $(element.dataset.dependientFieldSelector).show().attr('required','required');
            else
                $(element.dataset.dependientFieldSelector).hide().removeAttr('required');
        else
            console.error('Missing valueForShow parameter. Use data-value-for-show parameter in #' + this.id + ' element')
    }

    function showOrHideDependingFieldEvent(event){
        showOrHideDependingField(this)
    }

    function showOrHideDependingFields(elements){
        for(var i = 0; i<elements.length; i++){
            showOrHideDependingField(elements[i]);
        }
    }

    maxwordsFields.on('change', validateWordsNumber);
    emailFields.on('change', validateEmail);
    phoneFields.on('change', validatePhone);
    dependientFields.on('change', showOrHideDependingFieldEvent);
    
    showOrHideDependingFields(dependientFields);
}

initValidators();