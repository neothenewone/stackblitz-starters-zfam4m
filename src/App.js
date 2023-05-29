import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
       <section class="main">

<figure class="main__figure">
    <img src="./img/illustration.svg" class="main__img" />
</figure>

<div class="main__contact">

    <h2 class="main__title">Hello Again!</h2>
    <p class="main__paragraph">Wellcome back you've been missed!</p>

    <form class="main__form">

        <input type="text" placeholder="Enter a username" class="main__input" /> 

        <input type="password" placeholder="Password" class="main__input" />

        <input type="submit" value="Sign In" class="main__input main__input--send" />

    </form>

    <p class="main__paragraph">Or continue with</p>

    <article class="main__social">

        <a href="#" class="main__link">
            <img src="./img/google-icon.svg" class="main__icon" />
        </a>

        <a href="#" class="main__link">
            <img src="./img/apple.svg" class="main__icon" />
        </a>

        <a href="#" class="main__link">
            <img src="./img/facebook.svg" class="main__icon" />
        </a>

    </article>

</div>

</section>
    </div>
  );
}
