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
