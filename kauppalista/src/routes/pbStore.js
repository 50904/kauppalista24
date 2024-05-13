import { writable } from "svelte/store";

/*


Kun ladataan palvelimelta:
{
    tila: 'lataa'  
}

Kun ladattu:
{
    tila: 'valmis'
    iteemit: [{id: "obj1"}, {id: "obj2"}]
}

Jos virhe
{
    tila: 'virhe',
    virhe: 'Virheen teksti',
}
*/
export fuction pbStore(kokoelmaNimi) {
    const taustaStore = writable({tila: 'ladataan'}

    const kauppalistaAsiaPromise = lataaKauppalista(LISTA_ID);
    kauppalistaAsiatPromise.them({kauppalistaAsiat})
    )    
}










export function pbStore(kokoelmanNimi) {
    const taustaStore = writable({
        tila: 'lataa',
    });
    return {
        ...taustaStore,
        set(arvo) {
            taustaStore.set(arvo);
        },
    }
}
