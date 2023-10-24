import React from "react";

function PokemonInfo({ data }) {
    return (
        <div className="App">
            {data !== undefined && (
                <header className="App-header">
                    <div className="pokemonPresentation">
                        {data ? <img src={data.sprites.front_default} alt={data.name}/> : null}
                        {data ? <p className="nombre">{data.name}</p> : null}
                        {data ? <p className="tipo">{data.types[0].type.name}</p>  : null}
                        <div className="stats-fisicos">
                            {data ? <p>Peso: {data.weight/10} Kg</p> : null}
                            {data ? <p>Altura: {data.height/10} m</p> : null}
                        </div>
                    </div>

                    <div className="stats">
                        {data ? <div className="barra-stats" style={{ width: `calc(70% * (${data.stats[1].base_stat} / 200))`}}>
                                    <p>Att: {data.stats[1].base_stat}</p>
                                </div> : null}
                        
                        {data ? <div className="barra-stats" style={{ width: `calc(70% * (${data.stats[2].base_stat} / 200))`}}>
                                    <p>Def: {data.stats[2].base_stat}</p> 
                                </div>: null}
                        
                        {data ? <div className="barra-stats" style={{ width: `calc(70% * (${data.stats[3].base_stat} / 200))`}}>
                                    <p>SP Att: {data.stats[3].base_stat}</p> 
                                </div>: null}
                        
                        {data ? <div className="barra-stats" style={{ width: `calc(70% * (${data.stats[4].base_stat} / 200))`}}>
                                    <p>SP Def: {data.stats[4].base_stat}</p> 
                                </div>: null}
                        
                        {data ? <div className="barra-stats" style={{ width: `calc(70% * (${data.stats[5].base_stat} / 200))`}}>
                                    <p>Spd: {data.stats[5].base_stat}</p> 
                                </div>: null}
                        
                        {data ? <div className="barra-stats" style={{ width: `calc(70% * (${data.stats[0].base_stat} / 200))`}}>
                                    <p>HP: {data.stats[0].base_stat}</p> 
                                </div>: null}
                    </div>
                </header>
            )}
        </div>
    );
}

export default PokemonInfo;