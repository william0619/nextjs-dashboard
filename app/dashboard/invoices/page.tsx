import { fetchRevenue } from '@/app/lib/data';

/**
 author: william   email:362661044@qq.com
 create_at: 2024/2/18
 **/
export default async function Page() {
  const revenue = await fetchRevenue();

  return <p>Invoices Page</p>;
}
