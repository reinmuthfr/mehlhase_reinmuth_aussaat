export async function getStaticProps() {
  const response = await fetch(
    'https://de.wikipedia.org/api/rest_v1/page/summary/Apfel'
  );
  const result = await response.json();
  console.log(result);
  return { props: { result } };
}

export default function wiki_test({ result }) {
  return (
    <>
      <div>{result.extract}</div>
      <div dangerouslySetInnerHTML={{ __html: result.extract_html }} />
    </>
  );
}
