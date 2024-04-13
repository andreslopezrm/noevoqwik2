import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title = "Google Maps con guía para aprovechar todas sus funcione";

const description =
  "La app de mapas y navegación de Google es imprescindible para muchos usuarios. Google Maps es probablemente una de las más importantes de nuestro móvil desde hace mucho";

const image = "https://i.blogs.es/635f55/maps/840_560.jpg?v=1";

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
