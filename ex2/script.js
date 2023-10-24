/*
    cinque -> false
        primer -> true
            quart -> false
                segon -> true
                    tercer -> true
*/

document.querySelector("#primer").addEventListener("click", informar, true);
document.querySelector("#segon").addEventListener("click", informar, true);
document.querySelector("#tercer").addEventListener("click", informar, true);
document.querySelector("#quart").addEventListener("click", informar, false);
document.querySelector("#cinque").addEventListener("click", informar, false);

function informar() {
    alert(this.id);
}