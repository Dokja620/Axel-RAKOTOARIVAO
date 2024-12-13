import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header>
      <nav>
        <a href="#top">Axel R.</a>

        <div class="lang">
          <p data-check="french">FR</p>
          <p data-check="english">EN</p>

          <input type="checkbox" name="lang-switch" id="lang-switch" />
          <label for="lang-switch"></label>
        </div>
      </nav>
    </header>
  );
});
