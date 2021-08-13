import Calendar from '@/components/Calendar';
import Layout from '../components/Layout';
//Startseite mit nicht-editierbarem default-Kalender
export default function Home() {
  return (
    <Layout title={'Aussaatkalender'}>
      <Calendar edit={false}></Calendar>
    </Layout>
  );
}
