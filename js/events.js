window.addEventListener('DOMContentLoaded', function () {
    
    var list = [];
    var name = document.querySelector('#name');
    var price = document.querySelector('#price');
    var tableTr = document.querySelector('#table');
    var all = document.querySelector('#all');
    var editName = document.querySelector('#editName');
        
    
    name.addEventListener('keypress', function(e) {
        
        var key = e.which || e.keyCode;
        if (key === 13) {
            var row = read();
            if(row.name==''){
             return;   
            }
            var template = getBirthdayTemplate(row);
            var birthdayDomElement = document.createElement('tr');
            
            if(tableTr.childNodes.length>2)
                tableTr.removeChild(tableTr.lastChild);
            
            list.push(row);
            birthdayDomElement.innerHTML = template;
            tableTr.appendChild(birthdayDomElement);
             
            
            var summaryRow = document.createElement('tr');
            var summeryTd = {
                    name: 'Total',
                    price: 0,
                    count: list.length
            };
            summeryTd.price = getAllPrice(list);
             var summeryTemplate = getLastRow(summeryTd);
            summaryRow.innerHTML = summeryTemplate;
            tableTr.appendChild(summaryRow);
            
            name.value="";
            
            var removeBtn = birthdayDomElement.querySelector('.delete');
            removeBtn.addEventListener('click', function() {
            var index = list.indexOf(row);
            if (index >= 0) {
                list.splice(index, 1);
            }
            
            tableTr.removeChild(birthdayDomElement);
            
            if(tableTr.childNodes.length>2)
                tableTr.removeChild(tableTr.lastChild);
            
            var summaryRow = document.createElement('tr');
            var summeryTd = {
                    name: 'Total',
                    price: 0,
                    count: getAllElements(list)
                };
            summeryTd.price = getAllPrice(list);
            var summeryTemplate = getLastRow(summeryTd);
            summaryRow.innerHTML = summeryTemplate;
            tableTr.appendChild(summaryRow);      
        });
        
        var editBtn = birthdayDomElement.querySelector('.edit');
            editBtn.addEventListener('click', function() {
                editName.value = row.name;
                 editName.addEventListener('keypress', function(e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                            birthdayDomElement.childNodes[0].innerHTML = editName.value;
                        return;
                        }
                });
            });
            
        
        var up = birthdayDomElement.querySelector('.up');
        up.addEventListener('click', function() {
            var value = birthdayDomElement.childNodes[1].childNodes[0].nodeValue;
            value++;
            birthdayDomElement.childNodes[1].childNodes[0].nodeValue = value;
            
            row.price = row.primary*value;
            row.count = value;
            birthdayDomElement.childNodes[2].childNodes[0].nodeValue= row.price;
            
            var index = list.indexOf(row);
            list[index].count = value;
            
            tableTr.lastChild.childNodes[1].childNodes[0].nodeValue = getAllElements(list);
            tableTr.lastChild.childNodes[2].childNodes[0].nodeValue=getAllPrice(list);

        });
        
        var down = birthdayDomElement.querySelector('.down');
        down.addEventListener('click', function() {
            var value = birthdayDomElement.childNodes[1].childNodes[0].nodeValue;
            if(value==1){
                return;
            }
            value--;
            birthdayDomElement.childNodes[1].childNodes[0].nodeValue = value;
            
            row.price = row.price - row.primary;
            row.count = value;
            birthdayDomElement.childNodes[2].childNodes[0].nodeValue= row.price;
            
            tableTr.lastChild.childNodes[1].childNodes[0].nodeValue = getAllElements(list);
            tableTr.lastChild.childNodes[2].childNodes[0].nodeValue=getAllPrice(list);
            
        });     
    }
    });
});
