function read() {
    var nameInput = document.querySelector('#name');
    var priceInput = document.querySelector('#price');
      
    return {
        name: nameInput.value,
        price: priceInput.value,
        primary: priceInput.value,
        count: 1
    };
}

function readAll() {
    
    var nameInput = document.querySelector('#name');
    var priceInput = document.querySelector('#price');
      
    return {
        name: nameInput.value,
        price: priceInput.value,
        count: 1
    };
}

function editObject() {
    var firstNameInput = document.querySelector('#editTask');
      
    return {
        firstName: firstNameInput.value
    };
}
