races();

async function races() {

    let races = document.getElementById("races");
    const res = await fetch('https://go-api-lgafo.ondigitalocean.app/api/races/live', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US',
        },
    });

    console.log(res.status)
    let race = await res.json()
    console.log(race)
    console.log(race.race.drivers)
    console.log(race.race.drivers.length)
    if (res.status !== 200) {
        console.log("here1")
        races.innerHTML = `<p>There are no active races. Check next matches for the next race.</p>`;
  } else {
    if (race.race.drivers.length === 0){
        console.log("her2")
        races.innerHTML = `<p>There are no drivers on this race.</p>`;
    }else{
        console.log("here3")
        race.race.drivers.forEach(driver =>{
        races.innerHTML += `<section class={'flex border-l-2 border-main-red mr-16 mb-6 shadow rounded w-fit w-96'}>
                            <Image class={"w-10 h-10 object-cover "} src={"/../_next/image?url=%2Fcar.png&w=1200&q=75"} alt={"car icon"} width={550} height={425}/>
                            <h3 data-tip data-for='race5' class={"text-lg mt-auto mb-auto underline ml-3 "}>${driver.name}</h3>                    
                            <div className={"mt-auto mb-auto ml-3"}>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_half</span>
                            </div>
                            <button className={"btn-red"}>X1.5</button>
                        </section>`

      })

    }


  }
}