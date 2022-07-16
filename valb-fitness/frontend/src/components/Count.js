import React from "react";

function Count({ duas, cinco, sete }) {
  return (
        <div className="count">
            {Boolean(duas) && <p>Para 2x na semana: R${duas}</p> }
            {Boolean(cinco) && <p>Para 5x na semana: R${cinco}</p> }
            {Boolean(sete) && <p>Para 7x na semana: R${sete}</p> }
        </div>
  );
}

export default Count;