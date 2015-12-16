function getBirthdayTemplate(obj) {
    var all = obj.count * obj.price;
    return  "<td>" +obj.name + "</td><td class='tdMiddle'>" + obj.count + "<img src='./image/plus.png' class='up'><img src='./image/minus.png' class='down'></td><td>"+all+"</td><td><img src='./image/delete.png' class='delete'><img               src='./image/edit.png' class='edit'>";
}

function getLastRow(obj) {
    var all = obj.price;
    return  "<td>" +obj.name + "</td><td>" + obj.count + "</td><td>"+all+"</td><td></td>";
}

function getAllPrice(list){
    
     var v = 0;
    for(var i=0;i<list.length;i++){
        v += parseInt(list[i].price);
    }
     return v;
}

function getAllElements(list){
    
     var v = 0;
    for(var i=0;i<list.length;i++){
        v += parseInt(list[i].count);
    }
     return v;
}