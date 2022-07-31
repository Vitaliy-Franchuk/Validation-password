password.oninput = function () {
    text = password.value;
    // Перевірка на довжину
    if (password.value.length >= 6 && password.value.length <= 20) {
        checkLen.style.color = 'green';      
    } else {
        checkLen.style.color = 'red';
    }
    // Перевірка на малі букви
    if(checkLow(text)){
        checkToLow.style.color = 'green';
    }else{
        checkToLow.style.color = 'red';
    }
    // Перевірка на великі букви
    if(checkUpper(text)){
        checkToUp.style.color = 'green';
    }else{
        checkToUp.style.color = 'red';
    }
    // Перевірка на цифри
    if(checkNumber(text)){
        checkNum.style.color = 'green'
    }else{
        checkNum.style.color = 'red'
    }
    // Перевірка на символи
    if(checSpecialSymbols(text)){
        checkSymbols.style.color = 'green'
    }else{
        checkSymbols.style.color = 'red'
    }
    // Загальна перевірка на валідність

        if(validPassword() == 1){
            weak.style.display = 'flex'
        }else if(validPassword() == 2){
            medium.style.display = 'flex'
        }else if(validPassword() == 3){
            reliable.style.display = 'flex'
        }
    }
    

function checkNumber(password) {
            let count = 0;
            for (let i = 0; i < password.length; i++) {
                if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
                    count++;
                }
            }
            if (count == 0) {
                return false;
            } else {
                return true;
            }
        }

        function checSpecialSymbols(password) {
            let count = 0;
            let symbols = ['!', '@', '#', '$', '%', 'ˆ', '&', '*'];

            for (let i = 0; i < password.length; i++) {
                for (let j = 0; j < symbols.length; j++) {
                    if (password[i] == symbols[j]) {
                        count++;
                    }
                }
            }
            if (count > 0) {
                return true;
            } else {
                return false;
            }
        }

        function checkLow(password) {
            let count = 0;
            for (let i = 0; i < password.length; i++) {
                if (!checSpecialSymbols(password[i]) && !checkNumber(password[i])) {
                    if (password[i] == password[i].toLowerCase()) {
                        count++;
                    }
                }
            }
            if (count == 0) {
                return false;
            } else {
                return true;
            }
        }
        function checkUpper(password) {
            let count = 0;
            for (let i = 0; i < password.length; i++) {
                if (!checSpecialSymbols(password[i]) && !checkNumber(password[i])) {
                    if (password[i] == password[i].toUpperCase()) {
                        count++;
                    }
                }
            }
            if (count == 0) {
                return false;
            } else {
                return true;
            }
        }
        function checkNumber(password) {
            let count = 0;
            for (let i = 0; i < password.length; i++) {
                if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
                    count++;
                }
            }
            if (count == 0) {
                return false;
            } else {
                return true;
            }
        }
        function checSpecialSymbols(password) {
            let count = 0;
            let symbols = ['!', '@', '#', '$', '%', 'ˆ', '&', '*'];

            for (let i = 0; i < password.length; i++) {
                for (let j = 0; j < symbols.length; j++) {
                    if (password[i] == symbols[j]) {
                        count++;
                    }
                }
            }
            if (count > 0) {
                return true;
            } else {
                return false;
            }
        }
        function validPassword(password) {
            let res = {
                passLow: checkLow(password),
                passUpp: checkUpper(password),
                passNum: checkNumber(password),
                passSpecial: checSpecialSymbols(password)
            };

            console.log(Object.values(res));
            let arrVal = Object.values(res);
            let count = 0;
            for (let i = 0; i < arrVal.length; i++) {
                if (arrVal[i] == true) {
                    count++;
                }
            }
            console.log(count);
            //            2- невалідний пароль
            //            3 - слабкий
            //            4 - середній
            //            5 - надійний
        }

 
    
        




