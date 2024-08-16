let tip = 275;
//let bacsis =  300 > tip > 50 ? `${tip}*0.2`: 'tip*0.15';
 /*if (tip > 50 && tip < 300) {
    console.log(`Nota a fost ${tip}, bacsisul a fost `+ tip*0.15 + ` si valoarea totala `+ (tip*0.15+tip) );
} else {
    console.log(`Nota a fost ${tip}, bacsisul a fost `+ tip*0.2 + ` si valoarea totala `+ (tip*0.2+tip) );
}*/

tip > 50 && tip < 300 === true
?  console.log(`Nota a fost ${tip}, bacsisul a fost `+ tip*0.15 + ` si valoarea totala `+ (tip*0.15+tip) )
:  console.log(`Nota a fost ${tip}, bacsisul a fost `+ tip*0.2 + ` si valoarea totala `+ (tip*0.2+tip) );