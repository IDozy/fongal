import React from "react";

const ConcursoGanadero = () => {
  const ganadores = ["2do Lugar", "1er Lugar", "3er Lugar"];

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      {/* Sección de bienvenida */}
      <section className="bienvenida text-center mb-12">
        <h2 className="text-4xl font-bold text-green-900 mb-4">
          Bienvenido al Concurso Ganadero
        </h2>
        <p className="text-xl text-green-800">
          ¡Descubre y celebra la belleza de nuestros concursantes!
        </p>
      </section>
      {/* Sección de ganadores */}
      <section className="bg-gradient-to-r from-yellow-200 via-green-300 to-yellow-200 rounded-lg shadow-xl p-8 mb-12">
        <h3 className="text-3xl font-bold text-green-800 text-center mb-8">
          Ganadores
        </h3>
        <div className="flex justify-around">
          {ganadores.map((lugar, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-green-800">{lugar}</h3>
              <p className="text-green-700">por concursar...</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ConcursoGanadero;
