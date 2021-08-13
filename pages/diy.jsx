import Layout from '../components/Layout';
import Calendar from '@/components/Calendar';

//Seite um Kalender durch Nutzer bearbeitbar und speicherbar (in Firebase-Datenbank) zu machen
export default function diyCalendar() {
  return (
    <Layout title="DIY-Kalender">
      <Calendar edit={true}></Calendar>
    </Layout>
  );
}
