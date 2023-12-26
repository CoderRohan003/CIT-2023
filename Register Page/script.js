function autoFillYear() {
    var inputValue = document.getElementById('yearInput').value;

    if (inputValue.endsWith('1')) {
        document.getElementById('yearInput').value = '1st year';
    }
    if (inputValue.endsWith('2')) {
        document.getElementById('yearInput').value = '2nd year';
    }
    if (inputValue.endsWith('3')) {
        document.getElementById('yearInput').value = '3rd year';
    }
    if (inputValue.endsWith('4')) {
        document.getElementById('yearInput').value = '4th year';
    }
}


/* .back button{
    border: 0;
    outline: 0;
    background: #ebfffc;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    position: absolute;
    top: 105px;
    right: 80px;
    background: transparent;
}

.back button img{
    width: 25px;
} */