const event = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const Number = document.querySelector("#number")
    const value = Number.value;
    console.log(value);

    let primo = true;
    if (value <= 1) {
        primo = false;
    }else{
        for (let i = 2; i < value; i++) {
            if (value % i == 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        let result = document.querySelector("#result");
        result.innerHTML = "O número " + value +  " é primo";
}else{
    result.innerHTML = "O número " + value +  " não é primo";
}
});

 