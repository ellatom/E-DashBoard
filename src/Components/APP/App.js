import './App.css';
import TemplateTable from '../TemplateTable/TemplateTable';
import LineGraph from '../LineGraph/LineGraph';
import TemplateCard from '../TemplateCard/TemplateCard';
import * as params from '../../Data/config';

function App() {
  return (
    <div className="App">
      <div class="table_container">
        <div class="trades">
          <TemplateTable title="Trades" data_file ="trades_data.json" table_key= "trades_keys"/>
        </div>
        <div class="users_logs">
          <TemplateTable title="User Logs" data_file ="users_logs_data.json" table_key= "users_keys"/>
        </div>
      </div>
      <div class="bottom_container">
        <div class="line_graph_container">
          <LineGraph/>
        </div>
        <div class="card_container">
          <TemplateCard description= {params.card_description_1}/>
        </div>
      </div>
    </div>
  );
}

export default App;