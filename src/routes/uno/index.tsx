import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Los nuevos accesos directos a la aplicación Google";

const description =
  "Google Wallet para Android está implementando soporte para accesos directos a aplicaciones que le permiten colocar tarjetas de crédito y débito";

const cover =
  "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/03/google-wallet-logo-circle-4.jpg?w=1500&quality=80&strip=all&ssl=1";

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
        name: "og:image:width",
        content: "1200",
      },
      {
        name: "og:image:height",
        content: "600",
      },
      {
        name: "og:image:type",
        content: "image/jpeg",
      },
    ],
  };
};

export default component$(() => {
  return (
    <>
      <article>
         <h1>{title}</h1>
        <figure>
          <img src={cover} alt={title} width={1200} height={600} />
        </figure>
       
      </article>
    </>
  );
});
