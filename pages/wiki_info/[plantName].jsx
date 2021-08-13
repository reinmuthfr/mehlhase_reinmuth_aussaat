import Image from 'next/image';
import Layout from '@/components/Layout';

/**
 * Hier werden Info-Seiten über die Wikimedia-Rest-API erzeugt
 * getStaticProps funktioniert nicht, wenn die URLs für die Abfragen an die Wikipedia-Api
 * von den Antwort-URLS abweichen;
 * für den jetzigen Ansatz mit query-Übergabe aus Plant-Komponente sowieso getServerSideProps
 */

export async function getServerSideProps({ params, query }) {
  // console.log(query);
  const plantName = params.plantName;
  const latinPlantName = query.latinName;
  const encodedPlantName = encodeURIComponent(plantName);
  const encodedLatinPlantName = encodeURIComponent(latinPlantName);
  let result = {};
  let latinResult = {};
  const url = `https://de.wikipedia.org/api/rest_v1/page/summary/${encodedPlantName}`;
  try {
    const response = await fetch(url);
    result = await response.json();
  } catch (error) {
    console.log(error);
  }

  const latinURL = `https://de.wikipedia.org/api/rest_v1/page/summary/${encodedLatinPlantName}`;
  try {
    const latinResponse = await fetch(latinURL);
    latinResult = await latinResponse.json();
  } catch (error) {
    console.log(error);
  }

  result = result.type === 'standard' ? result : latinResult;
  return {
    props: {
      plantName,
      result,
    },
  };
}

export default function PlantWiki({ plantName = 'wiki', result }) {
  if (result.type !== 'standard') {
    return (
      <Layout
        title={`Kein passender Wikipedia-Eintrag für ${plantName}`}
      ></Layout>
    );
  }

  return (
    <Layout title={plantName}>
      <div dangerouslySetInnerHTML={{ __html: result.extract_html }} />
      {result.thumbnail && (
        <Image
          className="wiki-image"
          src={result.originalimage.source}
          alt={plantName}
          width={result.originalimage.width}
          height={result.originalimage.height}
        ></Image>
      )}
      <br></br>
      <div>Aus Wikipedia</div>
      {result.content_urls && (
        <a
          href={result.content_urls.desktop.page}
          rel="noreferrer"
          target="_blank"
        >
          Zum vollständigen Wikipedia-Artikel
        </a>
      )}
    </Layout>
  );
}
