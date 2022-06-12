// Initial Declarations

var arr =[];
num = 0;

// Create todo item function

function createItem(itemtext){
    var node = document.createElement("li");
    var textnode = document.createTextNode(itemtext);
    node.appendChild(textnode);
    document.getElementById("items").appendChild(node);
}

// Event Listener for Button Click

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    link.addEventListener('click', function() {
        chrome.storage.local.get(null, function(items) {
                var haha = document.getElementById('myInput').value;
                if(haha){
                arr.push(haha);
                var allKeys = Object.keys(items);
                num = allKeys.length + 1;
                var key_num = 'key'+num;
                chrome.storage.local.set({[key_num] : haha});
                createItem(haha);
                }
            });
    });
});

// Get Values from localstorage and display in todo

chrome.storage.local.get(null, function(items) {
    var arr = Object.values(items);
    for(i=0;i<arr.length;i++){
        createItem(arr[i]);
    }
});

// clear item



// Clear Everything

function clearAll(){
    chrome.storage.local.clear();
}

// clearAll();
