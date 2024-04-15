<script>
    let asiat = ['Leipä', 'Tomaatti', 'Kurkku'];

    let uusiAsia = '';

    function lisaaAsia(event) {
        event.preventDefault();
        asiat.push(uusiAsia);
        asiat = asiat;
        uusiAsia = '';
    }
</script>

<div class="komponentti">
    <h1>Kauppalista</h1>
    <ul>
      {#each asiat as asia}
        <li>
           <input type="checkbox" />
           {asia}
        </li>
      {/each}
    <ul>
    <form class="uusi">
        <label for= "uusi-asia">Lisää uusi:</label>
        <input id="uusi-asia" type="text" bind:value={uusiAsia} />
        <button on:click|preventDefault={lisaaAsia}>Lisää</button>
    </form>
</div>
<style>
     .komponentti {
        color: hwb(247 12% 74%);
        font-family: 'Segoe UI' , Tahoma, Geneva , Verdana, Sans-serif;
        font-size: 12px;
    }
    h1 {
        font-size: 200%
    }
    ul {
        font-size: 150%;
    }

    li {
        list-style-type: none;
    }
    .uusi {
        font-size: 125%;
    }
</style>

