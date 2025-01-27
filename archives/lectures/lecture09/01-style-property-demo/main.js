
const changeBg = (sel, color) => {
    // your code here...
    document.querySelector(sel).style.backgroundColor = color;
};

const clearBgs = () => {
    const divs = document.querySelectorAll('.my-section');
    for(const div of divs) {
        div.style.backgroundColor = 'transparent';
    }
    //WRONG//
    // document.querySelectorAll('.my-section').style.backgroundColor = 'transparent';
}