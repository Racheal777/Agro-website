import React from 'react'
import AddProduceForm from '../components/addProduce'
import Header from '../components/header'

export default function ProduceForm() {
    const headerContent = (
        <React.Fragment>
          <h1>
            Add your <span className="span">Organic Food</span> 
          </h1>
        
         
        </React.Fragment>
      );
      return (
        <div>
          <Header bg="bg-produce" headerContent={headerContent} />
           
        <AddProduceForm/>
    </div>
  )
}
