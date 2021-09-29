// for(var angkot = 1; angkot <= 10; angkot++){
//     console.log('angkot ini no '+ angkot +' ini');
// }

var jmlAngkot = 10,
    angkotBeroperasi = 6;
    // noAngkot = 1;

// while(noAngkot <= angkotBeroperasi){
//     console.log('Angkot No. '+ noAngkot +' beroperasi dengan baik');
//     noAngkot++;
// }

// for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
//     console.log('Angkot No. '+ noAngkot +' sedang tidak beroperasi');
// }

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ){
//     if(noAngkot <= 6){
//         console.log('Angkot No. '+ noAngkot + ' beroperasi dengan baik');
//     }else{
//         console.log('Angkot NO. '+ noAngkot + ' sedang tidak beroperasi');
//     }
// }

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= 6){
        console.log('Angkot No. '+ noAngkot + ' beroperasi dengan baik');
    }else if(noAngkot === 8|| noAngkot === 10){
        console.log('Angkot No. '+ noAngkot + ' sedang lembur');
    }else{
        console.log('Angkot NO. '+ noAngkot + ' sedang tidak beroperasi');
    }
}