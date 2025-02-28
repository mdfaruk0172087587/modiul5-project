const colorBox = document.querySelectorAll('.color-box')
for(const color of colorBox){
    const colorRadio = color;
    colorRadio.addEventListener('click', function(event){
        const colorName = event.target.id;
        for(const radio of colorBox) {
           radio.classList.remove('border-purple-800')
           radio.classList.add('border-gray-300')
        }
       event.target.classList.add('border-purple-800')
       event.target.classList.remove('border-gray-300')
      const productImage = document.getElementById('images-product');
      productImage.src = "../images/" + colorName + ".png";
    })
}
// btn click
function onClickBtn(size){
const array = ['S', 'M', 'L', 'XL']
for(const arr of array){
    const btn = document.getElementById(arr)
    const newArr = arr;
    if(newArr === size){
        btn.classList.add('border-blue-800')
    }
    else{
        btn.classList.remove('border-blue-800')
    }
}
} 

// - + btn
const quantityBtn= document.querySelectorAll('.btn-quantity')
for(const quantity of quantityBtn){
   const quantityButton =quantity;
   quantityButton.addEventListener('click', function(event){
   const value= event.target.innerText === '+' ? 1 : -1;
   const quantityNumber= parseInt(document.getElementById('quantity-number').innerText);
   const newQuantityNumber= Math.max(0,  value + quantityNumber);
   document.getElementById('quantity-number').innerText = newQuantityNumber;
   })
}