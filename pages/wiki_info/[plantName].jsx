import Image from 'next/image';

import Layout from '@/components/Layout';
const entries = require('@/data/data.json');

//TODO:Wie setzt man hier absoluten Pfad für beliebige hosts
export async function getStaticPaths() {
  let paths = [];
  //const entries = await (await fetch('../../data/data.json')).json();
  //console.log(entries);
  paths = entries.map(({ plantName }) => ({ params: { plantName } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const plantName = params.plantName;
  const encodedPlantName = encodeURIComponent(plantName);
  const url = `https://de.wikipedia.org/api/rest_v1/page/summary/${encodedPlantName}`;
  // console.log({ url });
  const response = await fetch(url);
  let result = await response.json();
  //console.log(result);
  const plant = entries.find((entry) => entry.plantName === plantName);
  const latinPlantName = plant.latinPlantName;
  //console.log(latinPlantName);
  const encodedLatinPlantName = encodeURIComponent(latinPlantName);
  const latinURL = `https://de.wikipedia.org/api/rest_v1/page/summary/${encodedLatinPlantName}`;
  const latinResponse = await fetch(latinURL);
  const latinResult = await latinResponse.json();
  result = result.type === 'standard' ? result : latinResult;
  return {
    props: {
      plantName,
      result,
    },
  };
}

export default function PlantWiki({ plantName = 'wiki', result }) {
  // console.log(plantName, result);
  return (
    <Layout title={plantName}>
      <div dangerouslySetInnerHTML={{ __html: result.extract_html }} />
      {result.originalimage && (
        <Image
          src={result.originalimage.source}
          alt={plantName}
          width={result.originalimage.width}
          height={result.originalimage.height}
        ></Image>
      )}
      <br></br>
      {result.content_urls && (
        <a
          href={result.content_urls.desktop.page}
          rel="noreferrer"
          target="_blank"
        >
          Mehr
        </a>
      )}
    </Layout>
  );
}
