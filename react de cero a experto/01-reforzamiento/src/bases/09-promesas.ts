const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        // yo quiero jugar 
        // resolve(100);
        reject('Mi amigo se perdio');
    }, 2000); // 2 segundos
});


myPromise
    .then(
        (myMoney) => {
            console.log(`Tengo mi dinero ${myMoney}`);
        })
    .catch(reason => {
        console.warn(reason);
    })
    .finally(() => {
        console.log('pues ha seguir con mi vida');
    });