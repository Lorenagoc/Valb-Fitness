import React from "react";
import Count from "./Count";

function Iterator({ mensal, semestral, anual }) {
  return (
        <div className="iterator">
            {mensal.map((item, key) => {
                    return (
                        <div>
                            <p>Plano Mensal:</p>
                            <Count
                            key={key}
                            duas={item.duas}
                            cinco={item.cinco}
                            sete={item.sete}
                            />
                        </div>
                    );  

            })}
            <br />
            {semestral.map((item, key) => {
                    return (
                        <div>
                            <p>Plano semestral:</p>
                            <Count
                            key={key}
                            duas={item.duas}
                            cinco={item.cinco}
                            sete={item.sete}
                            />
                        </div>
                    );  

            })}
            <br />
            {anual.map((item, key) => {
                    return (
                        <div>
                            <p>plano anual</p>
                            <Count
                            key={key}
                            duas={item.duas}
                            cinco={item.cinco}
                            sete={item.sete}
                            />
                        </div>
                    );  

            })}
        </div>
    
  );
}

export default Iterator;