import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Enviar fotos, documentos o cualquier archivo nunca había sido tan fácil";

const description =
  "A la hora de compartir archivos con nuestros contactos, tenemos muchas maneras de hacerlo desde nuestro móvil Android: apps de mensajería como WhatsApp, nubes como Google Drive, o simplemente con un correo de Gmail";

const image = "https://i.blogs.es/48ae0b/quick-share/1200_800.webp?v=1";

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
