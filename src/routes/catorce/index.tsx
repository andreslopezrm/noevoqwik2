import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title = "Los mejores navegadores web para Android, comparativa a fondo";

const description =
  "Navegadores en Android hay para dar y regalar. Basta con una sencilla búsqueda en Google Play para encontrar cientos y cientos de ellos, no todos igual de buenos";

const image =
  "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/02/Navegadores-Android-Logos.jpg?fit=1920%2C1280&quality=80&strip=all&ssl=1";

export const head: DocumentHead = ({ url: { href } }) => {
  return {
    title: title,
    meta: [
      {
        name: "og:url",
        property: href,
      },
      {
        name: "og:type",
        property: "article",
      },
      {
        name: "og:description",
        property: description,
      },
      {
        name: "og:site_name",
        property: "BitHouse",
      },
      {
        name: "og:title",
        property: title,
      },
      {
        name: "fb:app_id",
        property: "7572011069531273",
      },
      {
        name: "og:image",
        property: image,
      },
      {
        name: "og:image:secure_url",
        property: image,
      },
      {
        name: "og:image:type",
        property: "image/jpeg",
      },
      {
        name: "og:image:width",
        property: "1536",
      },
      {
        name: "og:image:height",
        property: "806",
      },
      {
        name: "og:image:alt",
        property: title,
      },
    ],
  };
};

export default component$(() => {
  return (
    <>
      <article>
        <h1>{title}</h1>
        <img src={image} alt={title} width={1200} height={600} />
      </article>
    </>
  );
});
