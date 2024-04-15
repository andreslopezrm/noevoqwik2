import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Nuevo macOS 15: fecha de salida, compatibilidad, características y todo lo que creemos saber sobre él";

const description =
  "Parece que fue ayer cuando macOS Sonoma llegó de forma estable a todos los Mac compatibles, pero hay un dato importante a tener en cuenta: estamos a menos de tres meses de ver a su sucesor. macOS 15 ya está en plena fase de desarrllo interno dentro de los laboratorios secretos del Apple Park.";

const image = "https://i.blogs.es/32f81a/macos-15/1200_800.webp?v=1";

export const head: DocumentHead = ({ url: { href } }) => {
  return {
    title: title,
    meta: [
      {
        property: "og:url",
        content: href,
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:site_name",
        content: "BitHouse",
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "fb:app_id",
        content: "7572011069531273",
      },
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:image:secure_url",
        content: image,
      },
      {
        property: "og:image:type",
        content: "image/jpeg",
      },
      {
        property: "og:image:width",
        content: "1536",
      },
      {
        property: "og:image:height",
        content: "806",
      },
      {
        property: "og:image:alt",
        content: title,
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
