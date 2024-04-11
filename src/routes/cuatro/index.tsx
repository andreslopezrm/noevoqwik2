import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Fuentes: Pixel Tablet tendrá 8 GB de RAM, cuatro colores y esta base incluida";

const description =
  "Si bien Google ya habló sobre la tableta Pixel en dos eventos el año pasado , aún se desconocen los detalles clave. Ahora podemos informar sobre varias de esas especificaciones de la tableta Pixel, incluida la RAM, según fuentes familiarizadas con el asunto.";

const cover =
  "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/04/pixel-tablet-ram-color-cover.jpg?w=1500&quality=80&strip=all&ssl=1";

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
