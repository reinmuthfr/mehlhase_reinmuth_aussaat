import Calendar from '@/components/Calendar';
import Layout from '../components/Layout';

export default function Home() {
  return (
    /* Hier die Layout-Komponente aufrufen und ihr den Seiteninhalt als Kinder übergeben */
    <Layout title={'Aussaatkalender'}>
      <Calendar></Calendar>
    </Layout>
  )
}
