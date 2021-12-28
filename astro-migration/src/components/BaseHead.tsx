import getSharingImage from "@jlengstorf/get-share-image";
import ArticleSchema from "./ArticleSchema";
import site from "../data/site";

export interface BaseHeadProps {
  title: string;
  tagline?: string;
  description: string;
  date: string;
  canonicalURL?: string;
  articleSchema?: boolean;
}

function BaseHead(props: BaseHeadProps) {
  const {
    title,
    tagline = "Read more",
    description,
    date,
    canonicalURL,
    articleSchema,
  } = props;

  const openGraphImageURL = getSharingImage({
    title,
    tagline,
    taglineColor: "#000",
    titleColor: "#000",
    titleExtraConfig: "_bold",
    titleFont: "Roboto",
    taglineFont: "Roboto",
    cloudName: site.cloudinaryCloudName,
    imagePublicID: site.cloudinaryImagePublicID,
  });

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      {/* Favicon for all browsers */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />

      {/* For Google and Android */}
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="favicon-48x48.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="favicon-192x192.png"
      />

      {/* For iPad */}
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="167x167"
        href="favicon-167x167.png"
      />
      {/* For iPhone */}
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="favicon-180x180.png"
      />

      {/* Global CSS */}
      <link rel="stylesheet" href={`/src/styles/global.css`} />
      {/* Syntax highlighting */}
      {/* <link rel="stylesheet" href={`/src/styles/prism-dracula.css`} /> */}
      {/* Primary Meta Tags */}
      <title>{title || site.title}</title>
      <meta name="title" content={title || site.title} />
      <meta name="description" content={description || site.description} />
      {/* Sitemap */}
      <link rel="sitemap" href="/sitemap.xml" />
      {/* RSS */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${site.name} Blog`}
        href={`${site.url}/feed/blog.xml`}
      />
      {/* Canonical */}
      <link rel="canonical" href={canonicalURL} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalURL || site.url} />
      <meta property="og:title" content={title || site.title} />
      <meta
        property="og:description"
        content={description || site.description}
      />
      <meta property="og:image" content={openGraphImageURL} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalURL || site.url} />
      <meta property="twitter:title" content={title || site.title} />
      <meta
        property="twitter:description"
        content={description || site.description}
      />
      <meta property="twitter:image" content={openGraphImageURL} />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        as="style"
        onLoad={() => {
          this.onload = null;
          this.rel = "stylesheet";
        }}
      />
      <noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </noscript>
      {articleSchema && (
        <ArticleSchema
          title={title}
          description={description}
          canonicalURL={canonicalURL}
          date={date}
          ogImageUrl={openGraphImageURL}
        />
      )}
    </>
  );
}

export default BaseHead;
