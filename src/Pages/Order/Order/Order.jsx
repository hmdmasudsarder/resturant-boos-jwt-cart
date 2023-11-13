import {useState} from 'react';
import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { TabList, Tab, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import {useParams} from 'react-router-dom'

const Order = () => {
    const categories = ['desserts', 'soup', 'salad', 'pizza', 'drinks'];
    const {category} = useParams()
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Cover img={orderImg} title={"ORDERED FOOD"}></Cover>
      <div className="border-b text-center">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}/>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
