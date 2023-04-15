import logo from './logo.svg';
import './App.css';
import { HolderComponent } from './redux/HolderComponent';
import { Provider } from 'react-redux';
import store from './redux/coreStore';
// import FunctionComponent from './functionComponent';
// import ParentComponent from './ParentComponent';
// import FormComponent from './EventComponent';
// import EventComponent from './EventComponent';
// import StateComponent from './StateComponent';
// import ObjectComponent from './ObjectComponent';
// import Condition from './further/Condition';
// import ConditionTernari from './further/ConditionTernari';
// import ConditionAnd from './further/ConditinAnd';
// import MapList from './further/MapList';
// import MapTable from './further/MapTable';
// import MapContainer from './further/MapContainer';
// import SelectComponent from './further/SelectComponent';
// import { FetchList } from './fetch/FetchList';
// import { FetchListState } from './fetch/FetchListState';
// import { FetchGet } from './fetch/FetchGet';
// import RouteDefinitons from './router/app/RouteDefinitions';
// import BasicCard from './router/app/mui';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
         <br>
        </br>
        {/* <FunctionComponent/> */}
        {/* <ParentComponent/> */}
        {/* <EventComponent/> */}
        {/* <StateComponent/> */}
        {/* <ObjectComponent/> */}
        {/* <Condition/> */}
        {/* <ConditionTernari/> */}
        {/* <ConditionAnd/> */}
        {/* <MapList/> */}
        {/* <MapTable/> */}
        {/* <MapContainer/> */}
        {/* <SelectComponent/> */}
        {/* <FetchList/> */}
        {/* <FetchListState/> */}
        {/* <FetchGet/> */}
        {/* <RouteDefinitons/> */}
        {/* <BasicCard/> */}
        <HolderComponent/>

      </header>
    </div>
    </Provider>
  );
}

export default App;
