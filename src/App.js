import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import Menubar from './components/menu';
import Sidebar from './components/sidebar';
import StockChart from './components/chart';
import Footer from './components/footer';
import ParentComponent from './components/descParents';
import CombinationBox from './components/comboboxes';


const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedStock, setSelectedStock] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [receivedData, setReceivedData] = useState('');


  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Menubar />
      </Grid>
      <Grid item xs={2} style={{ border: "0.5px solid #ccc" }}>
        <Sidebar />
      </Grid>
      <Grid item xs={8} style={{ border: "0.5px solid #ccc", padding: "10px" }}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <ParentComponent />
          </Grid>
          <Grid item xs={4}>
            <CombinationBox 
            selectedStock = {selectedStock}
            selectedStartDate = {selectedStartDate}
            selectedEndDate = {selectedEndDate}
            setSelectedStock = {setSelectedStock}
            setSelectedStartDate = {setSelectedStartDate}
            setSelectedEndDate = {setSelectedEndDate}
            setReceivedData = {setReceivedData}
            />
          </Grid>
        </Grid>
        <StockChart 
        style={{padding: "10px"}} 
        selectedStock={selectedStock}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        receivedData={receivedData}/>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;