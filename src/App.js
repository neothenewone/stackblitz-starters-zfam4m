import React from "react";
import "./style.css";

export default function Form() {
  return (
    <div>
       <section class="main">

<figure class="main__figure">
    <img src="https://www.isepsantafe.edu.ar/images/Logos/logo_1.png" class="main__img" />
</figure>

<div class="main__contact">

    <h2 class="main__title">Bienvenidos al Formulario de Inscripcion</h2>
    <p class="main__paragraph">Tecnicatura ISEP</p>

    <form class="main__form">

        <input type="text" placeholder="Nombre" class="main__input" /> 

        <input type="text" placeholder="Apellido" class="main__input" />
        
        <input type="text" placeholder="DNI" class="main__input" /> 

        <input type="date" placeholder="Password" class="main__input" />
        <label class="main__paragraph">Departamento</label>


        <select name="pais" id="pais" className="main__input">
         <option value="francia">La Capital</option>
        <option value="espana">Rosario</option>
        <option value="francia">Las Rosas</option>
        <option value="espana">Constitucion</option>
        <option value="francia">Caseros</option>
        <option value="espana">San Martin</option>
        <option value="francia">General Lopez</option>
        <option value="espana">General Obligado</option>
        <option value="francia">Vera</option>
        <option value="espana">Rosario</option>

        </select>
        



        <input type="submit" value="Sign In" class="main__input main__input--send" />

    </form>

    <p class="main__paragraph">Or continue with</p>

    <article class="main__social">

        <a href="#" class="main__link">
            <img src="data:image/png;base64,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" class="main__icon" />
        </a>

       

    </article>

</div>

</section>
    </div>
  );
}
