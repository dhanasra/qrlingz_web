
import { InfoCircleOutlined } from '@ant-design/icons';
import { AcUnitOutlined, LocationCityOutlined,  AccountBalanceWalletOutlined, AccountCircleOutlined, AlarmOutlined, BedOutlined, CalendarMonthOutlined, CardTravelOutlined, CheckCircleOutlineOutlined, HistoryOutlined, KitchenOutlined, LightOutlined, LocalDrinkOutlined, PeopleOutlineOutlined, ShoppingBagOutlined, StarBorderOutlined, WeekendOutlined, WifiOutlined, WindPowerOutlined, WineBarOutlined } from '@mui/icons-material';

export const getFeedbackIcons=(key)=>{

  switch(key){
    case "star": return <StarBorderOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "light": return <LightOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "check": return <CheckCircleOutlineOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "history": return <HistoryOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "calendar": return <CalendarMonthOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "info": return <InfoCircleOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "kitchen": return <KitchenOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "drink": return <LocalDrinkOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "ac_unit": return <AcUnitOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "alarm": return <AlarmOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "building": return <AccountBalanceWalletOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "person": return <AccountCircleOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "travel": return <CardTravelOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "location": return <LocationCityOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "shopping_bag": return <ShoppingBagOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "wine": return <WineBarOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "wind_power": return <WindPowerOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "weekend": return <WeekendOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "wifi": return <WifiOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "bed": return <BedOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
    case "people": return <PeopleOutlineOutlined style={{fontSize: "20px", marginRight: "12px"}}/>;
  }
}