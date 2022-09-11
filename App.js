const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total')
const movieselect = document.getElementById('movie');

let ticketprice = +movieselect.value;

// update count and total

function updateSeelectdCount(){
    const selectedSeat = document.querySelectorAll('.row .seat.selected')
    const selectedSeatCount = selectedSeat.length;

    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketprice;

}
// movie select
movieselect.addEventListener('change', (e)=>{
    e.preventDefault();
    ticketprice = +e.target.value;
    updateSeelectdCount();
})
 


container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected');
      
    }

    updateSeelectdCount();

});



