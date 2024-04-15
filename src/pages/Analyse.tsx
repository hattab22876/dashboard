
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
import TableFour from '../components/Tables/TableFour';
import DefaultLayout from '../layout/DefaultLayout';

const Analyse = () => {
  return (
    <DefaultLayout>
         <Breadcrumb pageName="Tables" />

<div className="flex flex-col gap-10">
  <TableOne />
  <TableTwo />
  <TableThree />
  <TableFour />
</div>
    </DefaultLayout>
  )
}



export default Analyse;
