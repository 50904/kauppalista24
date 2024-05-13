import { writable } from "svelte/store";


export function pbStore(kokoelmanNimi) {
    const taustaStore = writable();
    return {
        ...taustaStore,
        set(arvo) {
            taustaStore.set(arvo);
        } 
    }
}