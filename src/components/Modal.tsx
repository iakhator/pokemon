import {Types, Moves, Stats, ModalProps} from "../types/app.types";

export const Modal = ({ pokemon, closeModal }: ModalProps): JSX.Element=> {
  const types = (types:Types[]) => {
    return (
      <div className="ability">
        <p>Type</p>
        <div>
          {types.map((t, idx) => (
            <span key={idx}>{t.type.name}</span>
          ))}
        </div>
      </div>
    );
  };

  const stats = (stats: Stats[])=> {
    return (
      <div className="ability">
        <p>Stats</p>
        <div>
          {stats.map((s, idx) => (
            <span key={idx}>{s.stat.name}</span>
          ))}
        </div>
      </div>
    );
  };

  const moves = (moves: Moves[]) => {
    return (
      <div className="ability">
        <p>Moves</p>
        <div>
          {moves.map((m, idx) => (
            <span key={idx}>{m.move.name}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
   <div className="modal">
        <div className="modal_content">
          <div className="modal_head">
            <h3>Ivysaur</h3>
          </div>
          <div className="modal_body">
            <div>
              <img src={pokemon[0].imageUrl} alt="name" />
            </div>
            <div className="modal_body_abilities">
              <div className="ability">
                <p>Species</p>
                <div>
                  <span>{pokemon[0]?.species.name}</span>
                </div>
              </div>
              {stats(pokemon[0].stats)}
              {types(pokemon[0].types)}
              <div className="ability">
                <p>Weight</p>
                <div>
                  <span>{pokemon[0].weight}</span>
                </div>
              </div>
              {moves(pokemon[0].moves)}
            </div>
          </div>
          <div className="modal_footer">
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      </div>
    )
};
