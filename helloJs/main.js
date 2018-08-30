var btnAdd = document.getElementById('btnAdd');
var ultag = document.getElementById('todolist');
var inputText = document.getElementById('inputText');
var donelist = document.getElementById('donelist');

var totalItems = 0 ; // 카운트 변수

//처음 브라우저에 화면이 뜨면 검색창에 검색 줄이 생기게 만듦.
inputText.focus();

inputText.onkeyup = function(event){
    //13 -> enter Key를 의미, 엔터치면 이벤트 발생
    if(event.which === 13){
        var liText =  inputText.value;
        if(!liText || liText === " " || !liText ==="")
        return false;
        todolist(ultag, liText);
        inputText.focus();
    }
}

//버튼 클릭시 이벤트 발생
btnAdd.onclick = function(){

    var liText =  inputText.value;
    if(!liText || liText === " " || !liText ==="")
        return false;

    todolist(ultag, liText);
};

function updateItemStatus(){
    //checkBox의 id값에서 숫자만 추출
    var cbId = this.id.replace('cb_', '');
    //추출한 값과 item_을 합해 span태그의 아이디와 동일하게 처리
    var itemText  = document.getElementById('item_' + cbId);
    //this는 체크박스를 의미한다. 체크박스가 클릭되면
    if(this.checked){
        //span태그의 클래스 이름을 checked로 명시하고 css 적용
        itemText.className = 'checked';
    }else{
        itemText.className = '';
    }
}

function renameItem(){
    //prompt->입력창을 띄운 후 값을 nextText에 저장
    var newText = prompt("what should this item be renamed to?");
    if(!newText || newText === "" || newText === " ") return false;
    
    //this는 span을 가르킨다.
    //this.innerText = newText;

    var spanId = this.id.replace('pencilIcon_','')
    var span = document.getElementById('item_' + spanId);
    
    span.innerText = newText;
}

function moveItem(){
    var listItemId = this.id.replace('li_', '');
    var listItem = document.getElementById('li_' + listItemId);
    var listItemParentId = listItem.parentElement;
    if(listItemParentId == donelist){
        ultag.appendChild(listItem);
    }else{
       donelist.appendChild(listItem);
    }
    
}

function removeItem(){
    //this는 li태그를 가르킨다.
    var listItemId = this.id.replace('minusIcon_', '');
    document.getElementById('li_' + listItemId).style.display = "none";
    // display:none을 설정하여 li태그를 감춤.
}

function todolist(list, liText){
    totalItems++;

    var addLi = document.createElement('li');
    addLi.id = 'li_' + totalItems;
    addLi.ondblclick = moveItem; // double click 시 removeItem 함수를 불러온다.

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'cb_' + totalItems;
    checkBox.onclick = updateItemStatus; //click하면 updateItemStatus 함수를 불러온다.

    var span = document.createElement('span');
    span.id = 'item_' + totalItems;
    span.innerText = liText;
    // span.onclick = renameItem; 
    
    var pencilIcon = document.createElement('i');
    pencilIcon.id = 'pencilIcon_' + totalItems;
    pencilIcon.className = 'fas fa-pen-square';
    pencilIcon.onclick = renameItem; // clcik하면 renameItem 함수를 불러온다.

    var minusIcon = document.createElement('i');
    minusIcon.id = 'minusIcon_' + totalItems;
    minusIcon.className= 'fas fa-minus-circle';
    minusIcon.onclick = removeItem;

    addLi.appendChild(checkBox);
    addLi.appendChild(span);
    addLi.appendChild(minusIcon);
    addLi.appendChild(pencilIcon);
    list.appendChild(addLi);
 }