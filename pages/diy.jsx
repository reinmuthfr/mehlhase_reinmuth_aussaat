import Layout from '../components/Layout';
import Calendar from '@/components/Calendar';

export default function diyCalendar() {
  return (
    <Layout title="DIY-Kalender">
      <Calendar edit={true}></Calendar>
    </Layout>
  );
}
