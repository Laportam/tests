let form = document.querySelector('form');
let products = document.querySelectorAll('.product-wrapper');

form.addEventListener('change', () => {
    let inputValues = form.querySelectorAll('.price input');
    let subTotal = 0;
    let subTotalHTML = document.querySelector('.subtotal p:nth-child(2)');
    let profit = document.querySelector('.profit input');
    
    for (let i = 0; i < inputValues.length; i++) {
        if(isNaN(parseInt(inputValues[i].value))){
            // Do nothing
        } else {
            subTotal += parseInt(inputValues[i].value)
        }
    };

    subTotalHTML.innerHTML = `
        ${subTotal.toLocaleString('es-ES')}
    `;

    if(isNaN(parseInt(profit.value))){
        console.log('Is NaN')
    } else {
        let profitPercentage = parseInt(profit.value) / 100;
        let profitReal = (profitPercentage * subTotal) + subTotal;
        let total = document.querySelector('.total p:nth-child(2)');

        total.innerHTML = `
            ${profitReal.toLocaleString('es-ES')}
        `;
    }
});


/*


form.addEventListener('change', () => {
    let inputValue = form.querySelectorAll('.input-value');
    let subtotal = 0;
    let sub = document.querySelector('.sub p:nth-child(2)');
    let ganancia = document.querySelector('.gan input');

    for (let i = 0; i < inputValue.length; i++) {
        if(isNaN(parseInt(inputValue[i].value))){
            // Do nothing
        } else {
            console.log(parseInt(inputValue[i].value));
            subtotal += parseInt(inputValue[i].value)
        }
    };

    sub.innerHTML = `
        $${subtotal.toLocaleString('es-ES')}
    `;

    if(isNaN(parseInt(ganancia.value))){
        console.log('Is NaN')
    } else {
        let porcentajeGanancia = parseInt(ganancia.value) / 100;
        let gananciaReal = (porcentajeGanancia * subtotal) + subtotal;
        let tot = document.querySelector('.tot p:nth-child(2)');

        tot.innerHTML = `
        $${gananciaReal.toLocaleString('es-ES')}
        `;
    }

    
})



// form.addEventListener('change', (e) => {
    
//     // let products = document.getElementsByName('product');
//     // let ganancia = document.querySelector('.gan input');
//     // let subtotal = document.getElementById('subtotal');
//     // let sub = document.querySelectorAll('.sub p:nth-child(2)');
//     // let tot = document.querySelector('.tot p:nth-child(2)');

    

//     // let inputs = document.getElementsByName('value');
//     // let total = 0;

//     // let gananciaValue = parseInt(ganancia.value);
//     // let percentage = gananciaValue / 100;
//     // // let subValue = parseInt(sub.innerHTML.trim().substring(1).split('.').join(''));
//     // // let valuePercentage = subValue * percentage;
//     // // let totalFinal = subValue + valuePercentage;


//     // for (let i = 0; i < inputs.length; i++) {
//     //     if(parseInt(inputs[i].value)){
//     //         total += parseInt(inputs[i].value);
//     //     }
//     // };

    
    
//     // sub.innerHTML = `
//     //     $${total.toLocaleString('es-ES')}
//     // `;

//     // tot.innerHTML = `
//     // $${totalFinal.toLocaleString('es-ES')}
//     // `;
// });





// let inputs = document.getElementsByName('value');
// let total = 0;

// let gananciaValue = parseInt(ganancia.value);
// let percentage = gananciaValue / 100;
// let subValue = parseInt(sub.innerHTML.trim().substring(1).split('.').join(''));
// let valuePercentage = subValue * percentage;
// let totalFinal = subValue + valuePercentage;

// products.forEach( product => {
//     product.addEventListener('change', (e) => {
//         let gananciaValue = parseInt(ganancia.value);
//         let percentage = gananciaValue / 100;
//         let subValue = parseInt(sub.innerHTML.trim().substring(1).split('.').join(''));
//         let valuePercentage = subValue * percentage;
//         let totalFinal = subValue + valuePercentage;
        
//         let inputs = document.getElementsByName('value');
//         let total = 0;

//         console.log(gananciaValue != NaN)

//         for (let i = 0; i < inputs.length; i++) {
//             if(parseInt(inputs[i].value)){
//                 total += parseInt(inputs[i].value);
//             }
//         };
        
//         sub.innerHTML = `
//             $${total.toLocaleString('es-ES')}
//         `;

//         tot.innerHTML = `
//         $${totalFinal.toLocaleString('es-ES')}
//         `;
//     })
// })
    
// ganancia.addEventListener('change', () => {
//     let gananciaValue = parseInt(ganancia.value);
//     let percentage = gananciaValue / 100;
//     let subValue = parseInt(sub.innerHTML.trim().substring(1).split('.').join(''));
//     let valuePercentage = subValue * percentage;
//     let totalFinal = subValue + valuePercentage;
//     tot.innerHTML = `
//         $${totalFinal.toLocaleString('es-ES')}
//     `;
//     document.getElementsByName('product_total')[0].value = totalFinal;
// })

*/