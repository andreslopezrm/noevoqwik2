import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Hoy la NASA anunciará algo gordo sobre Marte: así puedes verlo en directo";

const description =
  "Dentro de unas horas se va a llevar a cabo una teleconferencia por parte de la NASA que estará dedicada a Marte y con la cual han puesto las expectativas realmente altas. Por el momento, te contamos lo que sabemos y lo que se puede esperar, al menos a priori, del acontecimiento.";

const image =
  "https://www.adslzone.net/app/uploads-adslzone.net/2024/04/Marte-imagen-planeta-espacio.jpg?v=1";

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
