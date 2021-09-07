function Validator(options){
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        };
    };
    let selectorRules = {};
    function Validate(inputElement , rule){
        const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        let errorMessage ;
        const rules = selectorRules[rule.selector];
        for(let i=0; i<rules.length; i++){
            switch(inputElement.type){
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            };
            if(errorMessage){
                break;
            };
        };
        if(errorMessage){
            errorElement.textContent = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }else{
            errorElement.textContent = undefined;
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }
        return !errorMessage;
    };
    function Inputing(inputElement){
        const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        errorElement.textContent = undefined;
        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
    };
    const formElement = document.querySelector(options.form);
    const errorNotify = document.querySelector(options.errorNotify);
    if(formElement){
        formElement.onsubmit = (e) =>{
            e.preventDefault();
            let isFormValid = true;
            options.rules.forEach((rule) =>{
                const inputElement = formElement.querySelector(rule.selector);
                let isValid = Validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                };
            });
            if(isFormValid){
                formElement.submit();
            }else{
                errorNotify.classList.add('active');
            }
        };
        options.rules.forEach((rule) =>{
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }
            const inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach((inputElement) =>{
                inputElement.onblur = () =>{
                    Validate(inputElement, rule)
                }
                inputElement.oninput = () =>{
                    Inputing(inputElement)
                }
            });
            
        });
    };
};
Validator.isRequired = (selector, errorContent, action) => {
    return {
        selector,
        test(value){
            if(action === 'checked'){
                return value ? undefined : errorContent || 'Trường nhập này không đúng!';
            }
            return value.trim() ? undefined : errorContent || 'Trường nhập này không đúng!';
        }
    };
};
Validator.isEmail = (selector, errorContent) =>{
    return {
        selector,
        test(value){
            return regex.test(value) ? undefined : errorContent || 'Trường nhập này không đúng!';
        }
    };
};
Validator.minLength = (selector, min , errorContent)=>{
    return {
        selector,
        test(value){
            return value.trim().length>=min ? undefined : errorContent || 'Trường nhập này không đúng!';
        }
    };
};
Validator.isConfirmed = (selector , value2, errorContent) => {
    return {
        selector,
        test(value){
            return value.trim() === value2().trim() ? undefined : errorContent || 'Trường nhập này không đúng!';
        }
    };
};
