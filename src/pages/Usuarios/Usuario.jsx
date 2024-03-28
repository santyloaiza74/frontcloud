import { CDBContainer } from 'cdbreact';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from "../../components/Navbar/Navbar"
import List from '../../components/Usuario/List';
import { Button } from 'react-bootstrap';

function usuarios(){
    return(
        <div style={{ display: 'block', height: '100vh' }}>
        {/* Navbar */}
        <div >
          <Navbar />
        </div>
  
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* Sidebar */}
          <div style={{ width: '250px', backgroundColor: '#ffffff' }}>
            <Sidebar />
          </div>
  
          {/* Contenido de la página */}
          <div style={{ display:'flex', padding: '20px' }}>
            <CDBContainer>
              <List></List>
            </CDBContainer>
          </div>
        </div>
      </div>
    )
}

export default usuarios