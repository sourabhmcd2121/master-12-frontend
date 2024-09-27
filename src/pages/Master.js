

import DataTable from 'react-data-table-component';





function Master() {


  const columns = [
    {
       		
   
      name: 'Id',
      selector: row => row.ID,
      sortable: true,
    },
    {
      name: 'Inventory',
      selector: row => row.Inventory,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.Name,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.Unit_price,
      sortable: true,
    },
    {
      name: 'Unit price',
      selector: row => row.Quantity,
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: row => row.Quantity,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: row => row.Amount,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.Year,
      sortable: true,
    },
  ];
  
  const data = [
      {
      Inventory: 'micorophone',
      ID: '1',
      Name: 'sumsunge',
      Unit_price:'150',
      Quantity:'15',
      Amount:'25000',
      Description:'foldeble ',
      Year:'2024',
    },
    {
      Inventory: 'micorophone',
      ID: '2',
      Name: 'sumsunge',
      Unit_price:'150',
      Quantity:'15',
      Amount:'25000',
      Description:'foldeble ',
      Year:'2024',
    },
  

    
      
  ]
  
  return (
    <div className="">
    
      <DataTable
			columns={columns}
			data={data}
      pagination 
		/>

    
    </div>
  );
}

export default Master;
