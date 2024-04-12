import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title = "Las funciones de Galaxy AI como Live Translate agregan más idiomas";

const description =
  "Gran parte de lo que Samsung ha hecho con Galaxy AI facilita el proceso de interacción con otras personas que hablan un idioma diferente. Esa funcionalidad solo se está expandiendo a medida que la suite Galaxy AI de Samsung adopta más idiomas en una nueva actualización.";

const cover =
  "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/03/galaxy-logo.jpg?w=1500&quality=82&strip=all&ssl=1";

export const head: DocumentHead = ({ url: { href } }) => {
  return {
    title: title,
    meta: [
      {
        name: "og:url",
        content: href,
      },
      {
        name: "og:type",
        content: "article",
      },
      {
        name: "og:image",
        content: cover,
      },
      {
        name: "og:image:secure_url",
        content: cover,
      },
      {
        name: "og:description",
        content: description,
      },
      {
        name: "og:site_name",
        content: "BitHouse",
      },
      {
        name: "og:title",
        content: title,
      },
      {
        name: "fb:app_id",
        content: "7572011069531273",
      },
    ],
  };
};

export default component$(() => {
  return (
    <>
      <article>
        <figure>
          <img src={cover} alt={title} width={1200} height={600} />
        </figure>
        <h1>{title}</h1>
      </article>
    </>
  );
});
