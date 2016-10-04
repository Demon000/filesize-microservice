var uploadb = document.querySelector('#upload');
var filei = document.querySelector('#file');
var namei = document.querySelector('#name');
var sizei = document.querySelector('#size');

filei.onchange = function() {
    namei.value = filei.files[0].name;
    sizei.value = `${filei.files[0].size} bytes`;
};
uploadb.onclick = function() {
    filei.click();
};